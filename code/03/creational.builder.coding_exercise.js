/* 

You are asked to implement the Builder design pattern for rendering simple chunks of code.

Sample use of the builder you are asked to create:

let cb = new CodeBuilder('Person');
cb.addField('name').addField('age');
console.log(cb.toString());

The expected output of the above code is:

class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
}

*/

class Field {
  constructor(name) {
    this.name = name;
  }
}

class Class {
  static get indentSpaces() {
    return 2;
  }

  constructor(name) {
    this.name = name;
    this.fields = [];
  }

  toStringImpl(indentSize) {
    const code = [];
    const indent = " ".repeat(Class.indentSpaces * indentSize);
    let params = "";

    code.push(`class ${this.name} {\n`);

    if (this.fields.length > 0) {
      // Add Field params
      params = this.fields.map((field) => field.name).join(", ");

      code.push(`${indent}constructor(${params}) {\n`);

      // Add Fields
      for (const field of this.fields) {
        const indent = " ".repeat(Class.indentSpaces * (indentSize + 1));
        code.push(`${indent}this.${field.name} = ${field.name};\n`);
      }

      code.push(`${indent}}\n`);
    }

    code.push(`}`);

    return code.join("");
  }

  toString() {
    return this.toStringImpl(1);
  }
}

class CodeBuilder {
  constructor(className) {
    this._class = new Class(className);
  }

  addField(fieldName) {
    this._class.fields.push(new Field(fieldName));
    return this;
  }

  toString() {
    return this._class.toString();
  }
}

let cb = new CodeBuilder("Person");
cb.addField("name").addField("age");
console.log(cb.toString());
