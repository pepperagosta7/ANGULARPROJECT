var numeri = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
for (var i = 0; i < numeri.length; i++) {
    console.log("Elemento ".concat(i, ": ").concat(numeri[i]));
}
var j = 0;
while (j < numeri.length) {
    console.log("Elmento ".concat(j, ": ").concat(numeri[j]));
    j++;
}
for (var _i = 0, numeri_1 = numeri; _i < numeri_1.length; _i++) {
    var numero = numeri_1[_i];
    console.log("Numero: ".concat(numero));
}
