function analizzaNumeri(numeri) {
    var sommaPositivi = 0;
    var prodottoNegativi = 1;
    var contaZero = 0;
    var contaDispari = 0;
    for (var i = 0; i < numeri.length; i++) {
        if (numeri[i] > 0) {
            sommaPositivi += numeri[i];
        }
        else if (numeri[i] < 0) {
            prodottoNegativi *= numeri[i];
        }
        else if (numeri[i] === 0) {
            contaZero++;
        }
        else {
            contaDispari++;
        }
    }
    console.log("Somma dei numeri positivi: " + sommaPositivi);
    console.log("Prodotto dei numeri negativi: " + prodottoNegativi);
    console.log("Numero di zeri: " + contaZero);
    console.log("Numero di dispari: " + contaDispari);
}
var numeri = [10, -2, 3, -5, 0, 4, 1, -8, 2, -1];
analizzaNumeri(numeri);
