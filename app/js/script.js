const btnHamburger = document.querySelector('#btnHamburger');
const header = document.querySelector('.header');
const body = document.querySelector('body');
const overlay = document.querySelector('.overlay');
const fadeElements = document.querySelectorAll('.has-fade');

btnHamburger.addEventListener('click', () => {
  console.log('open hamburger');

  if (header.classList.contains('open')) {
    //close hamburger menu
    body.classList.remove('noscroll');
    header.classList.remove('open');
    fadeElements.forEach(element => {
      element.classList.add('fade-out');
      element.classList.remove('fade-in');
    });
  } else {
    //open hamburger menu
    body.classList.add('noscroll');
    header.classList.add('open');
    fadeElements.forEach(element => {
      element.classList.remove('fade-out');
      element.classList.add('fade-in');
    });
  }
});
