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
        this.happyness=(sum>10?10:sum) // ternary 

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
        if (this.happyness<=2){
            mood='wütend'
        } else if(this.happyness<=5){
            mood='traurig'
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
        

        console.log(`${this.name} ist ${mood} und hat ${hunger}`);
    }

    feed(food){
        if((this.typeOfPet.toLowerCase()=='katze') && food==='apfel'){
            food.energy=1
        }
        this.reduceHunger(food.energy)
        if (food.sweet==false){
            this.reduceHappyness(1);
        }

        console.log(`${this.name} hat ${food.name} gegessen`);
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
    
}

const cat =new Pet('mami')

console.log(cat);

cat.addHappyness(3)
console.log(cat);
cat.addHappyness(3)
console.log(cat);
cat.printStatus()

class Food{
    constructor(name, energy){
        this.name=name
        this.energy=energy  
    }

}

const apple= new Food('apple', 1)
const bread= new Food('bread', 3)
const fisch= new Food('fisch', 3)
const carotte= new Food('carotte', 2)
const fleisch= new Food('fleisch', 3)
