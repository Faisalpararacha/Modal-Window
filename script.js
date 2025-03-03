'use strict';
const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModel = document.querySelector('.close-modal');
const btnOpenModel = document.querySelectorAll('.show-modal');
console.log(btnOpenModel);

for (let i = 0; i < btnOpenModel.length; i++)
  btnOpenModel[i].addEventListener('click', function () {
    console.log('Button Clicked');
    modal.classList.remove('hidden');
    overlay.classList.remove('hidden');
  });
const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};
btnCloseModel.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);
