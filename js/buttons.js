/* кнопки */
let block = document.querySelector('.main__section__2');
let button = document.querySelector('.main__section__2__div__img');
block.style.display = 'none'

button.addEventListener("click",      function() {

    if(block.style.display == 'none')  block.style.display = 'block';
    else block.style.display = 'none'

  });


let objects = document.querySelector('.main__section__4');
let button2 = document.querySelector('.button__2');
objects.style.display = 'none'

button2.addEventListener("click",      function() {

   if(objects.style.display == 'none')  objects.style.display = 'flex';
   else objects.style.display = 'none'

 });

let wheel = document.querySelector('.wheel__1');
let button1 = document.querySelector('.button__1');
wheel.style.display = 'none'

button1.addEventListener("click",      function() {

   if(wheel.style.display == 'none')  wheel.style.display = 'flex';
   else wheel.style.display = 'none'

 });

let pull = document.querySelector('.main__section__5');
let button3 = document.querySelector('.button__3');
pull.style.display = 'none'

button3.addEventListener("click",      function() {

   if(pull.style.display == 'none')  pull.style.display = 'flex';
   else pull.style.display = 'none'

 });

let chatAnimation = anime ({
  targets: '.main__section__1',
  translateY: 500,
  autoplay: false,
  duration: 1000,
})
let chatBtn = document.getElementById('chat')
chatBtn.onclick = chatAnimation.play
