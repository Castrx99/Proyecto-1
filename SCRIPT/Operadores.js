// Operadores asignacion
//1. Asignacion
let a = 5
let b = a;
console.log("El valor de b es " + b);

// let c=a+b; //una suma y se la asignamos a la variable c
//forma simplificada 
a = a + b;
console.log("valor del primer a->" + a); //resultado es 10

a += b; //el valor de a se le suma otra vez su valor mas el valor de b 
// 5+5+5
console.log("valor del segundo a->" + a);//resultado es 15

let c = a % b; //modulo=0 por que a=15 b=5 lo cual el resto es 0 15/5=3
console.log("valor de c es " + c);

//exponenciacion

let d = b ** 4;
console.log("valor de d es -> " + d);

//Operadores de comparacion -> solo dan como resultado true o false
let respuesta = a == b;
console.log("valor de a es -> " + respuesta);

//Distinto
respuesta = a != b;
console.log("valor de a es -> " + respuesta);

//Igualdad estricta
let e = "5"; //String
respuesta = b == e; //da true por que los dos valen 5 y por que evalua solo el valor
console.log(respuesta);

//en el caso de igualdad estricta resulta falso porque b es number y e es String
respuesta = b === e;
console.log(respuesta);

//desigualdad estricta
respuesta = b !== e; // no es igual que e en valor o en tipo
console.log(respuesta); //true

//Mayor o Menor     Mayor o igual     Menor o igual
respuesta = a > b; //true
respuesta = c < b; //true
respuesta = b >= e; //compara sus valores
respuesta = a <= b;

a++; //a vale 16 a=a+1
console.log("Ahora a vale " + a);
a--;
console.log("Ahora a vale " + a);//15
a -= 3;
console.log("Ahora a vale " + a);//12

//Operadores lógicos

console.log("Operaciones con AND");
console.log(`1. => ${true && true}`);
console.log(`2. => ${true && false}`);
console.log(`3. => ${false && true}`);
console.log(`4. => ${false && false}`);

//Evaluamos condiciones
console.log(`6. => ${4 > 5 && 3 > 5}`);

console.log("Operaciones con OR");
console.log(`1. => ${true || true}`);
console.log(`2. => ${true || false}`);
console.log(`3. => ${false || true}`);
console.log(`4. => ${false || false}`);

console.log("Operaciones con NOT");
console.log(`1. => ${!true}`);
console.log(`1. => ${!false}`);

//Ejemplo practico
let edadnueva = 18;
let matriculado = true;
resultado = matriculado || edadnueva; //true, en cambio si se pone al reves te saldrá 18
console.log(` Esto va a dar = ` + resultado);

//Una variable de tipo numero siempre va a ser true, en cambio si no tiene contenido o le pones null, va a ser false


//Operador condicional u operador ternario
a = 1;
b = 2;

resultado = a > b ? "a es mayor que b" : "b es mayor que a";
console.log(resultado);

//Ejercicio indicando segun la edad si es mayor o menor de edad
let edad = 21;
resultado = (edad > 18 ? "Mayor de edad" : "Menor de edad");
console.log(resultado);

//Solicita por el promt la edad e indica por un alert si es mayor de edad o menor de edad

// edad=prompt("Dime tu edad");
// alert(edad>=18?"Mayor de edad":"Menor de edad");

//Estructura condicional if else

let local = 2;
let visitante = 1;

if (local === visitante) {
    console.log("Hay empate")
}
else {
    console.log("No hay empate")
}
console.log("Fin")

//Estructuras condicionales con if else-if

if (local === visitante) {
    console.log("Hay empate")
}
else if (local > visitante) {
    console.log("Gana local")
}
else{
    console.log("Gana visitante")
}
console.log("Fin")