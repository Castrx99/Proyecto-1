// Programa de adivinanza de números

// Generar un número aleatorio entre 1 y 100
const numeroSecreto = Math.floor(Math.random() * 100) + 1;
let adivinanza;

// Bucle do...while para solicitar adivinanzas hasta que el usuario acierte
do {
    // Solicitar una adivinanza al usuario
    adivinanza = parseInt(prompt("Adivina el número (entre 1 y 100):"));

    // Comprobar si la adivinanza es correcta, demasiado baja o demasiado alta
    if (adivinanza < numeroSecreto) {
        console.log("Demasiado bajo. Intenta otra vez.");
    } else if (adivinanza > numeroSecreto) {
        console.log("Demasiado alto. Intenta otra vez.");
    } else if (!isNaN(adivinanza)) {
        console.log("¡Correcto! El número era " + numeroSecreto);
    } else {
        console.log("Por favor, introduce un número válido.");
    }
} while (adivinanza !== numeroSecreto);
