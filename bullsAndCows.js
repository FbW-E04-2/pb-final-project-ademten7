var colors = require('colors');
const prompt = require('prompt-sync')();
class BullsAndCows {
    computer;
    input;

    numberOfComputer() {
        let computerArr;
        do {
            this.computer = String(Math.floor(Math.random() * 9000 + 1000)).split("");

            //1.way to create four different digits
            computerArr = this.computer.filter((el, index) => el !== this.computer[index + 1] && el !== this.computer[index + 2] && el !== this.computer[index + 3]);
            // console.log(computerArr)

            //2. way to create four different digits
            //bool = (computer[0] === computer[1] || computer[0] === computer[2] || computer[0] === computer[3]) ||
            // (computer[1] === computer[2] || computer[1] === computer[3]) || (computer[2] === computer[3])

        } while (computerArr.length !== 4);
        // this.computer = Number(this.computer.join(""));
        // console.log();
        console.log(this.computer);
    }

    numberOfUser() {
        let attempt = 1;
        let inputArr;
        console.log("*******************************   LET'S START   ********************************".bgRed + "\n");

        do {
            console.log(`ATTEMPT : ${attempt}`.green)
            this.input = parseInt(prompt("PLEASE ENTER A NUMBER WHICH HAS FOUR DIFFERENT DIGITS ===>     "));
            console.log();
            if (this.input / 1000 < 1 || this.input / 1000 >= 10) {
                throw new Error("!!!!!! You have to enter only four digits numbers !!!!!!".red + "\n")
            }
            this.input = String(this.input).split("");
            inputArr = this.input.filter((el, index) => el !== this.input[index + 1] && el !== this.input[index + 2] && el !== this.input[index + 3]);
            if (inputArr.length !== 4) {
                throw new Error("You have to enter 4 different integer number".bgRed);
            }

            if (attempt == 7) {
                console.log(`Last three attempt`.red);
            } else if (attempt == 8) {
                console.log(`Last two attempt`.red);
            } else if (attempt === 9) {
                console.log("This is the last chance. You have to find secret number. Otherwise, you will lost ".red)
            }

            if (attempt === 10 && (this.computer.join("") !== this.input.join(""))) {
                throw new Error("!!!!!! You already tried 10 times. YOU LOST, COMPUTER WON!".bgRed)
            }

            attempt++;


            this.bullsAndCows();


            //to limit number of attempts to guess the secret number


        } while (this.computer.join("") !== this.input.join(""))
        console.log(`------------------------------------------------------------------------------------------------------`.rainbow + "\n")
        console.log("***************************   CONGRATULATIONS!!!! YOU WON!!!!   *************************************".rainbow + "\n")
        console.log(`------------------------------------------------------------------------------------------------------`.rainbow)


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

        // if (this.computer.includes(this.input[0])) {
        //     this.computer[0] === this.input[0] ? bulls++ : cows++;
        // }
        // if (this.computer.includes(this.input[1])) {
        //     this.computer[1] === this.input[1] ? bulls++ : cows++;
        // }
        // if (this.computer.includes(this.input[2])) {
        //     this.computer[2] === this.input[2] ? bulls++ : cows++;
        // }
        // if (this.computer.includes(this.input[3])) {
        //     this.computer[3] === this.input[3] ? bulls++ : cows++;
        // }

        console.log(`***    ${bulls} bulls and ${cows} cows   ***`.bgRed);
        if (bulls == 3) {
            console.log(`Almost Done!!! You have 3 bulls`.red);
        }
    }
}


let play1 = new BullsAndCows();
play1.numberOfComputer();
play1.numberOfUser();