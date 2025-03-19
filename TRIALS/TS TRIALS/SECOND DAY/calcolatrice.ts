import * as readline from 'readline';

function calcola(a: number, b: number, operazione: string): number | string {
    if (operazione === "+"){
        return a + b;
    } else if (operazione === "-"){
        return a - b;
    } else if (operazione === "*"){
        return a * b;
    } else if (operazione === "/"){
        if(b === 0){
            return "Impossibile dividere per 0";
        }
        return a / b;
    } else {
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

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('Inserisci il primo numero (a): ', (inputA) => {
    const a = parseFloat(inputA);

    rl.question('Inserisci il secondo numero (b): ', (inputB) => {
        const b = parseFloat(inputB);

        rl.question('Inserisci l\'operazione (+, -, *, /): ', (operazione) => {
            const risultato = calcola(a, b, operazione);
            console.log(`Risultato: ${risultato}`);
            rl.close();
        });
    });
});

