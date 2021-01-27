class Ninja{
    constructor(name){
        this.name=name;
        this.health=300;
        this.speed=3;
        this.strength=3;
    }
    sayName(){
        console.log(this.name);
        return this;
    }

    showStats(){
        console.log("Name:"+this.name);
        console.log("Strength:"+this.strength);
        console.log("Speed:"+this.speed);
        console.log("Health:"+this.health);
    }


    drinkSake(){
        this.health+=10;
        return this;
    }
}

const aseel =new Ninja("aseel");
aseel.sayName();
aseel.showStats();
aseel.drinkSake();

console.log("///////////////////////////////////////////////////////////")

class Sensei extends Ninja{
    constructor(name){
    super(name);
        this.health=200;
        this.speed=10;
        this.strength=10;
        this.wisdom=10;
    }
    speakWisdom(){
        super.drinkSake();
        console.log("What one programmer can do in one month, two programmers can do in two months.")
    }
}
const superSensei = new Sensei("Master Splinter");
superSensei.speakWisdom();
// -> "What one programmer can do in one month, two programmers can do in two months."
superSensei.showStats();