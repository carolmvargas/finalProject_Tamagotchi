class Pet {
  constructor(name) {
    this.name = name;
    this.happyness = 5;
    this.hungry = 5;
  }
  addHappyness(value) {
    this.happyness = this.happyness + value;
    if (this.happyness > 10) {
      this.happyness = 10;
    }
  }
  reduceHappyness(value) {
    this.happyness = this.happyness - value;
    if (this.happyness < 0) {
      this.happyness = 0;
    }
  }
  addHunger(value) {
    this.hungry = this.hungry + value;
    if (this.hungry > 10) {
      this.hungry = 10;
    }
  }
  reduceHunger(value) {
    this.hungry = this.hungry - value;
    if (this.hungry < 0) {
      this.hungry = 0;
    }
  }
  
  feed(food) {
    const feed = this.hungry;
    this.reduceHunger(food.energy);
    //Hunger reduzieren um den Wert von Energy (hunger = hunger - energy)
    if (food.sweet === false) { // wenn food nicht süß, dann..
      this.reduceHappyness(1);
    }
    console.log(`${this.name} hat ${food.name} gegessen!`);
  }
  play() {
    if (this.hungry > 8) {
      console.log(`${this.name} ist zu hungrig zum spielen`);
      // return;
    } else {
      this.addHappyness(2);
      this.addHunger(3)
    }
  }
  sleep() {
    this.reduceHappyness(5);
    this.addHunger(2);
    console.log(`${this.name} hat geschlafen!`);
  }
  printStatus() {
    let mood;
    if (0 <= this.happyness && this.happyness <= 2) {
      mood = 'wütend';
    } else if (3 <= this.happyness && this.happyness <= 5) {
      mood = 'traurig';
    } else if (6 <= this.happyness && this.happyness <= 8) {
      mood = 'froh';
    } else {
      mood = 'überglücklich'
    }
    let hunger;
    if (this.hungry > 5) {
      hunger = 'hunger';
    } else {
      hunger = 'keinen Hunger';
    }
    console.log(`${this.name} ist ${mood} und hat ${hunger}.`);
  }
}

class Food {
  constructor(name, energy, sweet) {
    this.name = name;
    this.energy = energy;
    this.sweet = sweet;
  }
}

const apple = new Food('apple', 1, true); // Erstellung von Food Objekte
const bread = new Food('bread', 3, false);
const toy = new Pet('toy');

toy.play()
console.log(toy);