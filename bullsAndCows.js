var colors = require('colors');
const prompt = require('prompt-sync')();
class BullsAndCows {

    numberOfComputer() {
        let computer;
        let computerArr;
        do {
            computer = String(Math.floor(Math.random() * 9000 + 1000)).split("");

            //1.way to create four different digits
            computerArr = computer.filter((el, index) => el !== computer[index + 1] && el !== computer[index + 2] && el !== computer[index + 3]);
            // console.log(computerArr)

            //2. way to create four different digits
            //bool = (computer[0] === computer[1] || computer[0] === computer[2] || computer[0] === computer[3]) ||
            // (computer[1] === computer[2] || computer[1] === computer[3]) || (computer[2] === computer[3])

        } while (computerArr.length !== 4);
        console.log(Number(computer.join("")));
    }

    numberOfUser() {
        console.log("*******************************LET'S START********************************".red)
        let input = parseInt(prompt("PLEASE ENTER A NUMBER WHICH HAS FOUR DIFFERENT DIGITS:     "));
    }
}

let play1 = new BullsAndCows();
play1.numberOfComputer();
play1.numberOfUser();