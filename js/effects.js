/* burger */
// let yellow = document.querySelector('.blink__1');
// let puller = document.querySelector('.main__section__5__img__2');
// yellow.style.display = 'none'
//
// puller.addEventListener("click",      function() {
//
//    if(yellow.style.display == 'none')  yellow.style.display = 'flex';
//    else yellow.style.display = 'none'
//
//  });
//
//  let pull = document.querySelector('.main__section__5');
//  let button3 = document.querySelector('.button__3');
//  pull.style.display = 'none'
//
//  button3.addEventListener("click",      function() {
//
//     if(pull.style.display == 'none')  pull.style.display = 'flex';
//     else pull.style.display = 'none'
//
//   });

/* text */
const prefix = "|";
const skills = [
  "45.78.34",
  "97.23.09",
  "09.23",
  "97.35.89",
  "83.64.01",
  "03.956",
  "83.69.34",
  "93.83.58",
  "93.78.62"
].map(s => `${s}.`);
const delay = 2;
const step = 1;
const tail = 5;
const timeout = 90;

const p = document.getElementById("class");
document.body.appendChild(p);

const colors = ["lime", "lightgrey"];
function getRandomColor() {
  return colors[Math.floor(Math.random() * colors.length)];
}
function getRandomChar() {
  return String.fromCharCode(Math.random() * (127 - 40) + 40);
}
function getRandomColoredString(n) {
  const fragment = document.createDocumentFragment();
  for (let i = 0; i < n; i++) {
    const char = document.createElement("span");
    char.textContent = getRandomChar();
    char.style.color = getRandomColor();
    fragment.appendChild(char);
  }
  return fragment;
}

const $ = {
  text: "",
  prefixP: -tail,
  skillI: 0,
  skillP: 0,
  direction: "forward",
  delay,
  step
};

function render() {
  const skill = skills[$.skillI];

  if ($.step) {
    $.step--;
  } else {
    $.step = step;
    if ($.prefixP < prefix.length) {
      if ($.prefixP >= 0) {
        $.text += prefix[$.prefixP];
      }
      $.prefixP++;
    } else {
      if ($.direction === "forward") {
        if ($.skillP < skill.length) {
          $.text += skill[$.skillP];
          $.skillP++;
        } else {
          if ($.delay) {
            $.delay--;
          } else {
            $.direction = "backward";
            $.delay = delay;
          }
        }
      } else {
        if ($.skillP > 0) {
          $.text = $.text.slice(0, -1);
          $.skillP--;
        } else {
          $.skillI = ($.skillI + 1) % skills.length;
          $.direction = "forward";
        }
      }
    }
  }

  p.textContent = $.text;
  p.appendChild(
    getRandomColoredString(
      $.prefixP < prefix.length
        ? Math.min(tail, tail + $.prefixP)
        : Math.min(tail, skill.length - $.skillP)
    )
  );
  setTimeout(render, timeout);
}
setTimeout(render, 500);
