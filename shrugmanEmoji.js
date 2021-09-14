var colors = require('colors');
// let counter;
// counter++;

let shrugEmojiStr = "¯\\_(ツ)_/¯";
let shrugEmoji = "🤷 🤷 🤷 🤷 🤷 🤷 🤷 🤷 🤷 ";
// console.log(emoji.substring(0, 2));

// return = emoji.split("").slice(0, counter).join("");
// console.log(arr.splice(0, 2));


counter = 5;
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

let shrugEmojiStrArr = shrugEmojiStr.split("");
let shrugEmojiArr = shrugEmoji.split("");

console.log(shrugEmojiStrArr.slice(0, counter).join("").red);
console.log(shrugEmojiArr.slice(0, counter * 2).join(""));
console.log(shrugEmoji.substring(0, counter * 3));