/* кнопки */


  let blockAnimation = anime ({
    targets: '.main__section__2',
    translateX: 210,
    autoplay: false,
    duration: 1000,

  })
  let iconBtn = document.getElementById('button')
  iconBtn.onclick = blockAnimation.play


let objects = document.querySelector('.main__section__4');
let button2 = document.querySelector('.button__2');
objects.style.display = 'none'

button2.addEventListener("click",      function() {

   if(objects.style.display == 'none')  objects.style.display = 'flex';
   else objects.style.display = 'none'

 });


let oneAnimation = document.querySelector('.main__section__6');
let button1 = document.querySelector('.button__1');
oneAnimation.style.display = 'none'

button1.addEventListener("click",      function() {

   if(oneAn.style.display == 'none')  oneAn.style.display = 'flex';
   else oneAn.style.display = 'none'

 });


let pullAnimation = document.querySelector('.main__section__5');
let button3 = document.querySelector('.button__3');
pullAnimation.style.display = 'none'

button3.addEventListener("click",      function() {

   if(pullAnimation.style.display == 'none')  pullAnimation.style.display = 'flex';
   else pullAnimation.style.display = 'none'

 });


let chatAnimation = anime ({
  targets: '.main__section__1',
  translateY: 225,
  autoplay: false,
  duration: 1000,

})
let chatBtn = document.getElementById('chat')
chatBtn.onclick = chatAnimation.play

let burgerAnimation = anime ({
  targets: '.main__section__3',
  translateY: -140,
  autoplay: false,
  duration: 1000,

})
let burgerBtn = document.getElementById('burger')
burgerBtn.onclick = burgerAnimation.play



/* жесткий экран */
let haedcore = document.querySelector('.main__section__8');
let button4 = document.querySelector('.button__4');
haedcore.style.display = 'none'

button4.addEventListener("click",      function() {

   if(haedcore.style.display == 'none')  haedcore.style.display = 'flex';
   else haedcore.style.display = 'none'

 });

let slow = document.querySelector('.main__section__7');
let button4_1 = document.querySelector('.button__4');
slow.style.display = 'flex'

button4_1.addEventListener("click",      function() {

   if(slow.style.display == 'flex')  slow.style.display = 'none';
   else slow.style.display = 'flex'

 });
