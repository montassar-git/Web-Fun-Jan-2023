class Card {
    constructor(name, cost) {
        this.name = name;
        this.cost = cost;

    }
}
class Unit extends Card {
    constructor(name, cost, power, res) {
        super(name, cost);
        this.power = power;
        this.res = res;

    }
    attack(target) {
        target.res -= this.power;

    }
}

class Effect extends Card {
    constructor(name, cost,text,stat,magnitude) {
        super(name,cost);
        this.text=text;
        this.stat=stat;
        this.magnitude=magnitude;

    }
    play(target) {
        if (target instanceof Unit) {
            // implement card text her
                if(this.stat=="resilience"){
                    target.res += this.magnitude
                    console.log(this.text);
                }
                else{
                    target.power+=this.magnitude
                }


        } else {
            throw new Error("Target must be a unit!");
        }
    }


}

const cart1 = new Unit ("redbeltninja",3,3,4);
const cart2 = new Unit ("black belt ninja",4,5,4);
// console.log(cart2);
// cart1.attack(cart2);
// console.log(cart2);
const carteffct1 = new Effect ("hard algorithm",2,"increate target's resilienceby 3","resilience",+3);
const carteffct2= new Effect ("unhandled promise rejection ",1,"reduce target's resilience by 2","resilience",-2);
const carteffct3= new Effect (" Pair Prgramming ",3,"increase target's power by 2","power",+2);
console.log(cart1);
carteffct1.play(cart1);
console.log(cart1);