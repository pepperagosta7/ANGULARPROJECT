function moltiplica(a, b) {
    return a * b;
}
var risultato = moltiplica(4, 5);
console.log("Il risultato della moltiplicazione \u00E8: ".concat(risultato));
var somma = function (a, b) { return a + b; };
console.log("Il risultato della somma \u00E8: ".concat(somma(3, 7)));
function moltiplica2(a, b) {
    if (b === void 0) { b = 2; }
    return a * b;
}
console.log("Moltiplicazione:", moltiplica2(5));
function sommaTutti() {
    var numeri = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        numeri[_i] = arguments[_i];
    }
    return numeri.reduce(function (acc, curr) { return acc + curr; }, 0);
}
console.log("La somma di tutti i numeri \u00E8: ".concat(sommaTutti(1, 2, 3, 4)));
function identita(arg) {
    return arg;
}
console.log("Identità:", identita("Testo"));
console.log("Identità:", identita(123));
