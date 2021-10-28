

/* const prompt = require('prompt-sync')();

console.log("Geben Sie ein Wert für a");
const a = Number (prompt('a? '));
// muss den Wert von a im Terminal angeben

console.log("Geben Sie jetzt ein Wert für b");
const b = Number(prompt('b? '));
// Gib den Wert von b zurück in das Terminal

console.log("Die Summe von a + b:");
console.log(a + b); */



class Pet {
  constructor(name, typeOfPet) {
    this.name = name,
      this.typeOfPet = typeOfPet
    this.happyness = 5,
      this.hungry = 5,
      this.gesundheit = 5,
      this.durst = 5,
      this.arr = []
  }

  addHappyness(value) {
    const sum = this.happyness + value
    this.happyness = (sum > 10 ? 10 : sum)
  }

  reduceHappyness(value) {
    const diff = this.happyness - value
    this.happyness = (diff <= 0 ? 0 : diff)
  }

  addHunger(value) {
    const sum = this.hungry + value
    this.hungry = (sum > 10 ? 10 : sum)
  }

  reduceHunger(value) {
    const diff = this.hungry - value
    this.hungry = (diff <= 0 ? 0 : diff)
  }

  addDurst(value) {
    const sum = this.durst + value
    this.durst = (sum > 10 ? 10 : sum)

  }
  reduceDurst(value) {
    const diff = this.durst - value
    this.durst = (diff <= 0 ? 0 : diff)
  }
  addGesund(value) {
    const sum = this.gesundheit + value
    this.gesundheit = (sum > 10 ? 10 : sum)

  }
  reduceGesund(value) {
    const diff = this.gesundheit - value
    this.gesundheit = (diff <= 0 ? 0 : diff)

  }

  printStatus() {
    let mood;
    let hunger;
    let gesund;
    let durst;
    if (this.happyness <= 2) {
      mood = 'WÜTEND'
      this.reduceGesund(1)
      console.log(`ACHTUNG! Wenn ${this.name} wütend ist, verliert ${this.name} Gesundheit`)
    } else if (this.happyness <= 5) {
      mood = 'TRAURIG'

    } else if (this.happyness <= 8) {
      mood = 'FROH'
    } else if (this.happyness <= 10) {
      mood = 'UBER GLÜCKLICH'
    }
    if (this.hungry <= 5) {
      hunger = 'keinen Hunger'
    } else if (this.hungry >= 8) {
      this.reduceGesund(1)
      console.log(`ACHTUNG! Wenn ${this.name} hungrig ist, verliert ${this.name} Gesundheit`)
      hunger = 'Hunger'
    } else {
      hunger = 'Hunger'
    }
   
    if(this.gesundheit === 0) {
      gesund = 'ist gestorben --->GAME OVER<---'
    } else if (this.gesundheit <= 2) {
      gesund = 'ist nicht gesund'
      console.log(`${this.name} ist krank! Gib ihm Vitamin!`)
    } else if (this.gesundheit >= 3 && this.gesundheit < 5) {
      gesund = 'ist nicht gesund'
    } else {
      gesund = 'ist gesund'
    }
    if (this.durst <= 2) {
      durst = 'keinen Durst'
    } else if (this.durst >= 8) {
      this.reduceGesund(1)
      console.log(`ACHTUNG! Wenn ${this.name} durstig ist, verliert ${this.name} Gesundheit`)
      durst = 'Durst'
    } else {
      durst = 'Durst'
    }
    /* if(this.gesundheit === 0) {
      console.log('GAME OVER')
    } else { */
      console.log(`Status: ${this.name} ist ${mood}, hat ${hunger} und hat ${durst}, ${gesund}.`);
      console.log('----------------------------------------------------------------------------')
    
    
  }

