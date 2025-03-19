"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var readline = require("readline");
var Calcolatrice = /** @class */ (function () {
    function Calcolatrice() {
    }
    Calcolatrice.prototype.calcola = function (a, b, operazione) {
        switch (operazione) {
            case "+":
                return a + b;
            case "-":
                return a - b;
            case "*":
                return a * b;
            case "/":
                if (b === 0) {
                    return "Errore: divisione per zero";
                }
                return a / b;
            default:
                return "Errore: operazione non supportata";
        }
    };
    Calcolatrice.prototype.avvia = function () {
        var _this = this;
        /*
            const a: number = 10;
            const b: number = 5;
            const operazione: string = "+";
            console.log(this.calcola(a, b, operazione));
            const operazione2: string = "-";
            console.log(this.calcola(a, b, operazione2));
            const operazione3: string = "*";
            console.log(this.calcola(a, b, operazione3));
            const operazione4: string = "/";
            console.log(this.calcola(a, b, operazione4));
            const operazione5: string = "ciao";
            console.log(this.calcola(a, b, operazione5));
        */
        var rl = readline.createInterface({
            input: process.stdin,
            output: process.stdout,
        });
        rl.question("Inserisci il primo numero (a): ", function (inputA) {
            var a = parseFloat(inputA);
            rl.question("Inserisci il secondo numero (b): ", function (inputB) {
                var b = parseFloat(inputB);
                rl.question("Inserisci l'operazione (+, -, *, /): ", function (operazione) {
                    var risultato = _this.calcola(a, b, operazione);
                    console.log("Risultato: ".concat(risultato));
                    rl.close();
                });
            });
        });
    };
    return Calcolatrice;
}());
var calcolatrice = new Calcolatrice();
calcolatrice.avvia();
