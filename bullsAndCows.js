var colors = require('colors');
const prompt = require('prompt-sync')();
class BullsAndCows {
    computer;
    input;
    name;



    playerName() {
        this.name = prompt("Please enter your name:   ".bgGreen);
    }

    numberOfComputer() {
        let computerArr;
        do {
            this.computer = String(Math.floor(Math.random() * 9000 + 1000)).split("");

            //1.way to create four different digits
            computerArr = this.computer.filter((el, index) => el !== this.computer[index + 1] && el !== this.computer[index + 2] && el !== this.computer[index + 3]);


            //2. way to create four different digits
            //bool = (computer[0] === computer[1] || computer[0] === computer[2] || computer[0] === computer[3]) ||
            // (computer[1] === computer[2] || computer[1] === computer[3]) || (computer[2] === computer[3])

        } while (computerArr.length !== 4);
        // this.computer = Number(this.computer.join(""));
        // console.log();
        console.log(this.computer);
    }

    numberOfUser() {
        let level;
        let attempt = 1;
        let inputArr;
        let scoreComputer = 0;
        let scorePlayer = 0;
        let anotherRound;


        do {
            level = parseInt(prompt(`WHICH LEVEL DO YOU WANT TO PLAY? PRESS "0" FOR EASY, PRESS "1" FOR DIFFICULT :     `.bgRed));
            attempt = 1
                //difficult level
            this.numberOfComputer();
            if (level === 1) {

                console.log(`*******************************   LET'S START ${this.name}  ********************************`.bgRed + "\n");

                do {
                    console.log(`ATTEMPT : ${attempt}`.green)
                    this.input = parseInt(prompt("PLEASE ENTER A NUMBER WHICH HAS FOUR DIFFERENT DIGITS ===>     "));
                    //to exit from the game 
                    if (this.input === 0) {
                        throw new Error("************************************     GAME OVER    ***********************************************".america);
                    }
                    console.log();
                    if (this.input / 1000 < 1 || this.input / 1000 >= 10) {
                        //throw new Error("!!!!!! You have to enter the   4 digit numbers  !!!!!!".red + "\n")
                        console.log("You have to enter the number between 1000 and 9999")
                    }
                    this.input = String(this.input).split("");
                    inputArr = this.input.filter((el, index) => el !== this.input[index + 1] && el !== this.input[index + 2] && el !== this.input[index + 3]);
                    if (inputArr.length !== 4) {
                        // throw new Error("You have to enter 4 different integer number".bgRed);
                        console.log("You have to enter 4 different integer number".bgRed)
                    }

                    if (attempt == 7) {
                        console.log(`Last three attempt`.red);
                    } else if (attempt == 8) {
                        console.log(`Last two attempt`.red);
                    } else if (attempt === 9) {
                        console.log("This is the last chance. You have to find secret number. Otherwise, you will lost ".red)
                    }

                    if (attempt === 10 && (this.computer.join("") !== this.input.join(""))) {
                        // throw new Error("!!!!!! You already tried 10 times. YOU LOST, COMPUTER WON!".bgRed)
                        break;
                    }

                    attempt++;


                    this.bullsAndCows();

                } while (this.computer.join("") !== this.input.join(""));

                //easy level
            } else if (level === 0) {
                console.log(`*******************************   LET'S START ${this.name}  ********************************`.bgRed + "\n");

                do {
                    console.log(`ATTEMPT : ${attempt}`.green)
                    this.input = parseInt(prompt("PLEASE ENTER A NUMBER WHICH HAS FOUR DIFFERENT DIGITS. ===>     "));
                    //to exit from the game 
                    if (this.input === 0) {
                        throw new Error("************************************     GAME OVER    ***********************************************".america);
                    }
                    console.log();

                    this.input = String(this.input).split("");
                    inputArr = this.input.filter((el, index) => el !== this.input[index + 1] && el !== this.input[index + 2] && el !== this.input[index + 3]);
                    if (inputArr.length !== 4 || this.input.length !== 4) {
                        console.log("Please enter 4 different digit number!!!".red)
                    }

                    if (attempt === 30 && (this.computer.join("") !== this.input.join(""))) {
                        //throw new Error("!!!!!! You already tried 30 times. YOU LOST, COMPUTER WON!".bgRed)
                        break;
                    }
                    attempt++;

                    this.bullsAndCows();

                } while (this.computer.join("") !== this.input.join(""));
            }
            if (this.computer.join("") === this.input.join("")) {
                scorePlayer++;
                console.log(`------------------------------------------------------------------------------------------------------`.rainbow + "\n")
                console.log(`***************************   CONGRATULATIONS ${this.name}!!!! YOU WON!!!!   *************************`.rainbow + "\n")
                console.log(`------------------------------------------------------------------------------------------------------`.rainbow)


            } else {
                scoreComputer++;
                console.log("\n" + "*****    YOU LOST, COMPUTER WON   *****".bgRed.bold);
            }

            console.log("\n" + `***  SCOREBOARD  ***
--------------
Computer: ${scoreComputer}
${this.name}: ${scorePlayer}
--------------`.bgBrightMagenta.bold + "\n");
            anotherRound = prompt("DO YOU WANT CONTINUE TO PLAY? PRESS YES OR NO".red)
        } while (anotherRound === "yes".toLocaleLowerCase());

        console.log("\n" + "************************************     GAME OVER    ***********************************************".america)
    }

    bullsAndCows() {
        let bulls = 0;
        let cows = 0;



        // console.log(this.computer, this.input);
        let totalDigit = 4;
        for (let i = 0; i < totalDigit; i++) {
            if (this.computer.includes(this.input[i])) {
                this.computer[i] === this.input[i] ? bulls++ : cows++;
            }
        }


        console.log(`***    ${bulls} bulls and ${cows} cows   ***`.bgRed);
        if (bulls == 3) {
            console.log(`Almost Done!!! You have 3 bulls`.red);
        }
    }
}


let play1 = new BullsAndCows();
play1.playerName();
//play1.numberOfComputer();
play1.numberOfUser();