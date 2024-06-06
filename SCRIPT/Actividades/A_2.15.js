
const numero = parseInt(prompt("Introduce un número para calcular su factorial:"));

function calcularFactorial(n) {
    if (n < 0) return undefined; 
    if (n === 0 || n === 1) return 1; 

    let factorial = 1;
    for (let i = 2; i <= n; i++) {
        factorial *= i;
    }
    return factorial;
}



if (!isNaN(numero)) {
    const resultado = calcularFactorial(numero);
    console.log(`El factorial de ${numero} es ${resultado}`);
} else {
    console.log("Por favor, introduce un número válido.");
}
