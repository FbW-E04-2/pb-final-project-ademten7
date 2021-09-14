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
    shrugEmojiStr = "¯\\_(ツ)_/¯";
    shrugEmoji = "🤷🤷🤷🤷🤷🤷🤷🤷🤷";
    counter;
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

        let alphabet;
        let alphabetArr;
        let indexAlphabet;
        let guess;


        do {
            emptyWordArr = [];
            console.log("\n" + "😎😎😎😎😎😎😎😎😎😎😎😎" + `   LET'S START ${this.name}    `.bgRed + "😎😎😎😎😎😎😎😎😎😎😎😎 " + "\n");
            this.counter = 0;
            //to get a new alphabet for each iteration
            alphabet = "a b c d e f g h i j k l m n o p q r s t u v w x y z";
            alphabetArr = alphabet.split("");

            this.secretWordOfComputer();




            secretWordArr = this.secretWord.split("");

            secretWordArr.map(char => {
                if (char !== " ") {
                    emptyWordArr.push("🔒");
                } else {
                    emptyWordArr.push(" ");
                }
                return emptyWordArr;

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
                        this.counter++;

                        //to get shrugman emojis call the function
                        this.getShrugmanEmojis();
                        if (this.counter === 9) {
                            this.scoreComputer++;
                            console.log("🤷🤷🤷🤷🤷🤷🤷🤷🤷🤷🤷🤷🤷🤷      GAME OVER YOU LOST       🤷🤷🤷🤷🤷🤷🤷🤷🤷🤷🤷🤷🤷🤷🤷🤷 ".bgRed)
                                //to exit from the inner loop
                            break loop1;
                        }


                        // switch (counter) {
                        //     case 1:
                        //         console.log()
                        //         console.log(`¯`.red + "\n");
                        //         console.log("🤷")
                        //         break;
                        //     case 2:
                        //         console.log(`¯\\`.red + "\n");
                        //         console.log("🤷🤷")
                        //         break;
                        //     case 3:
                        //         console.log(`¯\\_`.red + "\n");
                        //         console.log("🤷🤷🤷")
                        //         break;
                        //     case 4:
                        //         console.log(`¯\\_(`.red + "\n");
                        //         console.log("🤷🤷🤷🤷")
                        //         break;
                        //     case 5:
                        //         console.log(`¯\\_(ツ`.red + "\n");
                        //         console.log("🤷🤷🤷🤷🤷")
                        //         break;
                        //     case 6:
                        //         console.log(`¯\\_(ツ)`.red + "\n");
                        //         console.log("🤷🤷🤷🤷🤷🤷")
                        //         break;
                        //     case 7:
                        //         console.log(`¯\\_(ツ)_`.red + "\n");
                        //         console.log("🤷🤷🤷🤷🤷🤷🤷" + "  😨😨😨 LAST  2 CHANCE  😨😨😨  ".red)
                        //         break;
                        //     case 8:
                        //         console.log(`¯\\_(ツ)_/`.red + "\n");
                        //         console.log("🤷🤷🤷🤷🤷🤷🤷🤷" + "  😰😰😰😰😰  LAST CHANCE 😰😰😰😰😰  ".red)
                        //         break;
                        //     case 9:
                        //         console.log(`¯\\_(ツ)_/¯`.red + "\n");
                        //         console.log("🤷🤷🤷🤷🤷🤷🤷🤷🤷");
                        //         //throw new Error(`*****    ¯\\_(ツ)_/¯   You completed shrugman emoji. You lost!!!  :(   *****`.bgRed)
                        //         this.scoreComputer++;
                        //         //to exit from the inner loop
                        //         break loop1;
                        // }




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

                    guess = prompt("DO YOU WANT TO GUESS THE TITLE:".bgRed);


                    if (joinedSecretWord.indexOf("🔒") == -1 || (guess.toLowerCase() === this.secretWord.toLowerCase())) {
                        console.log(`------------------------------------------------------------------------------------------------------`.rainbow + "\n")
                        console.log("🥳🥳🥳🥳🥳🥳🥳🥳🥳🥳🥳🥳" + "      CONGRATULATIONS YOU FOUND THE SECRET WORD      ".rainbow + " 🥳🥳🥳🥳🥳🥳🥳🥳🥳🥳🥳🥳" + "\n")
                        console.log(`------------------------------------------------------------------------------------------------------`.rainbow)
                        this.scorePlayer++;
                        break;
                    }

                }
                while (true);

            this.getScore();


            anotherRound = prompt("DO YOU WANT CONTINUE TO PLAY? PRESS YES OR NO ==>     ".red);
        } while (anotherRound === "yes".toLocaleLowerCase());

    }

    getScore() {
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
    getShrugmanEmojis() {
        let shrugEmojiStrArr = this.shrugEmojiStr.split("");
        console.log(shrugEmojiStrArr.slice(0, this.counter).join("") + "\n");
        console.log(this.shrugEmoji.substring(0, this.counter) + "\n");
        if (this.counter === 7) {

            console.log("😨😨😨 LAST  2 CHANCE  😨😨😨  ".red + "\n");

        } else if (this.counter === 8) {

            console.log("😰😰😰😰😰  LAST CHANCE 😰😰😰😰😰  ".red + "\n")
        }


    }

}

let play1 = new Shrugman();
//play1.playerName();
//play1.secretWordOfComputer();
//console.log(play1.secretWord);
play1.play();