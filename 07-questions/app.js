// traversing the dom
/*
const btns = document.querySelectorAll('.question-btn');

btns.forEach((btn) =>
  btn.addEventListener('click', () => {
    question = btn.parentElement.parentElement;
    question.classList.toggle('show-text');
  })
);
 */

/***************************************
 *  using selectors inside the element  *
 ***************************************/

const questions = document.querySelectorAll('.question');

questions.forEach((question) => {
  btn = question.querySelector('.question-btn');
  btn.addEventListener('click', () => {
    checkCurrent(question);
    question.classList.toggle('show-text');
  });
});

// making sure that at most one item is expanded
checkCurrent = (selected) => {
  questions.forEach((item) => {
    if (item !== selected) {
      item.classList.remove('show-text');
    }
  });
};
