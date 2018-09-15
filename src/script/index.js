
import {Circle} from './circle';
import {c} from './circle';
import {UImenunavRect} from './circle';

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


// canvas
const circleArray = [];
for (let i=0; i < Math.random()*30+40; i++) {
  let r = Math.random() * 3 + 3;
  let x = Math.random() * (UImenunavRect.width-r*2) + r;
  let y = Math.random() * (UImenunavRect.height-r*2) + r;
  let dx = (Math.random() - .5) * 3;
  let dy = (Math.random() - .5) * 1.5;
  circleArray.push(new Circle(x, y, r, dx, dy));
}

function animate() {
  requestAnimationFrame(animate);
  c.clearRect(0, 0, UImenunavRect.width, UImenunavRect.height);
  circleArray.forEach(circle => circle.update);
}

animate();