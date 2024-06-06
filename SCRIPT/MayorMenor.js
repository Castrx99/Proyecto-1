let boton=document.querySelector(".boton"); //Ha llamado al elemento que tiene esta clase
//Necesitamos que cuando pulse click en el boton, haga una condicion
//y analice la edad para enviar un mensaje de vuelta

//JavaScript los eventos

boton.addEventListener("click", function(){
    let nombre1=document.querySelector("#nombre1");
    let edad1=document.querySelector("#edad1");
    let nombre2=document.querySelector("#nombre2");
    let edad2=document.querySelector("#edad2");
    let nombre3=document.querySelector("#nombre3");
    let edad3=document.querySelector("#edad3");
    let menError=document.querySelector(".mensajeError");
    let men=document.querySelector(".mensaje");
    //declaramos todas las variables llamandolas de los elementos que queremos traer los datos 
    
    


    let mensajeError=""; //declaramos una variable con la que concatenaremos los errores y esta variable la mostraremos en la clase del elemento p mensaje error
    let error=false; //variable error que la iniciamos en false


    if(nombre1.value=="" || nombre2=="" || nombre3==""){ //si esta vacio el nombre 1, 2, 3 el mensaje será el siguiente:
        mensajeError="El campo nombre es obligatorio";
        error=false;
    }
    if(edad1.value<0 || edad1.value=="" || edad2.value<0 || edad2.value=="" || edad3.value<0 || edad3.value==""){
        mensajeError+= " <br> El campo edad es obligatorio"
        error=true;
    }

    if(error){ //si el error da true, si no pones ==true, por defecto es true
        men.innerHTML="";
        menError.innerHTML=mensajeError;
    }else{
        menError.innerHTML="";
        if(edad1.value > edad2.value && edad2.value > edad3.value){//hecho
            men.innerHTML=`${nombre1.value} es mayor que ${nombre2.value} y ${nombre3.value} es el menor`;
        } else if(+edad1.value>+edad3.value && +edad3.value>+edad2.value){ //hecho
            men.innerHTML=`${nombre1.value} es mayor que ${nombre3.value} y ${nombre2.value} es el menor`;
        } else if(+edad2.value>+edad3.value && +edad3.value>+edad1.value){
            men.innerHTML=`${nombre2.value} es mayor que ${nombre3.value} y ${nombre1.value} es el menor`;
        } else if(+edad2.value>+edad1.value && +edad1.value>+edad3.value){//hecho
            men.innerHTML=`${nombre2.value} es mayor que ${nombre1.value} y ${nombre3.value} es el menor`;
        } else if(+edad3.value>+edad1.value && +edad1.value>+edad2.value){
            men.innerHTML=`${nombre3.value} es mayor que ${nombre1.value} y ${nombre2.value} es el menor`;
        } else if(+edad3.value>+edad2.value && +edad2.value>+edad1.value){ //hecho
            men.innerHTML=`${nombre3.value} es mayor que ${nombre2.value} y ${nombre1.value} es el menor`;
        }else if(+edad1.value == +edad2.value && +edad1.value>+edad3.value){
            men.innerHTML= `${nombre1.value} tiene la misma edad que ${nombre2.value} y ${nombre3.value} es el menor`;
        }else if(+edad1.value == +edad2.value && +edad1.value<+edad3.value){
            men.innerHTML= `${nombre1.value} tiene la misma edad que ${nombre2.value} y ${nombre3.value} es el mayor`;
        }else if(+edad2.value == +edad3.value && +edad2.value>+edad1.value){
            men.innerHTML= `${nombre2.value} tiene la misma edad que ${nombre3.value} y ${nombre1.value} es el menor`;
        }else if(+edad2.value == +edad3.value && +edad2.value<+edad1.value){
            men.innerHTML= `${nombre2.value} tiene la misma edad que ${nombre3.value} y ${nombre1.value} es el mayor`;
        }else if(+edad3.value == +edad1.value && +edad3.value>+edad2.value){
            men.innerHTML= `${nombre3.value} tiene la misma edad que ${nombre1.value} y ${nombre2.value} es el menor`;
        }else if(+edad3.value == +edad1.value && +edad3.value<+edad2.value){
            men.innerHTML= `${nombre3.value} tiene la misma edad que ${nombre1.value} y ${nombre2.value} es el mayor`;     
    }}

    document.querySelector(".mensajeError").innerHTML=`${mensajeError}`;
    
}) 



