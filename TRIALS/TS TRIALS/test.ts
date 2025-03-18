function analizzaNumeri(numeri: number[]): void{
    let sommaPositivi: number = 0;
    let prodottoNegativi: number = 1;
    let contaZero: number = 0;
    let contaDispari: number = 0;

    for (let i= 0; i<numeri.length; i++){
        if (numeri[i] > 0){
            sommaPositivi += numeri[i];
        } else if (numeri[i] < 0){
            prodottoNegativi *= numeri[i];
        } else if (numeri[i] === 0){
            contaZero++;
        }
        else{
            contaDispari++;
        }
    }

    console.log("Somma dei numeri positivi: " + sommaPositivi);
    console.log("Prodotto dei numeri negativi: " + prodottoNegativi);
    console.log("Numero di zeri: " + contaZero);
    console.log("Numero di dispari: " + contaDispari);
}

const numeri: number[] = [10, -2, 3, -5, 0, 4, 1, -8, 2, -1];
analizzaNumeri(numeri);