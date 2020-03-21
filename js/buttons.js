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


let button1Animation = anime ({

})
let wheel = document.querySelector('.wheel');
let button1 = document.querySelector('.button__1');
wheel.style.display = 'none'

button1.addEventListener("click",      function() {

   if(wheel.style.display == 'none') wheel.style.display = 'flex';
   else wheel.style.display = 'none'

 });
