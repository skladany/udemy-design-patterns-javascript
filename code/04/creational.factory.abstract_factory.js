const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
// const async = require("async");

class HotDrink {
  consume() {}
}

class Tea extends HotDrink {
  consume() {
    console.log("This tea is nice with lemon!");
  }
}

class Coffee extends HotDrink {
  consume() {
    console.log("This coffee is delicious!");
  }
}

class HotDrinkFactory {
  prepare(amount) {
    /* abstract */
  }
}

class CoffeeFactory extends HotDrinkFactory {
  prepare(amount) {
    console.log(`Grind some beans, boil water, pour ${amount}ml`);
    return new Coffee();
  }
}

class TeaFactory extends HotDrinkFactory {
  prepare(amount) {
    console.log(`Put in tea bag, boil water, pour ${amount}ml`);
    return new Tea();
  }
}

const AvailableDrink = Object.freeze({
  coffee: CoffeeFactory,
  tea: TeaFactory,
});

class HotDrinkMachine {
  constructor() {
    this.factories = {};
    for (let drink in AvailableDrink) {
      this.factories[drink] = new AvailableDrink[drink]();
    }

    console.log(this.factories);
  }

  interact(consumer) {
    rl.question(
      "Please specify drink amd amount " + "(e.g., tea 50): ",
      (answer) => {
        const parts = answer.split(" ");
        let [name, amount] = parts;
        amount = parseInt(amount);
        let d = this.factories[name].prepare(amount);
        rl.close();
        consumer(d);
      }
    );
  }
}

let machine = new HotDrinkMachine();

machine.interact((drink) => drink.consume());
