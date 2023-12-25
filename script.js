const cat = document.getElementById("cat"),
  shadowBack = document.getElementsByClassName("shadow-2"),
  shadowMed = document.getElementsByClassName("shadow-1"),
  tlc = new TimelineLite();
tl = new TimelineLite();

tlc
  .fromTo(cat, 1, {opacity:1, y:60}, {opacity:1, y:0, delay:2, ease:Power4.easeOut});

tl
  .fromTo(shadowBack, 2, {opacity:0}, {opacity:.5, repeat:-1, yoyo:true, delay:.5})
  .fromTo(shadowMed, 2, {opacity:.25}, {opacity:.5, repeat:-1, yoyo:true,})


cat.onmouseover = function(e) {
  tlc.reverse();
};
cat.onmouseout = function(e) {
  tlc.play();
};


const gifts = document.querySelectorAll('#gifts > *');
gifts.forEach((gift) => {
  gift.onmouseenter = () => {
    // 创建一个晃动动画
    const tl = gsap.timeline({ repeat: 3, yoyo: true }); // repeat表示重复次数，这里设置为3次，yoyo表示来回播放

    // 添加晃动关键帧
    tl.to(gift, { duration: 0.1, rotation: -5 })
      .to(gift, { duration: 0.1, rotation: 5 })
      .to(gift, { duration: 0.1, rotation: -5 })
      .to(gift, { duration: 0.1, rotation: 5 })
      .to(gift, { duration: 0.1, rotation: 0 });

    // 开始播放晃动动画
    tl.play();
  }
});


// Snow from https://codepen.io/radum/pen/xICAB

(function () {

  var COUNT = 300;
  var masthead = document.querySelector('.container');
  var canvas = document.createElement('canvas');
  var ctx = canvas.getContext('2d');
  var width = masthead.clientWidth;
  var height = masthead.clientHeight;
  var i = 0;
  var active = false;

  function onResize() {
    width = masthead.clientWidth;
    height = masthead.clientHeight;
    canvas.width = width;
    canvas.height = height;
    ctx.fillStyle = '#FFF';

    var wasActive = active;
    active = width > 600;

    if (!wasActive && active)
      requestAnimFrame(update);
  }

  var Snowflake = function () {
    this.x = 0;
    this.y = 0;
    this.vy = 0;
    this.vx = 0;
    this.r = 0;

    this.reset();
  }

  Snowflake.prototype.reset = function() {
    this.x = Math.random() * width;
    this.y = Math.random() * -height;
    this.vy = 1 + Math.random() * 3;
    this.vx = 0.5 - Math.random();
    this.r = 1 + Math.random() * 2;
    this.o = 0.5 + Math.random() * 0.5;
  }

  canvas.style.position = 'absolute';
  canvas.style.left = canvas.style.top = '0';

  var snowflakes = [], snowflake;
  for (i = 0; i < COUNT; i++) {
    snowflake = new Snowflake();
    snowflake.reset();
    snowflakes.push(snowflake);
  }

  function update() {

    ctx.clearRect(0, 0, width, height);

    if (!active)
      return;

    for (i = 0; i < COUNT; i++) {
      snowflake = snowflakes[i];
      snowflake.y += snowflake.vy;
      snowflake.x += snowflake.vx;

      ctx.globalAlpha = snowflake.o;
      ctx.beginPath();
      ctx.arc(snowflake.x, snowflake.y, snowflake.r, 0, Math.PI * 2, false);
      ctx.closePath();
      ctx.fill();

      if (snowflake.y > height) {
        snowflake.reset();
      }
    }

    requestAnimFrame(update);
  }

  window.requestAnimFrame = (function(){
    return  window.requestAnimationFrame       ||
      window.webkitRequestAnimationFrame ||
      window.mozRequestAnimationFrame    ||
      function( callback ){
        window.setTimeout(callback, 1000 / 60);
      };
  })();

  onResize();
  window.addEventListener('resize', onResize, false);

  masthead.appendChild(canvas);
})();
