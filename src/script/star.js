
import randomIntFromRnage from './utils';
import { groundHeight } from './animate_star';

let starCanvas;
let ctx;
if ( document.querySelector('.home-canvas') ) {
    starCanvas = document.querySelector('.home-canvas');
    ctx = starCanvas.getContext('2d');
}

function Star(x, y, r) {
  this.x = x;
  this.y = y;
  this.r = r;
  this.velocity = {
    x: Math.random() - .5 * 10,
    y: Math.random() * 3 
  };
  this.friction = .8;
  this.gravity = .6;
}

Star.prototype.draw = function() {
  ctx.save();
  ctx.beginPath();
  ctx.arc(this.x, this.y, this.r, 0, Math.PI*2, false);
  ctx.fillStyle = '#E3EAEF';
  ctx.shadowColor = '#E3EAEF';
  ctx.shadowBlur = 20;
  ctx.fill();
  ctx.restore();
};

Star.prototype.update = function() {
  this.draw();
  if (this.x + this.r + this.velocity.x >= starCanvas.width || this.x - this.r <= 0) {
      this.velocity.x = -this.velocity.x * this.friction;
  }
  if (this.y + this.r + this.velocity.y >= starCanvas.height - groundHeight) {
      this.velocity.y = -this.velocity.y * this.friction;
      this.shatter();
  } else {
    this.velocity.y += this.gravity;
  }

  this.x += this.velocity.x;
  this.y += this.velocity.y;
}
Star.prototype.shatter = function() {
  this.r -= 2;
  for (let i = 0; i < 6; i++) {
    miniStarsArray.push(new MiniStar(this.x, this.y, 2));
  }
}

function MiniStar(x, y, r) {
  Star.call(this, x, y, r);
  this.velocity = {
    x: (Math.random() - .5) * 4,
    y: Math.random() * 3 + 8
  }
  this.gravity = .4;
  this.friction = .9;
  this.opacity = 1;
  this.ttl = 100;
}


MiniStar.prototype.draw = function() {
  ctx.save();
  ctx.beginPath();
  ctx.arc(this.x, this.y, this.r, 0, Math.PI*2, false);
  ctx.fillStyle = `rgba(227, 234, 239, ${this.opacity})`;
  ctx.shadowColor = '#E3EAEF';
  ctx.shadowBlur = 20;
  ctx.fill();
  ctx.closePath();
  ctx.restore();
}
MiniStar.prototype.update = function() {
  this.draw();
  if (this.x + this.r + this.velocity.x >= starCanvas.width || this.x - this.r < 0)
      this.velocity.x = -this.velocity.x * this.friction;
  if (this.y + this.r + this.velocity.y >= starCanvas.height - groundHeight)
      this.velocity.y = -this.velocity.y * this.friction;
  else
      this.velocity.y += this.gravity;
  this.x += this.velocity.x;
  this.y += this.velocity.y;
  this.ttl -= 1;
  this.opacity -= 1/this.ttl;
}

function BackgroundStar(x, y, r) {
  this.x = x;
  this.y = y;
  this.r = r;
  this.shadowBlur = 0;
}

BackgroundStar.prototype.draw = function() {
    ctx.save();
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.r, 0, Math.PI*2, false);
    ctx.fillStyle = '#E3EAEF';
    ctx.shadowColor = '#E3EAEF';
    ctx.shadowBlur = this.shadowBlur;
    ctx.fill();
    ctx.closePath();
    ctx.restore();
}
BackgroundStar.prototype.update = function() {
  this.draw();
  this.shadowBlur += 1;
}


function Moon(x, y, r) {
  this.x = x;
  this.y = y;
  this.r = r;
}

Moon.prototype.draw = function() {
  ctx.save();
  ctx.beginPath();
  ctx.arc(this.x, this.y, this.r, 0, Math.PI*2, false);
  ctx.fillStyle = '#E3EAEF';
  ctx.shadowColor = '#E3EAEF';
  ctx.shadowBlur = 40;
  ctx.fill();
  ctx.restore();
}

Moon.prototype.update = function() {
  this.draw();
}

function MiniMoon(x, y, r) {
  this.x = x;
  this.y = y;
  this.r = r;
}
MiniMoon.prototype.draw = function() {
  ctx.beginPath();
  ctx.arc(this.x, this.y, this.r, 0, Math.PI*2, false);
  ctx.fillStyle = `rgba(199, 213, 223, 0.822)`;
  ctx.fill();
}


let starsArray;
let miniStarsArray;
let backgroundStarsArray;
let moonArray;
let miniMoonArray;

function init() {
  starsArray = [];
  miniStarsArray = [];
  backgroundStarsArray = [];
  moonArray = [];
  miniMoonArray = [];


  for (let i=0; i < 30; i++) {
    let r = Math.random() + 2;
    let x = randomIntFromRnage(r, starCanvas.width - r);
    let y = Math.random() * starCanvas.height / 4;
    backgroundStarsArray.push(new BackgroundStar(x, y, r));
  }

  for (let i = 0; i < 1; i++) {
    let r = 60;
    let x = 30;
    let y = 30;
    moonArray.push(new Moon(x, y, r));
  }

  miniMoonArray.push(new MiniMoon(30+20, 30+10, 5));
  miniMoonArray.push(new MiniMoon(30-20, 30+20, 5));
  miniMoonArray.push(new MiniMoon(30+5, 30-20, 10));
}
export { Star, init, starsArray, miniStarsArray, backgroundStarsArray, moonArray, miniMoonArray };