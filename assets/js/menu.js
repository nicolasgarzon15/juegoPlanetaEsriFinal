let modalBtn = document.querySelector('.modalBtn');
let modalBg = document.querySelector('.modal-bg');
let modalCln = document.querySelector('.modal-close');

function modalActive(){  

    modalBg.classList.add('bg-active');

}

function modalClose() {

    modalBg.classList.remove('bg-active');

}