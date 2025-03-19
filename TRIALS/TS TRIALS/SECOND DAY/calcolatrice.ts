import * as readline from "readline";

class Calcolatrice {
  public calcola(a: number, b: number, operazione: string): number | string {
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
  }
  
  public avvia(): void {

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
    const rl = readline.createInterface({
      input: process.stdin,
      output: process.stdout,
    });

    rl.question("Inserisci il primo numero (a): ", (inputA) => {
      const a = parseFloat(inputA);

      rl.question("Inserisci il secondo numero (b): ", (inputB) => {
        const b = parseFloat(inputB);

        rl.question("Inserisci l'operazione (+, -, *, /): ", (operazione) => {
          const risultato = this.calcola(a, b, operazione);
          console.log(`Risultato: ${risultato}`);
          rl.close();
        });
      });
    });
  }
}

const calcolatrice = new Calcolatrice();
calcolatrice.avvia();