  feed(food) {

    if ((this.typeOfPet.toLowerCase() == 'katze') && food === 'apfel') {
      this.reduceHunger(1); this.reduceHappyness(1);
    } else if ((this.typeOfPet.toLowerCase() == 'hunde') && food === 'apfel') {
      this.reduceHunger(1);
    } else if ((this.typeOfPet.toLowerCase() == 'kaninchen') && food === 'apfel') {
      this.reduceHunger(2); this.addHappyness(1)
    } else if ((this.typeOfPet.toLowerCase() == 'katze') && food === 'kartoffel') {
      this.reduceHunger(1); this.reduceHappyness(1)
    } else if ((this.typeOfPet.toLowerCase() == 'hunde') && food === 'kartoffel') {
      this.reduceHunger(1); this.reduceHappyness(1)
    } else if ((this.typeOfPet.toLowerCase() == 'kaninchen') && food === 'kartoffel') {
      this.reduceHunger(2); this.addHappyness(1)
    } else if ((this.typeOfPet.toLowerCase() == 'katze') && food === 'fisch') {
      this.reduceHunger(3); this.addHappyness(1)
    } else if ((this.typeOfPet.toLowerCase() == 'hunde') && food === 'fisch') {
      this.reduceHunger(2);
    } else if ((this.typeOfPet.toLowerCase() == 'kaninchen') && food === 'fisch') {
      this.reduceHunger(1); this.reduceGesund(1); this.reduceHappyness(1)
    } else if ((this.typeOfPet.toLowerCase() == 'katze') && food === 'fleisch') {
      this.reduceHunger(2);
    } else if ((this.typeOfPet.toLowerCase() == 'hunde') && food === 'fleisch') {
      this.reduceHunger(3); this.addHappyness(2)
    } else if ((this.typeOfPet.toLowerCase() == 'kaninchen') && food === 'fleisch') {
      this.reduceHunger(1); this.reduceGesund(1); this.reduceHappyness(1)
    } else if ((this.typeOfPet.toLowerCase() == 'katze') && food === 'karotte') {
      this.reduceHunger(1); this.reduceHappyness(1)
    } else if ((this.typeOfPet.toLowerCase() == 'hunde') && food === 'karotte') {
      this.reduceHunger(1); this.reduceHappyness(1);
    } else if ((this.typeOfPet.toLowerCase() == 'kaninchen') && food === 'karotte') {
      this.reduceHunger(3); this.addHappyness(1)
    }

    console.log(`${this.name} hat ${food} gegessen`);
    this.printStatus(this.name)
  }

  play() {
    if (this.hungry >= 9) {
      console.log(`${this.name} ist zu hungrig zu spielen`);
      // return;    
    }
    else if (this.durst >= 9) {
      console.log(`${this.name} ist zu durstig zu spielen`);
    } else {
      this.addHappyness(2)
      this.addHunger(3)
      this.addDurst(2)
      console.log(`${this.name} hat gespielt!`);
      this.printStatus(this.name)
    }
  }
  sleep() {
    this.reduceHappyness(5)
    this.addHunger(2)
    console.log(`${this.name} hat geschlafen!`);
    this.printStatus(this.name)
  }

  pflege() {
    this.addHappyness(2)
    this.addGesund(1)
    console.log(`${this.name} wurde gepflegt!`);
    this.printStatus(this.name)
  }
  addVitamin() {
    this.addGesund(2);
    this.addDurst(1)
    this.addHappyness(2)
    console.log(`${this.name} hat Vitamin genommen!`)
    this.printStatus(this.name)
  }

  trinken(getranke) {
    if (getranke === 'wasser') {
      this.reduceDurst(2);
      console.log(`${this.name} hat ${getranke} getrunken!`)
      this.printStatus(this.name)
    }
  }
  mission1() {
    /* let status = 'blabla'
    let ziel = 'blabla'
    if(status === ziel) */
    if (this.happyness > 7 & this.gesundheit > 6) {
      console.log('Mission 1 geschafft');
    } else {
      console.log('Mission 1 nicht geschafft')
    }
    console.log('Bist du bereit für nächste Mission?');
  }


}

const hund = new Pet('Mami', 'hunde')
const katze = new Pet('Mia', 'katze')



console.log('\\   /\\\\')
console.log(' ) (  *)')
console.log('(  /  )');
console.log(' \\(__)|');

console.log(' ()()')
console.log(' (**)')
console.log('o( O )');

console.log('   / \\__')
console.log('  (    @\\___')
console.log('  /         O');
console.log(' /    (____/')
console.log('/______/  U')


