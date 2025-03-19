const numeri: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

for (let i = 0; i < numeri.length; i++) {
    console.log(`Elemento ${i}: ${numeri[i]}`);
}

let j: number = 0;
while (j < numeri.length) {
    console.log(`Elmento ${j}: ${numeri[j]}`);
    j++;
}

for(const numero of numeri){
    console.log(`Numero: ${numero}`);
}
