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