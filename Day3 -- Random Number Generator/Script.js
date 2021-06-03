const randomNumber = document.querySelector('.random-number');
const generate = document.querySelector('.generate');


const GenerateRandomNumber = () =>{

    let random = Math.floor(Math.random() * 100 + 1);
   
    randomNumber.innerHTML = random;
    
}

generate.addEventListener('click',GenerateRandomNumber);

