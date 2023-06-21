class Ninja {
    constructor(name,health=100,speed=3,strength=3) {
        this.name = name;
        this.health = health; // Setting a default value for health
        this.speed = speed;
        this.strength =strength;
    }

    sayName() {
        console.log("My name is " + this.name);
    }

    showStats() {
        console.log(
            `Name: ${this.name}, Health: ${this.health}, Speed: ${this.speed}, Strength: ${this.strength}`
        );
    }

    drinkSake() {
        this.health += 10;
        console.log(`Drank sake! Health increased to ${this.health}`);
    }
}

class Sensei extends Ninja {
    constructor(name,health=200,speed=10,strength=10) {
        super(name,health,speed,strength)
        // this.name = name;
        this.wisdom = 10;

    }
    speakWisdom(){
        super.drinkSake();
    }
}

const superSensei = new Sensei("Master Splinter");
superSensei.speakWisdom();
superSensei.showStats();