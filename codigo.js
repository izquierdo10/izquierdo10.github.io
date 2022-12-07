const ver=document.querySelector(".ver");
const pors=document.querySelector(".pors");

const masUno=document.querySelector(".masUno");
masUno.addEventListener("dblclick",e)
let contador=0;
function e(){
    contador++;
    alert(contador);
    ver.value = contador;

    porcentaje();
}



const menosUno=document.querySelector(".menosUno");
menosUno.addEventListener("dblclick",a)
function a(){
    contador--;
    alert(contador);
    ver.value = contador;
    
    porcentaje();
}
//-------------------------------------------------------------
const masUno2=document.querySelector(".masUno2");
masUno2.addEventListener("dblclick",e2)
function e2(){
    contador++;
    alert(contador);
    ver.value = contador;

    porcentaje();

}



const menosUno2=document.querySelector(".menosUno2");
menosUno2.addEventListener("dblclick",a2)
function a2(){
    contador--;
    alert(contador);
    ver.value = contador;

    porcentaje(); 

}
//-------------------------------------------------------------
const masUno3=document.querySelector(".masUno3");
masUno3.addEventListener("dblclick",e3)
function e3(){
    contador++;
    alert(contador);
    ver.value = contador;

    porcentaje();
       
}



const menosUno3=document.querySelector(".menosUno3");
menosUno3.addEventListener("dblclick",a3)
function a3(){
    contador--;
    alert(contador);
    ver.value = contador;  
    
    porcentaje();
}
//-------------------------------------------------------------      
const masUno4=document.querySelector(".masUno4");
masUno4.addEventListener("dblclick",e4)
function e4(){
    contador++;
    alert(contador);
    ver.value = contador;
    
    porcentaje();
}



const menosUno4=document.querySelector(".menosUno4");
menosUno4.addEventListener("dblclick",a4)
function a4(){
    contador--;
    alert(contador);
    ver.value = contador; 
    
    porcentaje();
}
//-------------------------------------------------------------

function porcentaje(){
    const proba ={1:"17%",2:"46%",3:"50%",4:"60%",5:"61%",6:"64%",7:"66%"}
    resultado =proba[contador];
    if (contador in proba){
    pors.value = resultado; 
    }else{
        pors.value = "bajando probabilidad%";
    }
    
}










