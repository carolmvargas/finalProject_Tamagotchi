
class Pet {
    constructor(name, typeOfPet){
        this.name=name,
        this.typeOfPet=typeOfPet
        this.happyness=5,
        this.hungry=5,
        this.gesundheit=5,
        this.durst=5,
        this.arr=[]
        
    }

    addHappyness(value){
        const sum=this.happyness+value
        this.happyness=(sum>10?10:sum) 

    }

    reduceHappyness(value){
        const diff=this.happyness-value
        this.happyness=(diff<=0?0:diff) 
    }

    addHunger(value){
        const sum=this.hungry+value
        this.hungry=(sum>10?10:sum)
    }

    reduceHunger(value){
        const diff=this.hungry-value
        this.hungry=(diff<=0?0:diff) 
    }
   
    addDurst(value){
        const sum=this.durst+value
        this.durst=(sum>10?10:sum) 

    }
    reduceDurst(value){
        const diff=this.durst-value
        this.durst=(diff<=0?0:diff) 
    }
    addGesund(value){
        const sum=this.gesundheit+value
        this.gesundheit=(sum>10?10:sum) 

    }
    reduceGesund(value){
        const diff=this.gesundheit-value
        this.gesundheit=(diff<=0?0:diff) 
    }

    printStatus(){
        let mood;
        let hunger;
        let gesund;
        let durst;
        if (this.happyness<=2){
            mood='wütend'
            this.reduceGesund(2)
        } else if(this.happyness<=5){
            mood='traurig'
            this.reduceGesund(1)
        }else if(this.happyness<=8){
            mood='froh'
        }else if(this.happyness<=10){
            mood='uber glücklich'
        }
        if(this.hungry<=5){
            hunger='keinen Hunger'
        } else{
            hunger='Hunger'
        }
        if(this.gesundheit>3){
            gesund = 'ist gesund'
        }else {
            gesund = 'ist nicht gesund'
        }
        if(this.durst<=3){
          durst = 'keinen Durst'
        }else if (this.durst>=8) {
          this.reduceGesund(1)
        } else {
          durst = 'Durst'
        }
      

        console.log(`${this.name} ist ${mood}, hat ${hunger} und hat ${durst}, ${gesund}`);
    }

    feed(food){
        let energy
        if((this.typeOfPet.toLowerCase()=='katze') && food==='apfel'){
            energy=1
        }else if ((this.typeOfPet.toLowerCase()=='hunde') && food==='apfel'){
            energy=1
        }else if ((this.typeOfPet.toLowerCase()=='kaninchen') && food==='apfel'){
            energy=3
        }else if((this.typeOfPet.toLowerCase()=='katze') && food==='kartoffel'){
            energy=1
        }else if ((this.typeOfPet.toLowerCase()=='hunde') && food==='kartoffel'){
            energy=3
        }else if ((this.typeOfPet.toLowerCase()=='kaninchen') && food==='kartoffel'){
            energy=2
        }
        this.reduceHunger(energy)
        if (food.sweet==false){
            this.reduceHappyness(1);
        }

        console.log(`${this.name} hat ${food} gegessen`);
    }

    play(){
        if(this.hungry>=8){
            console.log(`${this.name} ist zu hungrig zum spielen`);
            return;    
        }
        this.addHappyness(2)
        this.addHunger(3)
        console.log(`${this.name} hat gespielt!`);
    }
    sleep(){
        this.reduceHappyness(5)
        this.addHunger(2)
        console.log(`${this.name} hat geschlafen!`);
    }
    pflege(){
        this.addHappyness(2)
        this.addGesund(1)

        console.log(`${this.name} wurde gepflegt!`);
    }
    addVitamin(){
      this.addGesund(1);
      console.log(`${this.name} hat Vitamin genommen!`)
      this.printStatus(this.name);
    }

    mission1() {
      let status = 'blabla'
      let ziel = 'blabla'
      if(status === ziel) {
        console.log('Mission 1 geschafft');
      } else {
        console.log('nicht geschafft')
      }
    }
  
    
}

const hund =new Pet('mami', 'hunde')

console.log(hund);
hund.feed('apfel');
console.log(hund);

//carol
hund.addVitamin();
hund.mission1();


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
const fleisch= new Food('fleisch', 3)*/
