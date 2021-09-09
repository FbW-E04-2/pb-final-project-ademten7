var colors = require('colors');
const prompt = require('prompt-sync')();
class BullsAndCows {
    computer;
    computerArr;
    input;

    numberOfComputer() {

        do {
            this.computer = String(Math.floor(Math.random() * 9000 + 1000)).split("");

            //1.way to create four different digits
            this.computerArr = this.computer.filter((el, index) => el !== this.computer[index + 1] && el !== this.computer[index + 2] && el !== this.computer[index + 3]);
            // console.log(computerArr)

            //2. way to create four different digits
            //bool = (computer[0] === computer[1] || computer[0] === computer[2] || computer[0] === computer[3]) ||
            // (computer[1] === computer[2] || computer[1] === computer[3]) || (computer[2] === computer[3])

        } while (this.computerArr.length !== 4);
        this.computer = Number(this.computer.join(""));
        console.log();
        console.log(this.computer);
    }

    numberOfUser() {
        let counter = 0;
        let attempt = 1;
        console.log("*******************************   LET'S START   ********************************".bgRed + "\n");

        do {
            console.log(`ATTEMPT : ${attempt}`.green)
            this.input = parseInt(prompt("PLEASE ENTER A NUMBER WHICH HAS FOUR DIFFERENT DIGITS ===>     "));
            console.log();
            if (this.input / 1000 < 1 || this.input / 1000 >= 10) {
                throw new Error("!!!!!! You have to enter only four digits numbers !!!!!!".red + "\n")
            }

            //this.bullsAndCows();


            //to limit number of attempts to guess the secret number

            if (attempt == 7) {
                console.log(`Last three attempt`.red);
            } else if (attempt == 8) {
                console.log(`Last two attempt`.red);
            } else if (attempt === 9) {
                console.log("This is the last chance. You have to find secret number. Otherwise, you will lost ".red)
            }
            if (counter == 10) {
                throw new Error("!!!!!! You already tried 10 times. YOU LOST, COMPUTER WON!".bgRed)
            }
            counter++;
            attempt++;
        } while (this.computer !== this.input)
        console.log(`------------------------------------------------------------------------------------------------------`.rainbow + "\n")
        console.log("***************************   CONGRATULATIONS!!!! YOU WON!!!!   *************************************".rainbow + "\n")
        console.log(`------------------------------------------------------------------------------------------------------`.rainbow)


    }

    bullsAndCows() {
        let bulls = 0;
        let cows = 0;

        this.computer = String(this.computer).split("");
        this.input = String(this.input).split("");
        console.log(this.computer, this.input);
        if (this.computer.includes(this.input[0])) {
            this.computer[0] === this.input[0] ? bulls++ : cows++;
        }
        if (this.computer.includes(this.input[1])) {
            this.computer[1] === this.input[1] ? bulls++ : cows++;
        }
        if (this.computer.includes(this.input[0])) {
            this.computer[2] === this.input[2] ? bulls++ : cows++;
        }
        if (this.computer.includes(this.input[3])) {
            this.computer[3] === this.input[3] ? bulls++ : cows++;
        }

        console.log(bulls, cows);

    }
}

let play1 = new BullsAndCows();
play1.numberOfComputer();
play1.numberOfUser();