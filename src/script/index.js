
import { fun } from './animate_circle';

const UImenuBtn = document.querySelector('.menu-btn');
const UImenu = document.querySelector('.menu');
const UImenuBranding = document.querySelector('.menu-branding');
const UImenuNav = document.querySelector('.menu-nav');
const UInavItem = document.querySelectorAll('.nav-item');


// set menu initail state

let showMenu = false;

UImenuBtn.addEventListener('click', toggleMenu);

function toggleMenu() {

  // UImenuBtn.classList.toggle('close');
  // UImenu.classList.toggle('show');
  // UImenuNav.classList.toggle('show');
  // UImenuBranding.classList.toggle('show');
  // UInavItem.forEach(item => {
  //   item.classList.toggle('show');
  // });


  if (!showMenu) {
    UImenuBtn.classList.add('close');
    UImenu.classList.add('show');
    UImenuNav.classList.add('show');
    UImenuBranding.classList.add('show');
    UInavItem.forEach(item => {
      item.classList.add('show');
    });

    showMenu = true;
  } else {
    UImenuBtn.classList.remove('close');
    UImenu.classList.remove('show');
    UImenuNav.classList.remove('show');
    UImenuBranding.classList.remove('show');
    UInavItem.forEach(item => {
      item.classList.remove('show');
    });

    showMenu = false;
  }
}

fun();
