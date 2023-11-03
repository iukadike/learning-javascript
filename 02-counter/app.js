// const decrease = document.querySelector('#dcr');
// const reset = document.querySelector('#rst');
// const increase = document.querySelector('#inc');

// // decrease the counter
// decrease.addEventListener('click', function () {
//   const counter = document.querySelector('#value');
//   counter.textContent = parseInt(counter.textContent) - 1;
//   checkValue(counter);
// });

// // reset the counter
// // trying out arrow function ;)
// reset.addEventListener('click', () => {
//   document.querySelector('#value').textContent = 0;
//   checkValue(document.querySelector('#value'));
// });

// // increase the counter
// // practicing more arrow function because why not? ;)
// increase.addEventListener('click', () => {
//   const counter = document.querySelector('#value');
//   counter.textContent = parseInt(counter.textContent) + 1;
//   checkValue(counter);
// });

const btns = document.querySelectorAll('.btn');
const counter = document.querySelector('#value');

// practicing array methods iterators
// also trying out arrow function ;)
btns.forEach((btn) =>
  btn.addEventListener('click', (e) => {
    if (e.currentTarget.id === 'dcr') {
      counter.textContent = parseInt(counter.textContent) - 1;
    }
    if (e.currentTarget.id === 'inc') {
      counter.textContent = parseInt(counter.textContent) + 1;
    }
    if (e.currentTarget.id === 'rst') {
      counter.textContent = 0;
    }
    checkValue();
  })
);

// conditional to check the value of counter
// and apply the correct coloring
checkValue = function () {
  let value = parseInt(counter.textContent);
  if (value < 0) {
    counter.style.color = 'red';
  }
  if (value > 0) {
    counter.style.color = 'green';
  }
  if (value === 0) {
    counter.style.color = 'unset';
  }
};
