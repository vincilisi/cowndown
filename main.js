let rimanenza = document.querySelector('#rimanenza')//tempo rimanente
let inpcow = document.querySelector('#inpcow')//elemento dove inserire secondi
let btnstart = document.querySelector('#start')//bottone start
let btnstop = document.querySelector('#stop')// bottone stop
let btnreset = document.querySelector('#reset')//bottone reset


let intervall;
let counter;
let remaingsecond = 0


btnstart.addEventListener('click', ()=>{
    clearInterval(intervall)
    counter = inpcow.value // secondi inserto

    if(remaingsecond !==0){
        counter=remaingsecond;
    }
    intervall = setInterval(()=>{
        if (counter < 0) {
            clearInterval(intervall)
            rimanenza.innerHTML= 'Tempo Scaduto'
        }else{
            rimanenza.innerHTML=counter
            counter --  
        }
    },1000);
})



btnstop.addEventListener('click', ()=>{
    clearInterval(intervall)
    remaingsecond=counter
})





btnreset.addEventListener('click',()=>{
    inpcow.value='';
    clearInterval(intervall);
    rimanenza.innerHTML='';
})




