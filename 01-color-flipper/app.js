const colors = ['green', 'red', 'rgba(150,75,0)', '#FFFF00'];

const btn = document.querySelector('#btn');
const bgcolor = document.querySelector('#bgcolor');

// add event listener
btn.addEventListener('click', function () {
  const body = document.querySelector('body');
  let colorSelector = Math.floor(Math.random() * 10) % colors.length;
  body.style.backgroundColor = colors[colorSelector];
  bgcolor.textContent = colors[colorSelector];
});
