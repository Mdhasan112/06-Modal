'use strict';

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const showModal = document.querySelectorAll('.show-modal');
const closeModal = document.querySelector('.close-modal');

const openModals = function () {
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};
const closeModals = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

for (let i = 0; i < showModal.length; i++) {
  showModal[i].addEventListener('click', openModals);
  closeModal.addEventListener('click', closeModals);
  overlay.addEventListener('click', closeModals);
}

document.addEventListener('keydown', function (e) {
  // console.log('a key press');
  console.log(e);
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModals();
  }
});
