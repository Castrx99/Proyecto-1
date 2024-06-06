// Función principal para ejecutar el programa
function calcularAreas() {
    let opcion;

    do {
        // Mostrar el menú de opciones
        opcion = prompt(
            "Seleccione una opción para calcular el área:\n" +
            "a) Área del triángulo (b*h/2)\n" +
            "b) Área del rectángulo (b*h)\n" +
            "c) Área del círculo (3.14*r^2)\n" +
            "d) Salir\n" +
            "Introduce a, b, c o d:"
        );

        // Validar la opción y realizar la operación correspondiente
        switch (opcion) {
            case 'a':
                calcularAreaTriangulo();
                break;
            case 'b':
                calcularAreaRectangulo();
                break;
            case 'c':
                calcularAreaCirculo();
                break;
            case 'd':
                console.log("Saliendo del programa...");
                break;
            default:
                console.log("Opción no válida. Por favor, elija a, b, c o d.");
        }
    } while (opcion !== 'd');
}

// Función para calcular el área del triángulo
function calcularAreaTriangulo() {
    let base = parseFloat(prompt("Introduce la base del triángulo:"));
    let altura = parseFloat(prompt("Introduce la altura del triángulo:"));

    if (!isNaN(base) && !isNaN(altura) && base > 0 && altura > 0) {
        let area = (base * altura) / 2;
        console.log(`El área del triángulo es: ${area}`);
    } else {
        console.log("Datos inválidos. Asegúrese de que la base y la altura sean números positivos.");
    }
}

// Función para calcular el área del rectángulo
function calcularAreaRectangulo() {
    let base = parseFloat(prompt("Introduce la base del rectángulo:"));
    let altura = parseFloat(prompt("Introduce la altura del rectángulo:"));

    if (!isNaN(base) && !isNaN(altura) && base > 0 && altura > 0) {
        let area = base * altura;
        console.log(`El área del rectángulo es: ${area}`);
    } else {
        console.log("Datos inválidos. Asegúrese de que la base y la altura sean números positivos.");
    }
}

// Función para calcular el área del círculo
function calcularAreaCirculo() {
    let radio = parseFloat(prompt("Introduce el radio del círculo:"));

    if (!isNaN(radio) && radio > 0) {
        let area = 3.14 * Math.pow(radio, 2);
        console.log(`El área del círculo es: ${area}`);
    } else {
        console.log("Datos inválidos. Asegúrese de que el radio sea un número positivo.");
    }
}

// Ejecutar el programa
calcularAreas();
