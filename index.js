const prompt = require("prompt-sync")();

/*console.log("Geben Sie ein Wert für a");
const a = Number (prompt('a? '));
// muss den Wert von a im Terminal angeben

console.log("Geben Sie jetzt ein Wert für b");
const b = Number(prompt('b? '));
// Gib den Wert von b zurück in das Terminal

console.log("Die Summe von a + b:");
console.log(a + b); */
const vorrat= {'apfel':5, 'kartoffel':5, 'fleisch':5, 'fisch':5, 'karotte':5};
class Pet {
  constructor(name, typeOfPet) {
    (this.name = name), (this.typeOfPet = typeOfPet);
    (this.happyness = 5),
      (this.hungry = 5),
      (this.gesundheit = 5),
      (this.durst = 5),
      (this.arr = []);
  }

  addHappyness(value) {
    const sum = this.happyness + value;
    this.happyness = sum > 10 ? 10 : sum;
  }

  reduceHappyness(value) {
    const diff = this.happyness - value;
    this.happyness = diff <= 0 ? 0 : diff;
  }

  addHunger(value) {
    const sum = this.hungry + value;
    this.hungry = sum > 10 ? 10 : sum;
  }

  reduceHunger(value) {
    const diff = this.hungry - value;
    this.hungry = diff <= 0 ? 0 : diff;
  }

  addDurst(value) {
    const sum = this.durst + value;
    this.durst = sum > 10 ? 10 : sum;
  }
  reduceDurst(value) {
    const diff = this.durst - value;
    this.durst = diff <= 0 ? 0 : diff;
  }
  addGesund(value) {
    const sum = this.gesundheit + value;
    this.gesundheit = sum > 10 ? 10 : sum;
  }
  reduceGesund(value) {
    const diff = this.gesundheit - value;
    this.gesundheit = diff <= 0 ? 0 : diff;
  }

  printStatus() {
    let mood;
    let hunger;
    let gesund;
    let durst;
    if (this.happyness <= 2) {
      mood = "wütend";
      this.reduceGesund(2);
    } else if (this.happyness <= 5) {
      mood = "traurig";
      this.reduceGesund(1);
    } else if (this.happyness <= 8) {
      mood = "froh";
    } else if (this.happyness <= 10) {
      mood = "uber glücklich";
    }
    if (this.hungry <= 5) {
      hunger = "keinen Hunger";
    } else {
      hunger = "Hunger";
    }
    if (this.gesundheit > 3) {
      gesund = "ist gesund";
    } else {
      gesund = "ist nicht gesund";
    }
    if (this.durst <= 3) {
      durst = "keinen Durst";
    } else if (this.durst >= 8) {
      this.reduceGesund(1);
    } else {
      durst = "Durst";
    }

    console.log(
      `${this.name} ist ${mood}, hat ${hunger} und hat ${durst}, ${gesund}`
    );
  }

  feed(food) {
    if (this.typeOfPet.toLowerCase() == "katze" && food === "apfel") {
       if(vorrat[food]>0) {
        vorrat[food]--;
        console.log(vorrat);
        this.reduceHunger(1);
        this.reduceHappyness(1);
       }else{
           console.log(`Im Vorrat hat kein(en) ${food}`);
           
       }
    } else if (this.typeOfPet.toLowerCase() == "hunde" && food === "apfel") {
        if(vorrat[food]>0) {
            vorrat[food]--;
            console.log(vorrat[food]);}
      this.reduceHunger(1);
    } else if (
      this.typeOfPet.toLowerCase() == "kaninchen" &&
      food === "apfel"
    ) {
        if(vorrat[food]>0) {
            vorrat[food]--;
            console.log(vorrat[food]);}
      this.reduceHunger(2);
      this.addHappyness(1);
    } else if (
      this.typeOfPet.toLowerCase() == "katze" &&
      food === "kartoffel"
    ) {
        if(vorrat[food]>0) {
            vorrat[food]--;
            console.log(vorrat[food]);}
      this.reduceHunger(1);
      this.reduceHappyness(1);
    } else if (
      this.typeOfPet.toLowerCase() == "hunde" &&
      food === "kartoffel"
    ) { if(vorrat[food]>0) {
        vorrat[food]--;
        console.log(vorrat[food]);}
      this.reduceHunger(1);
      this.reduceHappyness(1);
    } else if (
      this.typeOfPet.toLowerCase() == "kaninchen" &&
      food === "kartoffel"
    ) { 
        if(vorrat[food]>0) {
            vorrat[food]--;
            console.log(vorrat[food]);}
      this.reduceHunger(2);
      this.addHappyness(1);
    } else if (this.typeOfPet.toLowerCase() == "katze" && food === "fisch") {
        if(vorrat[food]>0) {
            vorrat[food]--;
            console.log(vorrat[food]);}
      this.reduceHunger(3);
      this.addHappyness(1);
    } else if (this.typeOfPet.toLowerCase() == "hunde" && food === "fisch") {
      this.reduceHunger(2);
    } else if (
      this.typeOfPet.toLowerCase() == "kaninchen" &&
      food === "fisch"
    ) {
      this.reduceHunger(1);
      this.reduceGesund(1);
      this.reduceHappyness(1);
    } else if (this.typeOfPet.toLowerCase() == "katze" && food === "fleisch") {
      this.reduceHunger(2);
    } else if (this.typeOfPet.toLowerCase() == "hunde" && food === "fleisch") {
      this.reduceHunger(3);
      this.addHappyness(1);
    } else if (
      this.typeOfPet.toLowerCase() == "kaninchen" &&
      food === "fleisch"
    ) {
      this.reduceHunger(1);
      this.reduceGesund(1);
      this.reduceHappyness(1);
    } else if (this.typeOfPet.toLowerCase() == "katze" && food === "karotte") {
      this.reduceHunger(1);
      this.reduceHappyness(1);
    } else if (this.typeOfPet.toLowerCase() == "hunde" && food === "karotte") {
      this.reduceHunger(1);
      this.reduceHappyness(1);
    } else if (
      this.typeOfPet.toLowerCase() == "kaninchen" &&
      food === "karotte"
    ) {
      this.reduceHunger(3);
      this.addHappyness(1);
    }

    console.log(`${this.name} hat ${food} gegessen`);
  }

