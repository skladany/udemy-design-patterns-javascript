class Tag {
  static get indentSize() {
    return 2;
  }

  constructor(name = "", text = "") {
    this.name = name;
    this.text = text;
    this.children = [];
  }

  toStringImpl(indent) {
    let html = [];
    let i = " ".repeat(Tag.indentSize * indent);
    html.push(`${i}<${this.name}>\n`);
    if (this.text.length > 0) {
      html.push(" ".repeat(Tag.indentSize * (indent + 1)));
      html.push(this.text);
      html.push("\n");
    }
    for (let child of this.children) {
      html.push(child.toStringImpl(indent + 1));
    }

    html.push(`${i}</${this.name}>\n`);
    return html.join("");
  }

  toString() {
    return this.toStringImpl(0);
  }

  static create(name) {
    return new HtmlBuilder(name);
  }
}

class HtmlBuilder {
  constructor(rootName) {
    this.root = new Tag(rootName);
    this.rootName = rootName;
  }

  // non-chained
  addChild(childName, childText) {
    this.child = new Tag(childName, childText);
    this.root.children.push(this.child);
  }

  addChildChained(childName, childText) {
    this.addChild(childName, childText);
    return this;
  }

  toString() {
    return this.root.toString();
  }

  clear() {
    this.root = new Tag(this.rootName);
  }

  build() {
    return this.root;
  }
}

// Single paragragh using string concat
const hello = "hello";
let html = [];
html.push("<p>");
html.push(hello);
html.push("</p>");
console.log(html.join(""));

// A list with 2 words in it
const words = ["hello", "javascript"];
html = [];
html.push("<ul>\n");
for (let word of words) {
  html.push(`  <li>${word}</li>\n`);
}
html.push("</ul>");
console.log(html.join(""));

// Non-chained builder
let builder = Tag.create("ul");
for (let word of words) {
  builder.addChild("li", word);
}
let tag = builder.build();
console.log(tag.toString());

// Chained builder
builder.clear();
builder
  .addChildChained("li", "foo")
  .addChildChained("li", "bar")
  .addChildChained("li", "baz");

console.log(builder.toString());
