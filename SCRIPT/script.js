// TIPOS DE VARIABLES 
nombre="Sergio Castro"; //tipo de variable String, puedes utilizar "" o ''
edad=25; //tipo de variable Number, no necesita comillas
español=true; //tipo de dato Boolean, solo tiene dos estados, true o false
sexo=null;

//¿Como puedes ver los valores sin mostrarlos en el html?
//Se utiliza para ver la ejecución o valores -> console.log(lo que quieres mostrar)

console.log(nombre);
console.log(edad);
console.log(español);
console.log(sexo);
//Operador de concatenación + une dos o más expresiones de salida
console.log("nombre ->" + typeof(nombre) + "!");
console.log("edad ->" + typeof(edad));
console.log("español ->" + typeof(español));
console.log("sexo ->" + (sexo));

direccion="Calle campo 81";
//Simplificar las cadenas con Backticks
console.log(`Datos personales ${nombre} Direccion ${direccion}`);
console.log("Datos personales" + nombre + "Direccion" + nombre);
//Si la variable es numérica, podemos realizar operaciones matemáticas
console.log("El año que viene cumpliras" + (edad+1) + "años");
console.log(`El año que viene cumpliras ${edad+1} años`);

console.log('Esta es una frase de Cervantes \'En un lugar de la mancha\'');
console.log("Esta es una frase de Cervantes \'En un lugar de la mancha\"");
console.log("Esta es una frase de Cervantes 'En un lugar de la mancha'");
console.log("Esta es una frase de Cervantes \n'En un lugar de la mancha'");
console.log("Esta es una frase de Cervantes \n\t'En un lugar de la mancha'");
console.log("El signo de la eternidad Armeria es \u{058d}");


//Actividad propuesta
//El acceso a la ruta C:\\usuario\ tarda 1'23", algo considerado "lento" en la actualidad.
console.log("El acceso a la ruta C:\\\\usuario \\tarda 1'23\", algo considerado \"lento\" en la actualidad");

//Tipos de datos numericos (number) */

altura=1.80; //tipo de dato numerico es decimal
diametro= 2e-9;
console.log("Altura -> " + altura);
console.log("Diametro ->  + diametro");
resultado= altura/0; //-> infinito
otroresultado= resultado + 10;
console.log(otroresultado);

//Si tienes otro tipo de datos y quieres hacer una operacion matematica -> NaN -> Not a number
//Para generar un espacio se hace poniendo donde quieres el espacio " "
resultado=nombre+" "+24;
console.log(resultado); //* / % ** pero con el + siempre concatena, deberiamos de ponerlo entre parentesis

//Tipo de datos Booleanos que son true o false

valorVerdadero=false;
valorVerdadero=true;

console.log(`1- ¿true?:${Boolean(true)}`);
console.log(`2- ¿false?:${Boolean(false)}`);
console.log(`3- 1: ${Boolean(1)}`);
console.log(`4- 0: ${Boolean(0)}`);


//si existe datos....siempre va a ser true!
texto="Un texto ejemplo";
console.log(`5- texto: ${Boolean(texto)}`);
textoVacio="";
console.log(`5- textovacio: ${Boolean(textoVacio)}`);

//Conversion de tipos//
masanios="10"; // el tipo de dato es String

console.log(edad + masanios);
console.log(edad + Number(masanios));
console.log(String(edad)+ masanios);
console.log(true*7); //dara 7 por que true es 1
console.log(false*2); //dara 0 por que false es 0

console.log(edad*masanios); //Al usar multiplicacion, division y resta, te convierte solo la variable masanios de String a number 
console.log(edad/masanios);
console.log(edad-masanios);
console.log(edad+Number(masanios)); // Al usar mas, si que tienes que convertir la variable, ya que la suma se usa para concatenar


titulo=document.getElementsByTagName("h1");
titulo.innerHTML="JavaScript";

parrafo=document.getElementById("parrafo");
parrafo.innerHTML="Hola";

cuadrado=document.querySelector(".cuadrado");
parrafo=document.querySelector("#parrafo");
titulo=document.querySelector("h1");


titulo.innerHTML="Práctica de JavaScript";
cuadrado.innerHTML="A";


document.write("Es una prueba de document.write")

var edad=58;

let email="sergiocastro@gmail.com"
document.write("<p>" + email + "</p>");
document.write("<p>" + edad + "</p>");

/*Ambito de bloque*/
let mensaje="Mensaje 1" //declaramos la variable mensaje que es texto
function mostrarMensaje(){ //funcion que actua como un bloque
    let mensaje= "<br> Mejsaje dentro del Bloque"; // cambias el valor de la variable
    document.write(mensaje);
}
mostrarMensaje();
document.write("<br> mensaje fuera ->" + mensaje); 

/* Constantes*/

const IVA=21;
let precio=50*((IVA/100)+1);
document.write("<br>El precio final es " + precio);


precio=100*((IVA/100)+1);
document.write("<br> El precio final es"+precio);

//salidas por consola

console.error("aqui hay un error");
console.info("informacion");
console.warn("es una notificacion importante");
console.log('%c mensaje con estilo', 'font-size:36px; color:blue; font-weight:bold;')



//salidas de mensaje

alert("Es una alerta");
document.write("prueba...prueba...prueba");
//mensajes de confirmacion (si/no...true/false)

let confirmacion=confirm("Quieres salir del programa?")
document.write(`<br> El usuario quiere salir? -> ${confirmacion}`);

if(confirmacion){
    window.location.replace("https://google.es")
}else{
    alert("te quedas aqui!")
}

// mensaje de entrada de datos

nombre=prompt("Escribe tu nombre")

let imagen=documen.querySelector("#imagen")
imagen.src="../img/paisaje-og.webp";









