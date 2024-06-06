// Programa para demostrar los operadores a++, ++a, a--, y --a

console.log("Diferencias entre a++, ++a, a--, y --a\n");

// Inicializar variables
let a = 5;
let b;

// Explicación de a++
/* 
   'a++' es el operador de post-incremento.
   Incrementa el valor de 'a' después de que su valor actual haya sido utilizado.
   Por lo tanto, primero se usa el valor de 'a' y luego se incrementa en 1.
*/
b = a++;
console.log(`Usando 'a++':\n  a = ${a} (después del incremento)\n  b = ${b} (valor original de a antes del incremento)\n`);

// Reasignar valor inicial a
a = 5;

// Explicación de ++a
/* 
   '++a' es el operador de pre-incremento.
   Incrementa el valor de 'a' antes de que su valor sea utilizado.
   Por lo tanto, incrementa 'a' primero y luego se usa su nuevo valor.
*/
b = ++a;
console.log(`Usando '++a':\n  a = ${a} (después del incremento)\n  b = ${b} (valor de a después del incremento)\n`);

// Reasignar valor inicial a
a = 5;

// Explicación de a--
/* 
   'a--' es el operador de post-decremento.
   Decrementa el valor de 'a' después de que su valor actual haya sido utilizado.
   Por lo tanto, primero se usa el valor de 'a' y luego se decrementa en 1.
*/
b = a--;
console.log(`Usando 'a--':\n  a = ${a} (después del decremento)\n  b = ${b} (valor original de a antes del decremento)\n`);

// Reasignar valor inicial a
a = 5;

// Explicación de --a
/* 
   '--a' es el operador de pre-decremento.
   Decrementa el valor de 'a' antes de que su valor sea utilizado.
   Por lo tanto, decrementa 'a' primero y luego se usa su nuevo valor.
*/
b = --a;
console.log(`Usando '--a':\n  a = ${a} (después del decremento)\n  b = ${b} (valor de a después del decremento)\n`);
