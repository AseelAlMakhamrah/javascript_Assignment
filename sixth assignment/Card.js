class Card{
    constructor(name, cost){
        this.name=name;
        this.cost=cost;
    }
}
class Unit extends Card{
    constructor(name , cost , power, resiliencce){
        super(name , cost)
        this.power=power;
        this.resiliencce =resiliencce;
    }
    
    attack (target){
        target.resiliencce-=this.power;

    }
    showresult() {
        console.log("resiliencce: " + this.resiliencce, "power: " + this.power);
    }
}
class Effect extends Card{
    constructor(name , cost , text, stat, magnitude){
        super(name , cost)
        this.text=text;
        this.stat =stat;
        this.magnitude=magnitude;
    }
    play(target){
        if(target instanceof Unit){
            if (this.stat == "resiliencce"){
                target.resiliencce+= this.magnitude;
            }else if(this.stat == "power"){
                target.power += this.magnitude;
    
            }
        }
        
    }
}

const Red_Belt_Ninja = new Unit("Red_Belt_Ninja", 3, 3, 4);
const black_Belt_Ninja = new Unit("black_Belt_Ninja", 4, 5, 4);

const Unhandled_Promise_Rejection = new Effect("Unhandled Promise Rejection",1,"increase target's resilience by 3","resilience",-2);    
const Hard_Algorithim = new Effect("Hard_Algorithim",2,"increase target's resilience by 3","resilience",3);
const Pair_Programming = new Effect("Pair_Programming",3,"increase target's power by 2","power",2);
