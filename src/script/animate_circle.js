
import { Circle } from './circle';


const mouse = {
  x: undefined,
  y: undefined
}


let circleArray = [];
let aboutArray = [];
export function fun() {
  
  
  if (document.querySelector('#about')) {
    const UIabout = document.querySelector('#about');
    const UIaboutCanvas = document.querySelector('.about-canvas');
    const ctxAboutCanvas = UIaboutCanvas.getContext('2d');
    

    UIaboutCanvas.addEventListener('mousemove', findMouse);
    function findMouse(e) {
      mouse.x = e.offsetX;
      mouse.y = e.offsetY;
    }
    
    resize(UIaboutCanvas, UIabout.getBoundingClientRect());
    window.addEventListener('resize', () => {
      resize(UIaboutCanvas, UIabout.getBoundingClientRect());
      aboutArray = [];
      buildCircleArray(aboutArray, 400, UIabout.getBoundingClientRect(), ctxAboutCanvas);

    });
    
    buildCircleArray(aboutArray, 400, UIabout.getBoundingClientRect(), ctxAboutCanvas);
    function animateAbout() {
      requestAnimationFrame(animateAbout);
      ctxAboutCanvas.clearRect(0, 0, UIabout.getBoundingClientRect().width, UIabout.getBoundingClientRect().height);
      aboutArray.forEach(circle => {
        circle.updateAbout;
        if (mouse.x-circle.x < 50 && mouse.x-circle.x > -50 &&
            mouse.y-circle.y < 50 && mouse.y-circle.y > -50 &&
            circle.r < circle.maxR
           ) circle.r += 1;
        else if (circle.r > circle.minR)
            circle.r -= 1;

          
      });
    }
    animateAbout()
  }

  if (document.querySelector('.menu-canvas')) {
    const UImenuNav = document.querySelector('.menu-nav');
    const UImenuCanvas = document.querySelector('.menu-canvas');
    const ctxMenuCanvas = document.querySelector('.menu-canvas').getContext('2d');

    UImenuCanvas.addEventListener('mousemove', findMouse);
    function findMouse(e) {
      mouse.x = e.offsetX;
      mouse.y = e.offsetY;
    }
    

    resize(UImenuCanvas, UImenuNav.getBoundingClientRect());
    window.addEventListener('resize', () => {
      resize(UImenuCanvas, UImenuNav.getBoundingClientRect());
      circleArray = [];
      buildCircleArray(circleArray, 400, UImenuNav.getBoundingClientRect(), ctxMenuCanvas);

    });
    
    buildCircleArray(circleArray, 400, UImenuNav.getBoundingClientRect(), ctxMenuCanvas);

    function animateNav() {
      requestAnimationFrame(animateNav);
      ctxMenuCanvas.clearRect(0, 0, UImenuNav.getBoundingClientRect().width, UImenuNav.getBoundingClientRect().height);
      circleArray.forEach(circle => {
        circle.updateMenu
        if (mouse.x-circle.x < 50 && mouse.x-circle.x > -50 &&
            mouse.y-circle.y < 50 && mouse.y-circle.y > -50 &&
            circle.r < circle.maxR)
              circle.r += 1;
        else if (circle.r > circle.minR)
              circle.r -= 1;      
      });
    }
    animateNav()
  }

}



function resize(canvas, parentRect) {
  canvas.width = parentRect.width;
  canvas.height = parentRect.height;
}

// canvas

function buildCircleArray(array, n, ele, ctx) {

  for (let i=0; i < n; i++) {
    let r = Math.random() + 1;
    let x = Math.random() * (ele.width-r*2) + r;
    let y = Math.random() * (ele.height-r*2) + r;
    let dx = (Math.random() - .5) * 3;
    let dy = (Math.random() - .5) * 1.5;
    array.push(new Circle(x, y, r, dx, dy, ctx));
  }
}


