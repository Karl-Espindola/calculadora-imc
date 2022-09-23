

function calcular(){
    peso1=parseFloat(peso.value);
    altura1=parseFloat(altura.value);
    if(altura1>3){
        altura1=altura1/100;
    }
    
    let imc=peso1/(altura1*altura1);

    imc=imc.toFixed(1);
    resul.innerText=imc;

    if(imc<18.5){
        resul.style.background="#70B5FA";
    }
    if(imc>=18.5 && imc<=24.9){
        resul.style.background="#80F152";
    }
    if(imc>=25 && imc<=29.9){
        resul.style.background="#FFB654";
    }
    if(imc>30){
        resul.style.background="#E60202";
    }
}

function reset(){
    resul.innerText="";
    peso.value="";
    altura.value="";
    resul.style.background="transparent";
}


let peso=document.getElementById("peso");
let altura=document.getElementById("altura");
let resul=document.getElementById("resul");

let btnCal=document.getElementById("btnCal");
btnCal.addEventListener("click",calcular);

let btnReset=document.getElementById("btnReset");
btnReset.addEventListener("click",reset);