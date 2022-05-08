const Relationship = Object.freeze({
  parent: 0,
  child: 1,
  sibling: 2,
});

class Person {
  constructor(name) {
    this.name = name;
  }
}

// Low Level (Storage)

class RelationshipBrowser {
  constructor() {
    if (this.constructor.name === "RelationshipBrowser") {
      throw new Error("RelationshipBrowser is abstract!");
    }
  }

  findAllChildrenOf(name) {}
}

class Relationships extends RelationshipBrowser {
  constructor() {
    super();
    this.data = [];
  }

  addParentAndChild(parent, child) {
    this.data.push({
      from: parent,
      type: Relationship.parent,
      to: child,
    });
    this.data.push({
      from: child,
      type: Relationship.child,
      to: parent,
    });
  }

  findAllChildrenOf(name) {
    return this.data
      .filter((r) => r.from.name === name && r.type === Relationship.parent)
      .map((r) => r.to);
  }
}

// High-level (Research)

class Research {
  constructor(browser, parent) {
    for (let p of browser.findAllChildrenOf(parent)) {
      console.log(`John has a child named ${p.name}`);
    }
  }
}

let parent = new Person("John");
let child1 = new Person("Chris");
let child2 = new Person("Matt");

// low-level
let rels = new Relationships();
rels.addParentAndChild(parent, child1);
rels.addParentAndChild(parent, child2);

new Research(rels, "John");
