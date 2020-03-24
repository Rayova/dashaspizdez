/* burger */
let yellow = document.querySelector('.blink__1');
let puller = document.querySelector('.main__section__5__img__2');
yellow.style.display = 'none'

puller.addEventListener("click",      function() {

   if(yellow.style.display == 'none')  yellow.style.display = 'flex';
   else yellow.style.display = 'none'

 });

 let pull = document.querySelector('.main__section__5');
 let button3 = document.querySelector('.button__3');
 pull.style.display = 'none'

 button3.addEventListener("click",      function() {

    if(pull.style.display == 'none')  pull.style.display = 'flex';
    else pull.style.display = 'none'

  });
