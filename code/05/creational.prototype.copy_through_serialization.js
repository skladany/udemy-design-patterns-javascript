class Address {
  constructor(streetAddress, city, country) {
    this.streetAddress = streetAddress;
    this.city = city;
    this.country = country;
  }

  toString() {
    return `Address: ${this.streetAddress}, ` + `${this.city}, ${this.country}`;
  }
}

class Person {
  constructor(name, address) {
    this.name = name;
    this.address = address;
  }

  toString() {
    return `${this.name} lives at ${this.address}`;
  }

  greet() {
    console.log(
      `Hi, my name is ${this.name}, ` + `I live at ${this.address.toString()}`
    );
  }
}

class Serializer {
  constructor(types) {
    this.types = types;
  }

  markRecursively(object) {
    // add a type index to each object
    const idx = this.types.findIndex((t) => t.name === object.constructor.name);

    if (idx < 0) return;

    object["typeIndex"] = idx;

    for (const key in object) {
      // Make sure it's a direct property (and not inherited)
      if (object.hasOwnProperty(key) && object[key] !== null) {
        this.markRecursively(object[key]);
      }
    }
  }

  reconstructRecursively(object) {
    if (object.hasOwnProperty("typeIndex")) {
      const type = this.types[object.typeIndex];
      const obj = new type();

      for (const key in object) {
        if (object.hasOwnProperty(key) && object[key] !== null) {
          obj[key] = this.reconstructRecursively(object[key]);
        }
      }

      delete obj.typeIndex;
      return obj;
    }

    return object;
  }

  clone(object) {
    this.markRecursively(object);
    let copy = JSON.parse(JSON.stringify(object));
    return this.reconstructRecursively(copy);
  }
}

let john = new Person("John", new Address("123 London Road", "London", "UK"));
let s = new Serializer([Person, Address]); // pain point
jane = s.clone(john);

jane.name = "Jane";
jane.address.streetAddress = "321 Angel St";

console.log(john.toString());
console.log(jane.toString());
