let rimanenza = document.querySelector('#rimanenza')//tempo rimanente
let inpcow = document.querySelector('#inpcow')//elemento dove inserire secondi
let btnstart = document.querySelector('#start')//bottone start
let btnstop = document.querySelector('#stop')// bottone stop
let btnreset = document.querySelector('#reset')//bottone reset


let intervall;
let counter;
let sec = 0


btnstart.addEventListener('click', ()=>{
    clearInterval(intervall)
    counter = inpcow.value // secondi inserti

    if(sec !==0){
        counter=sec;
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
    sec=counter
})





btnreset.addEventListener('click',()=>{
    inpcow.value='';
    clearInterval(intervall);
    rimanenza.innerHTML='';
})




