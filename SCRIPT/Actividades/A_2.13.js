//CALCULADORA SELECCIONANDO DOS NUMEROS Y UN OPERADOS
let entradaCorrecta= true;
let numero1= Number(parseFloat(prompt("Introduce un primer numero:"))); //Parse float sirve para que un caracter de tipo string te lo pase a tipo decimal
let operador= prompt("Introduce un operador (+,-,*,/,**,%):"); //El promp sirve para pedir algo en la pagina, en este caso un operador
let numero2= Number(parseFloat(prompt ("Introduce un segundo numero")));
let resultado;
if(isNaN(numero1 || numero2)){
    alert("Error al ingresar los datos");
    entradaCorrecta=false;
}


switch(operador){ //El switch nos ayuda a realizar diferentes operacions según el caso que se elija en la variable operador
    case'+':
        resultado= numero1 + numero2;
        console.log("El resultado de la operacion es:" + resultado);
    break;

    case'-':
        resultado= numero1 - numero2;
        console.log("El resultado de la operacion es:" + resultado);
    break;

    case'*':
        resultado= numero1 * numero2;
        console.log("El resultado de la operacion es:" + resultado);
    break;

    case'/':
        resultado= numero1 / numero2;
        console.log("El resultado de la operacion es:" + resultado);
    break;

    case'**':
        resultado= numero1 ** numero2;
        console.log("El resultado de la operacion es:" + resultado);
    break;

    case'%':
        resultado= numero1 % numero2;
        console.log("El resultado de la operacion es:" + resultado);
    break;
    default:
        resultado;
        console.log("Este simbolo no es correcto");
        break;
}


