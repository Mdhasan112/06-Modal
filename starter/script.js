'use strict';
const btnShowModal = document.querySelectorAll('.show-modal');

for (let i = 0; i < btnShowModal.length; i++) {
  btnShowModal[i].addEventListener('click', function () {
    console.log('hello');
  });
}
