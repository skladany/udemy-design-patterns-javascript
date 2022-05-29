class Singleton {
  constructor() {
    // const instance = this.constructor.instance;
    const instance = Singleton._instance;

    console.log("Instance", instance);

    if (instance) {
      return instance;
    }

    Singleton._instance = this;
  }
}

let s1 = new Singleton();
let s2 = new Singleton();

console.log("Are they identical? " + (s1 === s2));
