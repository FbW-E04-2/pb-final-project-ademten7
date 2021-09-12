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
        // let arr;
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
        // arr = "ababa".split("a");
        //7console.log(arr);

    }

    guess() {
        // this.createEmptySecretWord();
        let answer;
        let input;
        let forward;
        let indexOfInput;
        let secretWordArr;
        let emptyWordArr;
        let filledArr;
        let joinedArr;
        let counter = 0;

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
        //console.log("Type " + typeof this.emptyWord);

        emptyWordArr = this.emptyWord.split("");
        console.log(this.emptyWord);
        console.log(secretWordArr);
        console.log(emptyWordArr);



        do {
            //3.creating empty secret word






            do {

                input = prompt("Enter a letter:".bgRed);

                indexOfInput = secretWordArr.indexOf(input);
                while (indexOfInput !== -1) {
                    emptyWordArr = emptyWordArr.fill(input, indexOfInput, indexOfInput + 1);
                    joinedArr = emptyWordArr.join("")

                    indexOfInput = secretWordArr.indexOf(input, indexOfInput + 1);


                }
                console.log(joinedArr);

                // if (secretWordArr.includes(input)) {

                //     indexOfInput = secretWordArr.indexOf(input, indexOfInput);
                //     console.log(indexOfInput);
                //     filledArr = emptyWordArr.fill(input, indexOfInput, indexOfInput + 1);
                //     console.log(filledArr);

                // }
                // indexOfInput++;




            } while (secretWordArr.includes(input, indexOfInput));
            counter++;
            switch (counter) {
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
                    console.log(`¯|_(ツ)_/¯`.red);
                    break;
            }




            // console.log(`¯|_(:/)_/¯`)
            // console.log(`¯|_(ツ)_/¯`);

            forward = prompt("DO YOU WANT CONTINUE TO PLAY? PRESS YES OR NO".red)
        } while (forward === "yes".toLocaleLowerCase());

    }
}

let play1 = new Shrugman();
play1.playerName();
play1.secretWordOfComputer();
//console.log(play1.secretWord);
play1.guess();