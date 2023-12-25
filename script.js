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
cat.ontouchstart = function(e) {
  tlc.reverse();
};
cat.ontouchend = function(e) {
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
  gift.ontouchstart = () => {
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

