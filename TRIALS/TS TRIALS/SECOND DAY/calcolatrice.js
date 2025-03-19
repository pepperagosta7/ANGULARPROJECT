"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var readline = require("readline");
function calcola(a, b, operazione) {
    if (operazione === "+") {
        return a + b;
    }
    else if (operazione === "-") {
        return a - b;
    }
    else if (operazione === "*") {
        return a * b;
    }
    else if (operazione === "/") {
        if (b === 0) {
            return "Impossibile dividere per 0";
        }
        return a / b;
    }
    else {
        return "Operazione non valida";
    }
}
/*
const a: number = 10;
const b: number = 5;
const operazione: string = "+";
console.log(calcola(a, b, operazione));
const operazione2: string = "-";
console.log(calcola(a, b, operazione2));
const operazione3: string = "*";
console.log(calcola(a, b, operazione3));
const operazione4: string = "/";
console.log(calcola(a, b, operazione4));
const operazione5: string = "ciao";
console.log(calcola(a, b, operazione5));
*/
var rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
rl.question('Inserisci il primo numero (a): ', function (inputA) {
    var a = parseFloat(inputA);
    rl.question('Inserisci il secondo numero (b): ', function (inputB) {
        var b = parseFloat(inputB);
        rl.question('Inserisci l\'operazione (+, -, *, /): ', function (operazione) {
            var risultato = calcola(a, b, operazione);
            console.log("Risultato: ".concat(risultato));
            rl.close();
        });
    });
});
