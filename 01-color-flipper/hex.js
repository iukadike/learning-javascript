const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'A', 'B', 'C', 'D', 'E', 'F'];

const btn = document.querySelector('#btn');
const bgcolor = document.querySelector('#bgcolor');

// trying out arrow function ;)
let hexSelector = (hexIndex) => hex[hexIndex];

// add event listener
btn.addEventListener('click', function () {
  const body = document.querySelector('body');
  let colorSelector = '#';
  for (let i = 0; i < 6; i++) {
    let hexIndex = Math.floor(Math.random() * 100) % hex.length;
    colorSelector += hexSelector(hexIndex);
  }
  body.style.backgroundColor = colorSelector;
  bgcolor.textContent = colorSelector;
});
