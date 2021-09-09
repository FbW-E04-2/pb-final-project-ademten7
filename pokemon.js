const prompt = require('prompt-sync')();
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
        magic : ${Number(this.magic)} `);
    }

    attack(indexOfSkills, obj) {
        let input;
        if (this.health <= 0) {
            console.log(`${this.name} is already dead!`);
            return;
        }
        if (this.magic >= this.skills[indexOfSkills].requiredMagic) {
            console.log(`${this.name} launched  ${this.skills[indexOfSkills].nameOfAttack}  attack successfully to ${obj.name}!`);
            this.magic -= this.skills[indexOfSkills].requiredMagic;
            obj.health -= this.skills[indexOfSkills].amountOfDamage;
            this.showStatus();
            obj.showStatus();
        } else {
            console.log(`${this.name} has not enough magic, cannot launch attack to ${obj.name}`);
            input = prompt(`Do you want to load more magic for "${this.name}". Please enter yes or no:    `)
            if (input === "yes") {
                this.getMagic();
                this.showStatus();
            } else {
                console.log(`You can not use ${this.name}  any more!!!! Choose another pokemon to launch an attack. `);
            }


        }


        if (obj.health <= 0) {
            console.log(`${obj.name} is killed`);
            obj.showStatus();
        }
    }

    getMagic() {

        this.magic += 30;
        console.log(`${this.name} got 30 magic back`)
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
charmeleon.learnAttackSkills(flame);
charmeleon.learnAttackSkills(eggBomb);
charmeleon.learnAttackSkills(freezeShock);
charmeleon.learnAttackSkills(poisonGas);
console.log(charmeleon.skills);


//Wartortle skills:
wartortle.learnAttackSkills(flame);
wartortle.learnAttackSkills(eggBomb);
wartortle.learnAttackSkills(freezeShock);
wartortle.learnAttackSkills(poisonGas);

//Venasuar skills:
venasuar.learnAttackSkills(flame);
venasuar.learnAttackSkills(eggBomb);
venasuar.learnAttackSkills(freezeShock);
venasuar.learnAttackSkills(poisonGas);

//Charizard skills:
charizard.learnAttackSkills(flame);
charizard.learnAttackSkills(eggBomb);
charizard.learnAttackSkills(freezeShock);
charizard.learnAttackSkills(poisonGas);


wartortle.learnAttackSkills(eggBomb);
venasuar.learnAttackSkills(freezeShock);
charizard.learnAttackSkills(poisonGas);


charmeleon.attack(0, wartortle);
wartortle.attack(0, charmeleon);
wartortle.attack(0, charmeleon);
wartortle.attack(0, charmeleon);

wartortle.attack(0, charmeleon);

wartortle.attack(0, charmeleon);
//wartortle.getMagic();
wartortle.attack(0, charmeleon);
wartortle.attack(0, charmeleon);



charmeleon.attack(0, wartortle);
charizard.attack(0, wartortle);