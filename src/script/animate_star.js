import { Star, starsArray, miniStarsArray, backgroundStarsArray, moonArray, miniMoonArray, init } from './star';
import randomIntFromRange from './utils';

let groundHeight = 50;

function starShowerFun() {

  if (document.querySelector('.home-canvas')) {
    const UIcanvasDiv = document.querySelector('.home-canvas-div');
    const starCanavs = document.querySelector('.home-canvas');
    const ctx = starCanavs.getContext('2d');

    const backgroundGradiant = ctx.createLinearGradient(0, 0, 0, starCanavs.height);
    backgroundGradiant.addColorStop(0, '#0F2027');
    backgroundGradiant.addColorStop(1, '#203A43');

    function resizeStarCanvas() {
      starCanavs.width = UIcanvasDiv.getBoundingClientRect().width;
      starCanavs.height = UIcanvasDiv.getBoundingClientRect().height;
    }
    resizeStarCanvas();
    window.addEventListener('resize', () => {
      resizeStarCanvas();
      init();
    });


    
    let ticker = 0;
    let randomSpwanRate = 150;
    function animateStar() {
      requestAnimationFrame(animateStar);
      ctx.fillStyle = backgroundGradiant;
      ctx.fillRect(0, 0, starCanavs.width, starCanavs.height);


      ctx.save();
      ctx.shadowColor = '#E3EAEF';
      ctx.shadowBlur = 30;
      ctx.fillStyle = '#182028';
      ctx.fillRect(0, starCanavs.height-groundHeight, starCanavs.width, groundHeight);
      ctx.restore();

      ticker++;
      if (ticker % randomSpwanRate == 0) {
        let r = 12;
        let x = Math.random() * (starCanavs.width - 2 * r) + r;
        let y = -100;
        starsArray.push(new Star(x, y, r));
        randomSpwanRate = randomIntFromRange(150, 250);
        ticker = 0;
      }

      starsArray.forEach((star, index) => {
        star.update()
        if (star.r == 0)
            starsArray.splice(index, 1);
      });

      miniStarsArray.forEach((star, index) => {
        star.update();
        if (star.ttl == 0)
            miniStarsArray.splice(index, 1);
      });

      backgroundStarsArray.forEach(star => {
        star.update();
        if (star.shadowBlur >= 100) star.shadowBlur = 0;
      });

      moonArray.forEach(moon => moon.update());
      miniMoonArray.forEach(ele => ele.draw());
    }
    init();
    animateStar();
  }
}


export { starShowerFun, groundHeight };