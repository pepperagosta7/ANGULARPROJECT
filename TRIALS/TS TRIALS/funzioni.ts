function moltiplica(a: number, b: number): number {
    return a * b;
}

const risultato: number = moltiplica(4, 5);
console.log(`Il risultato della moltiplicazione è: ${risultato}`);

const somma = (a: number, b: number): number => a + b;
console.log(`Il risultato della somma è: ${somma(3, 7)}`);

function moltiplica2(a: number, b: number = 2): number {
    return a * b;
}

console.log("Moltiplicazione:", moltiplica2(5));

function sommaTutti(...numeri: number[]):number{
    return numeri.reduce((acc, curr) => acc + curr, 0);
}
console.log(`La somma di tutti i numeri è: ${sommaTutti(1, 2, 3, 4)}`);

function identita<T>(arg: T): T {
    return arg;
}
console.log("Identità:", identita<string>("Testo"));
console.log("Identità:", identita<number>(123));