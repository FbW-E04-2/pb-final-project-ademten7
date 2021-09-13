var colors = require('colors');
const prompt = require('prompt-sync')();
class Shrugman {
    name;
    input;
    secretWord;
    scoreComputer = 0;
    scorePlayer = 0;
    book = ["Inferno", "The Institute", "Billy Summer", "Clean Code", "A Slow Fire Burning", "The Noise", "Ground Zero"];
    movie = ["The Shawshank Redemption", "The Godfather", "Forrest Gump", "Life is Beautiful", "The Green Mile", "The Matrix Resurrections"];
    city = ["Kathmandu", "Tehran", "Berlin", "Ankara", "Bucharest", "Brasilia", "Mogadishu", "Valletta"]

    //1.Enter the player name
    playerName() {
        this.name = prompt("Please enter your name:   ".bgBlue);
    }

    //2.Choose title and secret word
    secretWordOfComputer() {

        let title = prompt("Choose your categories (book, movie or city):".bgRed);

        let index;
        if (title === "book") {
            index = Math.floor(Math.random() * this.book.length);
            //console.log(index);
            this.secretWord = this.book[index];

        } else if (title === "movie") {
            index = Math.floor(Math.random() * this.movie.length);
            //console.log(index);
            this.secretWord = this.movie[index];
        } else if (title === "city") {
            index = Math.floor(Math.random() * this.city.length);
            //console.log(index);
            this.secretWord = this.city[index];

        } else {
            throw new Error("Please enter a correct name of the categories".bgRed);
        }
        console.log(this.secretWord);

        this.secretWord = this.secretWord.toLowerCase()



    }

