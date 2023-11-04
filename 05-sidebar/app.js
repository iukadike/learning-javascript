// Solution 1

/* const sidebarNav = document.querySelector('.sidebar-toggle');
const sidebar = document.querySelector('.sidebar');
const closeBtn = document.querySelector('.close-btn');

sidebarNav.addEventListener('click', () => {
  sidebar.classList.toggle('show-sidebar');
});

closeBtn.addEventListener('click', () => {
  sidebar.classList.toggle('show-sidebar');
});
 */

// Solution 2 - practicing array iterators

const btns = document.querySelectorAll('button');
const sidebar = document.querySelector('.sidebar');

btns.forEach((btn) =>
  btn.addEventListener('click', () => {
    sidebar.classList.toggle('show-sidebar');
  })
);
