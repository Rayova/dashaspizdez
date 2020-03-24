/* колесо */
let wheelAnimation = anime ({
  targets: wheel1,
  rotate: [0, 360],
  easing: 'linear',
  duration: 50000,
  loop: true
});
let wheel1Animation = anime ({
  targets: wheel2,
  rotate: [0, 360],
  easing: 'linear',
  duration: 5000,
  loop: true
});
let wheel2Animation = anime ({
  targets: wheel3,
  rotate: [0, 180],
  easing: 'linear',
  duration: 8000,
  loop: true,
  translateY: 150
});
let wheel3Animation = anime ({
  targets: wheel4,
  rotate: [0, -360],
  easing: 'linear',
  duration: 20000,
  loop: true,
  translateX: 230
});
