var colors = require('colors');
const prompt = require('prompt-sync')();
class Shrugman {

    input;
    secretWord;
    book = ["Inferno", "The Institute", "Billy Summer", "Clean Code", "A Slow Fire Burning", "The Noise", "Ground Zero"];
    movie = ["The Shawshank Redemption", "The Godfather", "Forrest Gump", "Life is Beautiful", "The Green Mile", "The Matrix Resurrections"];
    emptyWord = "";
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

        }
        //3.creating empty secret word
        // createEmptySecretWord() {

    //     let secretWordArr = this.secretWord.split("");
    //     secretWordArr.map(char => {

    //         if (char !== " ") {
    //             char = "?"
    //             this.emptyWord += char

    //         } else {
    //             char = " ";
    //             this.emptyWord += char;
    //         }

    //     });


    //     let emptyWordArr = this.emptyWord.split();



    // }

    guess() {
        // this.createEmptySecretWord();
        let answer;
        let input;
        let forward;
        let indexOfInput;





        do {
            //3.creating empty secret word
            let secretWordArr = this.secretWord.split("");
            secretWordArr.map(char => {

                if (char !== " ") {
                    char = "?"
                    this.emptyWord += char

                } else {
                    char = " ";
                    this.emptyWord += char;
                }

            });


            let emptyWordArr = this.emptyWord.split();



            do {

                input = prompt("Enter a letter:".bgRed);
                if (secretWordArr.includes(input)) {

                    indexOfInput = secretWordArr.indexOf(indexOfInput + 1, input);
                    emptyWordArr.fill(input, indexOfInput, indexOfInput + 1);
                    console.log(emptyWordArr.join(""));

                }











            } while (secretWordArr.includes(input));




            // console.log(`¯|_(:/)_/¯`)

            forward = prompt("DO YOU WANT CONTINUE TO PLAY? PRESS YES OR NO".red)
        } while (forward === "yes".toLocaleLowerCase());

    }
}

let play1 = new Shrugman();
play1.playerName();
play1.secretWordOfComputer();
console.log(play1.secretWord);
play1.guess();