  play() {
    if (this.hungry >= 9) {
      console.log(`${this.name} ist zu hungrig zu spielen`);
      // return;
    } else if (this.durst >= 9) {
      console.log(`${this.name} ist zu durstig zu spielen`);
    } else {
      this.addHappyness(2);
      this.addHunger(3);
      this.addDurst(2);
      console.log(`${this.name} hat gespielt!`);
    }
  }
  sleep() {
    this.reduceHappyness(5);
    this.addHunger(2);
    console.log(`${this.name} hat geschlafen!`);
  }

  pflege() {
    this.addHappyness(2);
    this.addGesund(1);

    console.log(`${this.name} wurde gepflegt!`);
  }
  addVitamin() {
    this.addGesund(1);
    console.log(`${this.name} hat Vitamin genommen!`);
    this.printStatus(this.name);
  }

  mission1() {
    let status = "blabla";
    let ziel = "blabla";
    if (status === ziel) {
      console.log("Mission 1 geschafft");
    } else {
      console.log("nicht geschafft");
    }
  }
}

/* const pet= new Pet('as', 'katze')
console.log(pet);
pet.feed('apfel');
pet.feed('apfel');
pet.feed('apfel');
pet.feed('apfel');
pet.feed('apfel');
pet.feed('apfel'); */

let typeOfTier;
let name;
let type;





while (true ) {
    console.log('welche tiere möchtest du haben? \n \n A)eine Katze. B)ein Hund oder C)ein Kaninchen.\n \n Gib eine Buchstabe A, B oder C? \n' );
    typeOfTier = prompt(``); 

  if (typeOfTier.toLowerCase() === "a") {
    type = "katze"; 
    
    break;
  } else if (typeOfTier.toLowerCase() === "b") {
    type = "hund";
    
    break;
  } else if (typeOfTier.toLowerCase() === "c") {
    type = "kaninchen";
   
    break;
  } else {
    console.log(`\n Du hast falche gegeben :( 
        Gib nur A, B oder C) \n`);
  }
}
name = prompt(`Wie heißt deine Tier?`);
console.log(` 
            \\o/
             I
            / \\  yuhuuuu du hast jetzt ein ${type} 
            `);
const tier = new Pet(name, type);
console.log(tier);
let exit='n';
while(exit=='n' && !tier.gesundheit<=0){
    console.log(`\n Was möchtest Du mit ${tier.name} machen? \n A) spielen B) füttern C) schlafen \n D) trinken E) vitamin F) pflegen \n `);
   let ergebniss= prompt();
   console.log(ergebniss);
   if(ergebniss.toLowerCase()==='a'){
    
    tier.play()
    tier.printStatus()
   }else if (ergebniss.toLowerCase()==='b'){
       console.log(`Womit möchtest du ${tier.name} füttern? \n A) fleisch B) fisch C) karotte \n D) kartoffel E) apfel`);
       let essen= prompt();
       if(essen.toLowerCase()==='a'){  
        tier.feed('fleisch')
        tier.printStatus()
        console.log(tier.gesundheit);
       }else if(essen.toLowerCase()==='b'){
        tier.feed('fisch')
        tier.printStatus()
       }else if(essen.toLowerCase()==='c'){
        tier.feed('karotte')
        tier.printStatus()
       }else if(essen.toLowerCase()==='d'){
        tier.feed('kartoffel')
        tier.printStatus()
       }else if(essen.toLowerCase()==='e'){
        tier.feed('apfel')
        tier.printStatus()
       }else{
           console.log(`Du hast falsche buchstabe gegeben`);
       }
   }else if(ergebniss.toLowerCase()==='c'){
    
    tier.sleep()
    tier.printStatus()
   }else if(ergebniss.toLowerCase()==='d'){
    
    console.log(`trink method soll hinfügen`);
    tier.printStatus()
   }else if(ergebniss.toLowerCase()==='e'){
    
    tier.addVitamin()
    tier.printStatus()
   }else if(ergebniss.toLowerCase()==='f'){
    
    tier.pflege()
    tier.printStatus()
   }
   else{
       console.log(`Du hast falsche buchstabe gegeben`);
   }
}
console.log(`GAME OVER ${tier.name} ist leider gestorben`);


/* cat.addHappyness(3)
console.log(cat);
cat.feed('apfel');
console.log(cat);
cat.addHappyness(3)
console.log(cat);
cat.printStatus() */

/* class Food{
    constructor(name){
        this.name=name
        
    }

}
const apfel= new Food('apfel', 1)
const kartoffel= new Food('kartoffel', 3)
const fisch= new Food('fisch', 3)
const carotte= new Food('carotte', 2)
const fleisch= new Food('fleisch', 3)
 */
