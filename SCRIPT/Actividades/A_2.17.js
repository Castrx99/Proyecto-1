// Función para convertir días, horas y minutos a segundos
function convertirATotalDeSegundos(dias, horas, minutos) {
    // Conversión de días, horas y minutos a segundos
    const segundosPorDia = 86400; // 24 horas * 60 minutos * 60 segundos
    const segundosPorHora = 3600; // 60 minutos * 60 segundos
    const segundosPorMinuto = 60; // 60 segundos

    let totalSegundos = (dias * segundosPorDia) + (horas * segundosPorHora) + (minutos * segundosPorMinuto);
    return totalSegundos;
}

// Solicitar al usuario la cantidad de días, horas y minutos
let dias = parseInt(prompt("Introduce la cantidad de días:"));
let horas = parseInt(prompt("Introduce la cantidad de horas:"));
let minutos = parseInt(prompt("Introduce la cantidad de minutos:"));

// Validación de la entrada del usuario
if (!isNaN(dias) && !isNaN(horas) && !isNaN(minutos)) {
    // Calcular el total de segundos
    let totalSegundos = convertirATotalDeSegundos(dias, horas, minutos);

    // Mostrar el resultado
    console.log(`Total de segundos: ${totalSegundos}`);
} else {
    console.log("Por favor, introduce valores válidos para días, horas y minutos.");
}
