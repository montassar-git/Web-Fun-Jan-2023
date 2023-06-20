// class Ninja {
//     constructor(name) {
//         this.name = name;
//         this.health = health;
//         this.speed = 3;
//         this.strength = 3;
//     }
//     sayName() {
//         console.log("My name is " + this.name);

//     }
//     showStats() {
//         console.log('the name is ${this.name}and ${this.health}with${this.speed}get${this.strength}');
//     }
// }
// const ninja1 = new Ninja("Hyabusa");
// ninja1.sayName();
// ninja1.showStats();
// ninja1.drinkSake();
class Ninja {
    constructor(name) {
      this.name = name;
      this.health = 100; // Setting a default value for health
      this.speed = 3;
      this.strength = 3;
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
  
  const ninja1 = new Ninja("Hyabusa");
  ninja1.sayName();
  ninja1.showStats();
  ninja1.drinkSake();
  