!function(t){var e={};function i(n){if(e[n])return e[n].exports;var o=e[n]={i:n,l:!1,exports:{}};return t[n].call(o.exports,o,o.exports,i),o.l=!0,o.exports}i.m=t,i.c=e,i.d=function(t,e,n){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},i.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)i.d(n,o,function(e){return t[e]}.bind(null,o));return n},i.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="",i(i.s=0)}([function(t,e,i){"use strict";function n(t,e){for(var i=0;i<e.length;i++){var n=e[i];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}i.r(e);var o=new WeakMap,r=new WeakMap,a=new WeakMap,s=new WeakMap,h=new WeakMap,c=new WeakMap,u=new WeakMap,l=new WeakMap,d=new WeakMap,f=new WeakMap,y=new WeakMap,g=function(){function t(e,i,n,g,v,m){var p=this;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),o.set(this,e),r.set(this,i),a.set(this,n),c.set(this,g),u.set(this,v),h.set(this,20*Math.random()+30),s.set(this,a.get(this)),l.set(this,m),y.set(this,"\n        hsla(".concat(Math.round(240*Math.random()),", \n            ").concat(Math.round(100*Math.random()),"%,\n            ").concat(Math.round(100*Math.random()),"%,\n            ").concat(Math.random(),")\n  ")),d.set(this,function(){l.get(p).beginPath(),l.get(p).arc(o.get(p),r.get(p),a.get(p),0,2*Math.PI,!1),l.get(p).fillStyle=y.get(p),l.get(p).fill()}),f.set(this,function(t){d.get(p)(),p.updateBounding(t),o.set(p,o.get(p)+c.get(p)),r.set(p,r.get(p)+u.get(p))})}return function(t,e,i){e&&n(t.prototype,e),i&&n(t,i)}(t,[{key:"updateBounding",value:function(t){(o.get(this)+a.get(this)>t.width||o.get(this)-a.get(this)<0)&&c.set(this,-1*c.get(this)),(r.get(this)+a.get(this)>t.height||r.get(this)-a.get(this)<0)&&u.set(this,-1*u.get(this))}},{key:"updateMenu",get:function(){if(document.querySelector(".menu-nav")){var t=document.querySelector(".menu-nav");return f.get(this)(t.getBoundingClientRect())}}},{key:"updateAbout",get:function(){if(document.querySelector("#about")){var t=document.querySelector("#about");return f.get(this)(t.getBoundingClientRect())}}},{key:"x",get:function(){return o.get(this)}},{key:"y",get:function(){return r.get(this)}},{key:"r",get:function(){return a.get(this)},set:function(t){a.set(this,t)}},{key:"maxR",get:function(){return h.get(this)}},{key:"minR",get:function(){return s.get(this)}}]),t}();var v,m,p,w,x,M,E,S={x:void 0,y:void 0},b=[],B=[];function C(t,e){t.width=e.width,t.height=e.height}function R(t,e,i,n){for(var o=0;o<e;o++){var r=Math.random()+1,a=Math.random()*(i.width-2*r)+r,s=Math.random()*(i.height-2*r)+r,h=3*(Math.random()-.5),c=1.5*(Math.random()-.5);t.push(new g(a,s,r,h,c,n))}}function q(t,e){return Math.floor(Math.random()*(e-t+1)-t)}function k(t,e,i){this.x=t,this.y=e,this.r=i,this.velocity={x:Math.random()-5,y:3*Math.random()},this.friction=.8,this.gravity=.6}function P(t,e,i){k.call(this,t,e,i),this.velocity={x:4*(Math.random()-.5),y:3*Math.random()+8},this.gravity=.4,this.friction=.9,this.opacity=1,this.ttl=100}function L(t,e,i){this.x=t,this.y=e,this.r=i,this.shadowBlur=0}function A(t,e,i){this.x=t,this.y=e,this.r=i}function F(t,e,i){this.x=t,this.y=e,this.r=i}function W(){p=[],w=[],x=[],M=[],E=[];for(var t=0;t<30;t++){var e=Math.random()+2,i=q(e,v.width-e),n=Math.random()*v.height/4;x.push(new L(i,n,e))}for(var o=0;o<1;o++){M.push(new A(30,30,60))}E.push(new F(50,40,5)),E.push(new F(10,50,5)),E.push(new F(35,10,10))}document.querySelector(".home-canvas")&&(v=document.querySelector(".home-canvas"),m=v.getContext("2d")),k.prototype.draw=function(){m.save(),m.beginPath(),m.arc(this.x,this.y,this.r,0,2*Math.PI,!1),m.fillStyle="#E3EAEF",m.shadowColor="#E3EAEF",m.shadowBlur=20,m.fill(),m.restore()},k.prototype.update=function(){this.draw(),(this.x+this.r+this.velocity.x>=v.width||this.x-this.r<=0)&&(this.velocity.x=-this.velocity.x*this.friction),this.y+this.r+this.velocity.y>=v.height-j?(this.velocity.y=-this.velocity.y*this.friction,this.shatter()):this.velocity.y+=this.gravity,this.x+=this.velocity.x,this.y+=this.velocity.y},k.prototype.shatter=function(){this.r-=2;for(var t=0;t<6;t++)w.push(new P(this.x,this.y,2))},P.prototype.draw=function(){m.save(),m.beginPath(),m.arc(this.x,this.y,this.r,0,2*Math.PI,!1),m.fillStyle="rgba(227, 234, 239, ".concat(this.opacity,")"),m.shadowColor="#E3EAEF",m.shadowBlur=20,m.fill(),m.closePath(),m.restore()},P.prototype.update=function(){this.draw(),(this.x+this.r+this.velocity.x>=v.width||this.x-this.r<0)&&(this.velocity.x=-this.velocity.x*this.friction),this.y+this.r+this.velocity.y>=v.height-j?this.velocity.y=-this.velocity.y*this.friction:this.velocity.y+=this.gravity,this.x+=this.velocity.x,this.y+=this.velocity.y,this.ttl-=1,this.opacity-=1/this.ttl},L.prototype.draw=function(){m.save(),m.beginPath(),m.arc(this.x,this.y,this.r,0,2*Math.PI,!1),m.fillStyle="#E3EAEF",m.shadowColor="#E3EAEF",m.shadowBlur=this.shadowBlur,m.fill(),m.closePath(),m.restore()},L.prototype.update=function(){this.draw(),this.shadowBlur+=1},A.prototype.draw=function(){m.save(),m.beginPath(),m.arc(this.x,this.y,this.r,0,2*Math.PI,!1),m.fillStyle="#E3EAEF",m.shadowColor="#E3EAEF",m.shadowBlur=40,m.fill(),m.restore()},A.prototype.update=function(){this.draw()},F.prototype.draw=function(){m.beginPath(),m.arc(this.x,this.y,this.r,0,2*Math.PI,!1),m.fillStyle="rgba(199, 213, 223, 0.822)",m.fill()};var j=50;var O=document.querySelector(".menu-btn"),I=document.querySelector(".menu"),_=document.querySelector(".menu-branding"),z=document.querySelector(".menu-nav"),T=document.querySelectorAll(".nav-item"),X=!1;O.addEventListener("click",function(){X?(O.classList.remove("close"),I.classList.remove("show"),z.classList.remove("show"),_.classList.remove("show"),T.forEach(function(t){t.classList.remove("show")}),X=!1):(O.classList.add("close"),I.classList.add("show"),z.classList.add("show"),_.classList.add("show"),T.forEach(function(t){t.classList.add("show")}),X=!0)}),function(){if(document.querySelector("#about")){var t=document.querySelector("#about"),e=document.querySelector(".about-canvas"),i=e.getContext("2d");e.addEventListener("mousemove",function(t){S.x=t.offsetX,S.y=t.offsetY}),C(e,t.getBoundingClientRect()),window.addEventListener("resize",function(){C(e,t.getBoundingClientRect()),R(B=[],400,t.getBoundingClientRect(),i)}),R(B,400,t.getBoundingClientRect(),i),function e(){requestAnimationFrame(e),i.clearRect(0,0,t.getBoundingClientRect().width,t.getBoundingClientRect().height),B.forEach(function(t){t.updateAbout,S.x-t.x<50&&S.x-t.x>-50&&S.y-t.y<50&&S.y-t.y>-50&&t.r<t.maxR?t.r+=1:t.r>t.minR&&(t.r-=1)})}()}if(document.querySelector(".menu-canvas")){var n=document.querySelector(".menu-nav"),o=document.querySelector(".menu-canvas"),r=document.querySelector(".menu-canvas").getContext("2d");o.addEventListener("mousemove",function(t){S.x=t.offsetX,S.y=t.offsetY}),C(o,n.getBoundingClientRect()),window.addEventListener("resize",function(){C(o,n.getBoundingClientRect()),R(b=[],400,n.getBoundingClientRect(),r)}),R(b,400,n.getBoundingClientRect(),r),function t(){requestAnimationFrame(t),r.clearRect(0,0,n.getBoundingClientRect().width,n.getBoundingClientRect().height),b.forEach(function(t){t.updateMenu,S.x-t.x<50&&S.x-t.x>-50&&S.y-t.y<50&&S.y-t.y>-50&&t.r<t.maxR?t.r+=1:t.r>t.minR&&(t.r-=1)})}()}}(),function(){if(document.querySelector(".home-canvas")){var t=function(){i.width=e.getBoundingClientRect().width,i.height=e.getBoundingClientRect().height},e=document.querySelector(".home-canvas-div"),i=document.querySelector(".home-canvas"),n=i.getContext("2d"),o=n.createLinearGradient(0,0,0,i.height);o.addColorStop(0,"#0F2027"),o.addColorStop(1,"#203A43"),t(),window.addEventListener("resize",function(){t(),W()});var r=0,a=150;W(),function t(){if(requestAnimationFrame(t),n.fillStyle=o,n.fillRect(0,0,i.width,i.height),n.save(),n.shadowColor="#E3EAEF",n.shadowBlur=30,n.fillStyle="#182028",n.fillRect(0,i.height-j,i.width,j),n.restore(),++r%a==0){var e=Math.random()*(i.width-24)+12;p.push(new k(e,-100,12)),a=q(150,250),r=0}p.forEach(function(t,e){t.update(),0==t.r&&p.splice(e,1)}),w.forEach(function(t,e){t.update(),0==t.ttl&&w.splice(e,1)}),x.forEach(function(t){t.update(),t.shadowBlur>=100&&(t.shadowBlur=0)}),M.forEach(function(t){return t.update()}),E.forEach(function(t){return t.draw()})}()}}()}]);