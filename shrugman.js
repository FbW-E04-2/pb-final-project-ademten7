var colors = require('colors');
const prompt = require('prompt-sync')();
class Shrugman {

    input;
    secretWord;
    book = ["Inferno", "The Institute", "Billy Summer", "Clean Code", "A Slow Fire Burning", "The Noise", "Ground Zero"];
    movie = ["The Shawshank Redemption", "The Godfather", "Forrest Gump", "Life is Beautiful", "The Green Mile", "The Matrix Resurrections"];
    emptyWord;
    //1.Enter the player name
    playerName() {
        this.name = prompt("Please enter your name:   ".bgBlue);
    }

    //2.Choose title and secret word
    secretWordOfComputer() {

        let title = prompt("Choose your categories (book or movie):".bgRed);

        let index;
        if (title === "book") {
            index = Math.floor(Math.random() * this.book.length);
            console.log(index);
            this.secretWord = this.book[index];

        } else {
            index = Math.floor(Math.random() * this.movie.length);
            console.log(index);
            this.secretWord = this.movie[index];
        }
        this.secretWord = this.secretWord.toLowerCase()
        console.log(this.secretWord);


    }

    guess() {
        let answer;
        let input;
        let forward;
        let indexOfInput;
        let secretWordArr;
        let emptyWordArr;
        let joinedSecretWord;
        let outerCounter = 0;
        let alphabet = "abcdefghijklmnopqrstuvwxyz";
        let alphabetArr = alphabet.split("");
        let indexAlphabet;
        let scoreComputer = 0;

        do {
            this.secretWordOfComputer();
            this.emptyWord = "";



            secretWordArr = this.secretWord.split("");
            secretWordArr.map(char => {

                if (char !== " ") {
                    char = "-"
                    this.emptyWord += char

                } else {
                    char = " ";
                    this.emptyWord += char;
                }

            });


            emptyWordArr = this.emptyWord.split("");
            console.log(this.emptyWord);
            console.log(secretWordArr);
            console.log(emptyWordArr);




            //3.creating empty secret word




            joinedSecretWord = emptyWordArr.join("");

            do {
                console.log();
                input = prompt("Enter a letter:".bgRed);
                if (input === "0000") {
                    throw new Error("Game Over".bgRed);
                }
                console.log();

                indexOfInput = secretWordArr.indexOf(input);
                if (indexOfInput === -1) {
                    console.log("\n" + joinedSecretWord + "\n");
                    outerCounter++;
                    switch (outerCounter) {
                        case 1:
                            console.log(`¯`.red);
                            break;
                        case 2:
                            console.log(`¯|`.red);
                            break;
                        case 3:
                            console.log(`¯|_`.red);
                            break;
                        case 4:
                            console.log(`¯|_(`.red);
                            break;
                        case 5:
                            console.log(`¯|_(ツ`.red);
                            break;
                        case 6:
                            console.log(`¯|_(ツ)`.red);
                            break;
                        case 7:
                            console.log(`¯|_(ツ)_`.red);
                            break;
                        case 8:
                            console.log(`¯|_(ツ)_/`.red);
                            break;
                        case 9:
                            throw new Error(`*****    ¯|_(ツ)_/¯   You completed shrugman emoji. You lost!!!  :(   *****`.bgRed)

                    }



                } else {
                    while (indexOfInput !== -1) {
                        emptyWordArr = emptyWordArr.fill(input, indexOfInput, indexOfInput + 1);
                        joinedSecretWord = emptyWordArr.join("");

                        indexOfInput = secretWordArr.indexOf(input, indexOfInput + 1);


                    }
                    console.log("\n" + joinedSecretWord + "\n");


                }
                indexAlphabet = alphabetArr.indexOf(input);
                alphabetArr = alphabetArr.fill("_", indexAlphabet, indexAlphabet + 1);
                console.log("\n" + alphabetArr.join("") + "\n");

                if (joinedSecretWord.indexOf("-") == -1) {
                    console.log(`------------------------------------------------------------------------------------------------------`.rainbow + "\n")
                    console.log(`****************************      CONGRATULATIONS YOU FOUND THE SECRET WORD     *************************`.rainbow + "\n")
                    console.log(`------------------------------------------------------------------------------------------------------`.rainbow)
                    break;
                }

            } while (true);





            console.log("\n" + `***  SCOREBOARD  ***
--------------
Computer: ${scoreComputer}
${this.name}: ${scorePlayer}
--------------`.bgBrightMagenta.bold + "\n");


            forward = prompt("DO YOU WANT CONTINUE TO PLAY? PRESS YES OR NO".red)
        } while (forward === "yes".toLocaleLowerCase());

    }
}

let play1 = new Shrugman();
play1.playerName();
//play1.secretWordOfComputer();
//console.log(play1.secretWord);
play1.guess();