    play() {
        this.playerName();

        let input;
        let anotherRound;
        let indexOfInput;
        let secretWordArr;
        let emptyWordArr;
        let joinedSecretWord;
        let counter;
        let alphabet;
        let alphabetArr;
        let indexAlphabet;


        do {
            console.log("\n" + "😎😎😎😎😎😎😎😎😎😎😎😎" + `   LET'S START ${this.name}    `.bgRed + "😎😎😎😎😎😎😎😎😎😎 " + "\n");
            counter = 0;
            //to get a new alphabet for each iteration
            alphabet = "a b c d e f g h i j k l m n o p q r s t u v w x y z";
            alphabetArr = alphabet.split("");

            this.secretWordOfComputer();




            secretWordArr = this.secretWord.split("");

            emptyWordArr = secretWordArr.map(char => {
                if (char !== " ") {
                    char = "-";
                } else {
                    char = " ";
                }
                return char;
            });


            // console.log(secretWordArr);
            //console.log(emptyWordArr);




            //3.creating empty secret word
            joinedSecretWord = emptyWordArr.join("");
            console.log(joinedSecretWord);
            //to exit from the inner loop
            loop1:
                do {

                    console.log();
                    input = prompt("Enter a letter:".bgRed);
                    //to exit from the game 
                    if (input === "0000") {
                        throw new Error("🤷🤷🤷🤷🤷🤷🤷🤷🤷🤷🤷🤷🤷🤷     GAME OVER    🤷🤷🤷🤷🤷🤷🤷🤷🤷🤷🤷🤷🤷🤷🤷🤷");
                    }
                    console.log();

                    indexOfInput = secretWordArr.indexOf(input);
                    if (indexOfInput === -1) {
                        console.log("\n" + joinedSecretWord + "\n");
                        counter++;
                        switch (counter) {
                            case 1:
                                console.log(`¯`.red + "\n");
                                console.log("🤷")
                                break;
                            case 2:
                                console.log(`¯\\`.red + "\n");
                                console.log("🤷🤷")
                                break;
                            case 3:
                                console.log(`¯\\_`.red + "\n");
                                console.log("🤷🤷🤷")
                                break;
                            case 4:
                                console.log(`¯\\_(`.red + "\n");
                                console.log("🤷🤷🤷🤷")
                                break;
                            case 5:
                                console.log(`¯\\_(ツ`.red + "\n");
                                console.log("🤷🤷🤷🤷🤷")
                                break;
                            case 6:
                                console.log(`¯\\_(ツ)`.red + "\n");
                                console.log("🤷🤷🤷🤷🤷🤷")
                                break;
                            case 7:
                                console.log(`¯\\_(ツ)_`.red + "\n");
                                console.log("🤷🤷🤷🤷🤷🤷🤷" + "  😨😨😨 LAST  2 CHANCE  😨😨😨  ".red)
                                break;
                            case 8:
                                console.log(`¯\\_(ツ)_/`.red + "\n");
                                console.log("🤷🤷🤷🤷🤷🤷🤷🤷" + "  😰😰😰😰😰  LAST CHANCE 😰😰😰😰😰  ".red)
                                break;
                            case 9:
                                console.log(`¯\\_(ツ)_/¯`.red + "\n");
                                console.log("🤷🤷🤷🤷🤷🤷🤷🤷🤷");
                                //throw new Error(`*****    ¯\\_(ツ)_/¯   You completed shrugman emoji. You lost!!!  :(   *****`.bgRed)
                                this.scoreComputer++;
                                //to exit from the inner loop
                                break loop1;
                        }




                    } else {
                        while (indexOfInput !== -1) {
                            //convert Upper Case of the first letters
                            if (indexOfInput === 0 || (emptyWordArr[indexOfInput - 1] === " ")) {
                                emptyWordArr = emptyWordArr.fill(input.toUpperCase(), indexOfInput, indexOfInput + 1);
                            } else {
                                emptyWordArr = emptyWordArr.fill(input, indexOfInput, indexOfInput + 1);
                            }

                            joinedSecretWord = emptyWordArr.join("");

                            indexOfInput = secretWordArr.indexOf(input, indexOfInput + 1);


                        }
                        console.log("\n" + joinedSecretWord + "\n");



                    }
                    indexAlphabet = alphabetArr.indexOf(input);
                    alphabetArr = alphabetArr.fill("🤐", indexAlphabet, indexAlphabet + 1);
                    console.log("\n" + alphabetArr.join("") + "\n");


                    if (joinedSecretWord.indexOf("-") == -1) {
                        console.log(`------------------------------------------------------------------------------------------------------`.rainbow + "\n")
                        console.log("🥳🥳🥳🥳🥳🥳🥳🥳🥳🥳🥳🥳" + "      CONGRATULATIONS YOU FOUND THE SECRET WORD      ".rainbow + " 🥳🥳🥳🥳🥳🥳🥳🥳🥳🥳🥳🥳" + "\n")
                        console.log(`------------------------------------------------------------------------------------------------------`.rainbow)
                        this.scorePlayer++;
                        break;
                    }

                } while (true);





            //             console.log(`\n                    ***********************  SCOREBOARD  ***********************
            // --------------
            // Computer: ${this.scoreComputer}
            // ${this.name}: ${this.scorePlayer}
            // --------------`.bgBrightMagenta.bold + "\n");

            this.score();


            anotherRound = prompt("DO YOU WANT CONTINUE TO PLAY? PRESS YES OR NO ==>     ".red);
        } while (anotherRound === "yes".toLocaleLowerCase());

    }

    score() {
        let scoreComputerEmoji = "";
        let scorePlayerEmoji = "";
        for (let i = 0; i < this.scoreComputer; i++) {
            scoreComputerEmoji += "🤷";

        }
        for (let i = 0; i < this.scorePlayer; i++) {
            scorePlayerEmoji += "🤷";
        }

        console.log(`\n                    ***********************  SCOREBOARD  ***********************
--------------
COMPUTER: ${scoreComputerEmoji}
${this.name.toUpperCase()}: ${scorePlayerEmoji}
--------------`.bgBrightMagenta.bold + "\n");


    }
}

let play1 = new Shrugman();
//play1.playerName();
//play1.secretWordOfComputer();
//console.log(play1.secretWord);
play1.play();