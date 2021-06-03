const buttons = document.querySelector('.buttons');
const counter = document.querySelector('.count');

buttons.addEventListener('click',(e)=>{

if(e.target.classList.contains('subtract')){
    counter.innerHTML--;
    setColor();
}
 if(e.target.classList.contains('reset')){
    counter.innerHTML = 0;
    setColor();
}
 if(e.target.classList.contains('add')){
    counter.innerHTML++;
    setColor();
    
}

})


function setColor(){

    if(counter.innerHTML > 0){
        counter.style.color = "lightgreen";
    }else if(counter.innerHTML <0){
        counter.style.color = "red";
    }else{
        counter.style.color = "white";
    }
}