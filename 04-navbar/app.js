// set variable for links and toggle-bar
const links = document.querySelector('.links');
const toggleBar = document.querySelector('.nav-toggle');

// set an event listerner for when nav-toggle is clicked
// toggleBar.addEventListener('click', () => {
//   links.classList.contains('show-links')
//     ? links.classList.remove('show-links')
//     : links.classList.add('show-links');

// set an event listerner for when nav-toggle is clicked - revised
toggleBar.addEventListener('click', () => links.classList.toggle('show-links'));
