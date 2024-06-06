// //Estructuras de saltos e interrupciones en bucles
// //break
// //Muestra la tabla de multiplicar del 9 hasta que llega al 5
// const TABLA=9;
// for (let index = 0; index <=10; index++) {
//     console.log(`${TABLA} X ${index} = ${TABLA * index}`);
//     if (index==5){
//         break; //interrumpe el bucle
//     }
// }

//salto
//Muestra los 10 primeros impares que no sean multiplos de 3
let contadorS= 0;
let numero=1;
while(contadorS<10){
    if(numero%3==0){
        numero++;
        continue; //No ejecuta las siguientes lineas, si no que vuelve al while
        
    }
    if(numero%2!=0){
        console.log("Es impar" + numero);
        contadorS++;
    }
    numero++;//se incrementa si no hace el salto(par o impar)
}
