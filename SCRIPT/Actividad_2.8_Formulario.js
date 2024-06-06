let boton=document.querySelector(".boton"); //Ha llamado al elemento que tiene esta clase
//Necesitamos que cuando pulse click en el boton, haga una condicion
//y analice la edad para enviar un mensaje de vuelta

//JavaScript los eventos

boton.addEventListener("click", function(){

    let nombre=document.querySelector("#nombre").value;
    let edad=document.querySelector("#edad").value;
    //nos trae el valor que se ha escrito en el formulario
    let mensaje;
    let mensajeError;
    let error=false
    if(edad>0 && edad<=12){
        mensaje="niñ@";
    }
    else if(edad>=13 && edad<=17){
        mensaje="adolescente";
    }
    else if(edad>=18 && edad<=64){
        mensaje="trabajador"
    }
    else{
        mensaje="jubilado"
    }

    if(edad<0 || edad=="") {
        mensajeError = "La edad no es correcta, ingrese una edad correcta";
        document.querySelector("#edad").value=""; //esto hace que cuando sea incorrecta borre el contenido que hemos puesto en la edad
        error=true;
    } 
    if(nombre=="") {
        mensajeError += " <br> Ingrese un nombre"
        error=true;
    } 
    if(error){
        document.querySelector(".mensajeError").innerHTML=""; //borra el contenido de mensaje
        document.querySelector(".mensaje").innerHTML=`${mensajeError}`;

    }
        else{
            document.querySelector(".mensajeError").innerHTML=""; //borra el contenido de mensaje
            document.querySelector(".mensaje").innerHTML=`${nombre} tiene ${edad} años y es ${mensaje}`;
        }

    
}) 
//Esto hará que si la edad es mayor de 0 nos mostrará el nombre + edad + categoria 
// Y si es menor o igual a 0 nos mostrará el mensaje 'La edad introducida no es correcta'


