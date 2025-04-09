// TODO: Define SuperHuman, SuperHero, and SuperVillain classes here
class SuperHuman {
    constructor(name, powerLevel) {
       this.name = name;
       this.powerLevel = powerLevel;
    }
 }
 
 class SuperVillain extends SuperHuman {
    constructor(name, alias, powerLevel) {
       super(name, powerLevel);
       this.alias = alias;
    }
 
    getEvilChuckle() {
       return "Ha ha ha!"
    }
 }
 
 class SuperHero extends SuperHuman {
    constructor(name, alias, powerLevel) {
       super(name, powerLevel);
       this.alias = alias;
    }
 
    battle(villain) {
       if (this.powerLevel >= villain.powerLevel) {
          return true
       } else {
          return false
       }
    }
 }