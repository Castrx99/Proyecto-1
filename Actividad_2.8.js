let boton=document.querySelector(".boton"); //Ha llamado al elemento que tiene esta clase
//Necesitamos que cuando pulse click en el boton, haga una condicion
//y analice la edad para enviar un mensaje de vuelta

//JavaScript los eventos

boton.addEventListener("click", function(){

    let nombre=document.querySelector("#nombre").value;
    let edad=document.querySelector("#edad").value;
    //nos trae el valor que se ha escrito en el formulario
    let mensaje;
    if(edad<=12){
        mensaje="niñ@";
    }
    else if(edad>=13 && edad<=17){
        mensaje=adolescente;
    }
    else if(edad>=18 && edad<=64){
        mensaje="trabajador"
    }
    else{
        mensaje="jubilado"
    }
    document.querySelector(".mensaje").innerHTML=`${nombre} tiene ${edad} y es ${mensaje}`


})