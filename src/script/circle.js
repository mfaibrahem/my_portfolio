
const _x = new WeakMap();
const _y = new WeakMap();
const _r = new WeakMap();
const _minR = new WeakMap();
const _maxR = new WeakMap();
const _dx = new WeakMap();
const _dy = new WeakMap();
const _context = new WeakMap();
const _draw = new WeakMap();
const _update = new WeakMap();
const _color = new WeakMap();

class Circle {
  constructor(x, y, r, dx, dy, context) {
    _x.set(this, x);
    _y.set(this, y);
    _r.set(this, r);
    _dx.set(this, dx);
    _dy.set(this, dy);
    _maxR.set(this, Math.random()*20 + 30);
    _minR.set(this, _r.get(this));
    _context.set(this, context);
        
    _color.set(this, randomColor());

    _draw.set(this, () => {
      _context.get(this).beginPath();
      _context.get(this).arc(_x.get(this), _y.get(this), _r.get(this), 0, Math.PI*2, false);
      _context.get(this).fillStyle = _color.get(this);
      _context.get(this).fill();
    });

    _update.set(this, (ele) => {
      _draw.get(this)();
      this.updateBounding(ele);
      _x.set(this, _x.get(this)+_dx.get(this));
      _y.set(this, _y.get(this)+_dy.get(this));
    });
    
  }
  // getter
  get updateMenu() {
    if (document.querySelector('.menu-nav')) {
        const UImenuNav = document.querySelector('.menu-nav');
        return _update.get(this)(UImenuNav.getBoundingClientRect());
    }
  }
  get updateAbout() {
    if (document.querySelector('#about')) {
        const UIabout = document.querySelector('#about');
        return _update.get(this)(UIabout.getBoundingClientRect());
    }
  }

  get x() {
    return _x.get(this);
  }
  get y() {
    return _y.get(this);
  }
  get r() {
    return _r.get(this);
  }
  get maxR() {
    return _maxR.get(this);
  }
  get minR() {
    return _minR.get(this);
  }
  // setters
  set r(value) {
    _r.set(this, value);
  }
  
  // prototype public methods
  updateBounding(container) {
    if (_x.get(this)+_r.get(this) > container.width || _x.get(this)-_r.get(this) < 0)
        _dx.set(this, _dx.get(this)*-1);
    if (_y.get(this)+_r.get(this) > container.height || _y.get(this)-_r.get(this) < 0)
        _dy.set(this, _dy.get(this)*-1);
  }


}

function randomColor() {
  return `
        hsla(${Math.round(Math.random()*240)}, 
            ${Math.round(Math.random()*100)}%,
            ${Math.round(Math.random()*100)}%,
            ${Math.random()})
  `;
}



export { Circle };