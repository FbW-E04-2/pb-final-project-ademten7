var colors = require('colors');
const prompt = require('prompt-sync')();
//const chalkAnimation = require('chalk-animation');
class Pokemon {
    constructor(name, health, magic) {
        this.name = name;
        this.health = health;
        this.magic = magic;
        this.skills = [];
    }

    learnAttackSkills(obj) {
        this.skills.push(obj);
        // this.magic -= obj.requiredMagic;

    }

    showStatus() {
        if (this.health < 0) {
            this.health = 0;
        }
        console.log(`${this.name} status:
       ----------------
        health: ${Number(this.health)}
        magic : ${Number(this.magic)} 
        ---------------`.bgRed);
    }

    attack(indexOfSkills, obj) {
        let input;
        if (this.health <= 0) {
            console.log(`${this.name} is already dead!`.america);
            return;
        }
        if (this.magic >= this.skills[indexOfSkills].requiredMagic) {
            console.log(`${this.name} launched  ${this.skills[indexOfSkills].nameOfAttack}  attack successfully to ${obj.name}!`.bgGreen);
            this.magic -= this.skills[indexOfSkills].requiredMagic;
            obj.health -= this.skills[indexOfSkills].amountOfDamage;
            this.showStatus();
            obj.showStatus();
        } else {
            console.log(`${this.name} has not enough magic, cannot launch attack to ${obj.name}`.green);
            input = prompt(`Do you want to load more magic for "${this.name}". Please enter yes or no:    `)
            if (input === "yes") {
                this.getMagic();
                this.showStatus();
            } else {
                console.log(`You can not use ${this.name}  any more!!!! Choose another pokemon to launch an attack. `.bgRed);
                return;
            }


        }

        if (obj.health <= 0) {
            console.log(`${obj.name} is killed`.rainbow);
            obj.showStatus();
        }
    }

    getMagic() {


        this.magic += 30;
        console.log(`${this.name} got 30 magic back`.bgGreen)
        this.showStatus();
    }

}



let charmeleon = new Pokemon("Charmeleon", 120, 100);
let wartortle = new Pokemon("Wartortle", 100, 80);
let venasuar = new Pokemon("Venasuar", 80, 90);
let charizard = new Pokemon("Charizard", 100, 80);




class AttackSkills {
    constructor(nameOfAttack, amountOfDamage, requiredMagic) {
        this.nameOfAttack = nameOfAttack;
        this.amountOfDamage = amountOfDamage;
        this.requiredMagic = requiredMagic;
    }
}

let flame = new AttackSkills("Flame", 25, 15);
let eggBomb = new AttackSkills("Egg Bomb", 30, 20);
let freezeShock = new AttackSkills("Freeze Shock", 20, 10);
let poisonGas = new AttackSkills("Poison Gas", 30, 25);

//Charmeleon skills:
charmeleon.learnAttackSkills(eggBomb);
charmeleon.learnAttackSkills(poisonGas);
//console.log(charmeleon.skills);


//Wartortle skills:
wartortle.learnAttackSkills(flame);
wartortle.learnAttackSkills(freezeShock);


//Venasuar skills:
venasuar.learnAttackSkills(flame);
venasuar.learnAttackSkills(poisonGas);

//Charizard skills:

charizard.learnAttackSkills(eggBomb);
charizard.learnAttackSkills(freezeShock);

let pokemon = charmeleon;
let indexOfSkill;
let enemy = wartortle;
let forward;
do {

    indexOfSkill = parseInt(prompt("Choose skill of your pokemon:".bgGreen));
    // enemy = prompt("Which pokemon do you want to attack?:    ".bgRed);

    pokemon.attack(indexOfSkill, enemy);

    forward = prompt(`Do you want to continue to attack. Enter "yes" for continue:`.bgRed);

}
while (forward === "yes")