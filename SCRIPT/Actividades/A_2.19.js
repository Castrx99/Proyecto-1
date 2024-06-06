// Usando bucle while
console.log("Números impares del 100 al 1 que no son múltiplos de 3 ni de 7 (usando while):");

let numero = 100;

while (numero >= 1) {
    if (numero % 2 !== 0 && numero % 3 !== 0 && numero % 7 !== 0) {
        console.log(numero);
    }
    numero--;
}


// Usando bucle do...while
console.log("\nNúmeros impares del 100 al 1 que no son múltiplos de 3 ni de 7 (usando do...while):");

numero = 100;

do {
    if (numero % 2 !== 0 && numero % 3 !== 0 && numero % 7 !== 0) {
        console.log(numero);
    }
    numero--;
} while (numero >= 1);


// Usando bucle for
console.log("\nNúmeros impares del 100 al 1 que no son múltiplos de 3 ni de 7 (usando for):");

for (let numero = 100; numero >= 1; numero--) {
    if (numero % 2 !== 0 && numero % 3 !== 0 && numero % 7 !== 0) {
        console.log(numero);
    }
}
