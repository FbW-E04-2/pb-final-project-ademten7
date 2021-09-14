const prompt = require('prompt-sync')();
var colors = require('colors');

class Cashier {
    constructor(amount) {
        this.amount = amount;

    }

    productSelection() {
        let forward;
        let input;
        let quantity;
        let tip;
        do {

            input = prompt(`SELECT YOUR PRODUCT FROM THE LIST:Milk,Meat,Bread,Water,Fish,Eggs,Yogurt,Cheese,Pizza,Butter,Sugar,Pineapples: `);
            quantity = prompt("HOW MANY PRODUCT DO YOU WANT TO BUY:")

            switch (input.toLowerCase()) {
                case "milk":
                    this.amount += 3.25 * quantity;
                    break;
                case "meat":
                    this.amount += 5.76 * quantity;
                    break;
                case "bread":
                    this.amount += 1.34 * quantity;
                    break;
                case "water":
                    this.amount += 1.45 * quantity;
                    break;
                case "fish":
                    this.amount += 4.44 * quantity;
                    break;
                case "eggs":
                    this.amount += 2.45 * quantity;
                    break;
                case "yogurt":
                    this.amount += 2.45 * quantity
                case "cheese":
                    this.amount += 3.34 * quantity;
                    break;
                case "pizza":
                    this.amount += 3.90 * quantity;

                case "butter":
                    this.amount += 5.12 * quantity;
                    break;
                case "sugar":
                    this.amount += 2.56 * quantity;
                    break;
                case "pineapples":
                    break;
                default:
                    console.log("You enter wrong product:");
            }

            forward = parseInt(prompt(`DO YOU WANT TO BUY SOMETHING ELSE: PLEASE PRESS FOR YES:1, FOR NO:0   `));

        } while (forward == 1);
        tip = parseInt(prompt("PLEASE ENTER YOUR TIP AMOUNT:  "))
        this.amount += tip;
        console.log(`The total price is: ${this.amount} €`.bgBlue.yellow);

    }

    payment() {
        let payType;
        this.productSelection();

        payType = prompt(`WHICH PAYMENT TYPE DO YOU WANT TO PAY: CARD OR CASH? `)
        if (payType.toLowerCase() === "card") {
            console.log("WARNING!*****Sorry you have insufficient credit balance, please pay cash*****".bgRed.italic);

            this.calculator();

        } else if (payType.toLocaleLowerCase() === "cash") {

            this.calculator();
        }
    }

    calculator() {

        let getBack;
        let cash;
        let remain;
        let twenty;
        let ten;
        let five;
        let one;
        let fiftyCents;
        let twentyCents;
        let tenCents;
        let fiveCents;
        let twoCents;
        let oneCent;
        console.log(`How much do you want to give to pay for:  ${this.amount} €`.bgGreen);
        cash = prompt(`Enter your cash amount here: `);

        if (cash < this.amount) {
            throw new Error("You don't have enough money to buy this products. Please bring enough money".bgBrightRed.bold)

        } else if (cash === this.amount) {
            console.log("You have made the payment in full. No remainder.".bgMagenta)
        } else {

            remain = cash - this.amount;
            getBack = remain;
            twenty = Math.floor(remain / 20);
            remain %= 20;
            ten = Math.floor(remain / 10);
            remain %= 10;
            five = Math.floor(remain / 5);
            remain %= 5;
            one = Math.floor(remain / 1);
            remain %= 1;
            fiftyCents = Math.floor(remain / 0.5);
            remain %= 0.5;
            twentyCents = Math.floor(remain / 0.2);
            remain %= 0.2;
            tenCents = Math.floor(remain / 0.1);
            remain %= 0.1;
            fiveCents = Math.floor(remain / 0.05);
            remain %= 0.05;
            twoCents = Math.floor(remain / 0.02);
            remain %= 0.02;
            oneCent = Math.floor(remain / 0.01);
            remain %= 0.01;
            console.log(`You totally get back: ${getBack} € You can see the detailed calculation below:
            -------------------------------------------------------
            ${twenty}x20€
            ${ten}x10 €
            ${five}x5 €
            ${one}x1 €
            ${fiftyCents}x50 Cents
            ${twentyCents}x20 Cents
            ${tenCents}x10 Cents
            ${fiveCents}x5 Cents
            ${twoCents}x2 Cents
            ${oneCent}x1 Cents`.bgRed)


        }
    }
}
let customer = new Cashier(0);
customer.payment();