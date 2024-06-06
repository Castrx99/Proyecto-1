
let boton=document.querySelector(".boton");

boton.addEventListener("click", function(){
    let edad=document.querySelector("#edad").value;//el value es para recoger el valor
    let mensaje=document.querySelector(".mensaje").value;
    if(edad==""){
        document.querySelector(".mensaje").innerHTML="";
        document.querySelector(".mensaje").innerHTML="Ingrese un numero para poder decir si es par o impar";
    }else{
    if(edad%2==0){
        document.querySelector(".mensaje").innerHTML="";
        document.querySelector(".mensaje").innerHTML=`El numero ${edad} es par`;
    } else{
        document.querySelector(".mensaje").innerHTML="";
        document.querySelector(".mensaje").innerHTML=`El numero ${edad} es impar`;
        
        }
    }
    
})