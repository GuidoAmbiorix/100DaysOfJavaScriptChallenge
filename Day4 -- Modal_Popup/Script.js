//Variables
const modal = document.querySelector('.modal');
const close = document.querySelector('.close');
const btn = document.querySelector('#btn');



//Eventos
btn.addEventListener('click',openModal);
modal.addEventListener('click',closeModal)
modal.addEventListener('click',closeModal);


//Funciones
function openModal(e){
 e.preventDefault();
 modal.style.display = 'block';
}

function closeModal(){
    modal.style.display = 'none';
}
   


