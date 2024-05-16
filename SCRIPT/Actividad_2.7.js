//Actividad propuesta 2.7

let operando1=9;
let operando2=5;
let resultado = operando1%operando2;
console.log("Devuelve el resto de la division entera-> " + resultado)

operando2 = ++operando1;
resultado= operando2;
console.log("Devuelve el valor de operando 2 -> " + resultado)

operando1=9;
operando2 = operando1++;
resultado= operando2;
console.log("Devuelve el valor de operando 2 -> " + resultado)

operando1=9;
operando2= --operando1;
resultado=operando2;
console.log("Devuelve el valor de operando 2 ->" + resultado)

operando1=9;
operando2= operando1--;
resultado=operando2;
console.log("Devuelve el valor de operando 2 ->" + resultado)

let c= 2;
let d= 3;
resultado = c**d;
console.log("El resultado de la potencia es -> " + resultado)

let a= 5;
resultado= -a;
console.log(resultado);

resultado= +"3";
console.log(typeof(resultado)); //nos devuelve el tipo de dato de cualquier variable
console.log(resultado);
resultado=+true;
console.log(typeof(resultado)); 
console.log(resultado);