const hex = document.querySelector('.hex');
const generate = document.querySelector('.generate');

const changeColor = () =>{

    let RandomHexNumber = Math.random().toString(16).substring(2,8);
    
    document.body.style.background = '#' + RandomHexNumber;

    hex.innerHTML = '#' + RandomHexNumber;
}



generate.addEventListener('click',changeColor);
