/* кнопки */
let block = document.querySelector('.main__section__2');
let button = document.querySelector('.main__section__2__div__img');
block.style.display = 'none'

button.addEventListener("click",      function() {

    if(block.style.display == 'none')  block.style.display = 'block';
    else block.style.display = 'none'

  });

// let rectangles = document.querySelector('.rectangles');
// let tool2 = document.querySelector('.tool_2');
// rectangles.style.display = 'none'
//
// tool2.addEventListener("click",      function() {
//    if(rectangles.style.display == 'none')  rectangles.style.display = 'block';
//    else rectangles.style.display = 'none
