/*

RULES OF THE GAME:
---One player, makes up a secret word or phrase 
while the other player tries to guess the word by asking what letters it contains. 

---Every wrong guess brings them one step closer to losing and we draw the shrug emoji.
It consists of exactly 10 characters:


----If the user has already guessed this letter once, ask them for another letter.

---The secret title is displayed masked - every character except spaces is represented by a 🔒.

---if you use any letter, it is removed from the alphabet to prevent the duplicate using.

*/
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
    shrugEmoji = "🤷 🤷 🤷 🤷 🤷 🤷 🤷 🤷 🤷 ";
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
            //You have to enter correct title
            throw new Error("Please enter a correct name of the categories".bgRed);
        }
        //console.log(this.secretWord);

        this.secretWord = this.secretWord.toLowerCase()



    }


    play() {
        this.playerName();

        //letters of the player
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
            //to push lock emojis 
            emptyWordArr = [];
            console.log("\n" + "😎😎😎😎😎😎😎😎😎😎😎😎" + `   LET'S START ${this.name}    `.bgRed + "😎😎😎😎😎😎😎😎😎😎😎😎 " + "\n");
            //after every round counter should be 0
            this.counter = 0;

            //to get a new alphabet for each round
            alphabet = "a b c d e f g h i j k l m n o p q r s t u v w x y z";
            alphabetArr = alphabet.split("");

            //to get the secret word
            this.secretWordOfComputer();

            //to get the letters of the secret word inside the array
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
            console.log(emptyWordArr);




            //to get the lock emojis as a string.
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

                    //to find the index number and open the locks 

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

                    } else {

                        while (indexOfInput !== -1) {
                            //convert Upper Case of the first letters
                            if (indexOfInput === 0 || (emptyWordArr[indexOfInput - 1] === " ")) {
                                emptyWordArr = emptyWordArr.fill(input.toUpperCase(), indexOfInput, indexOfInput + 1);
                                //  [a,b,c,d,e,f].fill(c, 1, 4) === > [a, c, c, c, e,f]
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
        console.log(shrugEmojiStrArr.slice(0, this.counter).join("") + "\n".red);
        console.log(this.shrugEmoji.slice(0, this.counter * 2) + "\n");
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