const menu = [
  {
    id: 1,
    title: 'buttermilk pancakes',
    category: 'breakfast',
    price: 15.99,
    img: './images/item-1.jpeg',
    desc: `Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Inventore ex fugiat placeat consequuntur quos obcaecati.`,
  },
  {
    id: 2,
    title: 'diner double',
    category: 'lunch',
    price: 13.99,
    img: './images/item-2.jpeg',
    desc: `Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Inventore ex fugiat placeat consequuntur quos obcaecati.`,
  },
  {
    id: 3,
    title: 'godzilla milkshake',
    category: 'shakes',
    price: 6.99,
    img: './images/item-3.jpeg',
    desc: `Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Inventore ex fugiat placeat consequuntur quos obcaecati.`,
  },
  {
    id: 4,
    title: 'country delight',
    category: 'breakfast',
    price: 20.99,
    img: './images/item-4.jpeg',
    desc: `Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Inventore ex fugiat placeat consequuntur quos obcaecati.`,
  },
  {
    id: 5,
    title: 'egg attack',
    category: 'lunch',
    price: 22.99,
    img: './images/item-5.jpeg',
    desc: `Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Inventore ex fugiat placeat consequuntur quos obcaecati.`,
  },
  {
    id: 6,
    title: 'oreo dream',
    category: 'shakes',
    price: 18.99,
    img: './images/item-6.jpeg',
    desc: `Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Inventore ex fugiat placeat consequuntur quos obcaecati.`,
  },
  {
    id: 7,
    title: 'bacon overflow',
    category: 'breakfast',
    price: 8.99,
    img: './images/item-7.jpeg',
    desc: `Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Inventore ex fugiat placeat consequuntur quos obcaecati.`,
  },
  {
    id: 8,
    title: 'american classic',
    category: 'lunch',
    price: 12.99,
    img: './images/item-8.jpeg',
    desc: `Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Inventore ex fugiat placeat consequuntur quos obcaecati.`,
  },
  {
    id: 9,
    title: 'quarantine buddy',
    category: 'shakes',
    price: 16.99,
    img: './images/item-9.jpeg',
    desc: `Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Inventore ex fugiat placeat consequuntur quos obcaecati.`,
  },
  {
    id: 10,
    title: 'steak dinner',
    category: 'dinner',
    price: 39.99,
    img: './images/item-10.jpeg',
    desc: `Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Inventore ex fugiat placeat consequuntur quos obcaecati.`,
  },
];

const menuItems = document.querySelector('.section-center');
const btns = document.querySelector('.btn-container');
let filterBtns;

// when page content loads
window.addEventListener('DOMContentLoaded', () => {
  // display the buttons
  displayButtons();

  // display the menu
  menuItems.innerHTML = displayMenu(menu);
});

// display button items
// get the categories for the buttons
const displayButtons = () => {
  let categories = menu.reduce(
    (value, item) => {
      if (!value.includes(item.category)) {
        value.push(item.category);
      }
      return value;
    },
    ['all']
  );

  // display the filter buttons
  const categoryBtn = categories
    .map((item) => {
      return `<li class="btn filter-btn" data-id=${item}>${item}</li>`;
    })
    .join('');
  btns.innerHTML = categoryBtn;

  // display filtered menus
  // also practice accesing dataset items in Javascript
  filterBtns = btns.querySelectorAll('.filter-btn');

  filterBtns.forEach((btn) => {
    btn.addEventListener('click', (e) => {
      let filteredMenu = menu.filter(
        (item) => item.category === e.currentTarget.dataset.id
      );
      btn.textContent === 'all'
        ? (menuItems.innerHTML = displayMenu(menu))
        : (menuItems.innerHTML = displayMenu(filteredMenu));
    });
  });
};

// display menu items
// return populated HTLM content via map function
const displayMenu = (showMenu) => {
  let mapMenu = showMenu.map((item) => {
    return `<!-- item ${item.id} -->
        <div class="menu-item">
          <img
            src="${item.img}"
            alt="${item.title}"
            class="photo"
          />
          <div class="item-info">
            <header>
              <h4>${item.title}</h4>
              <h4 class="price">$${item.price}</h4>
            </header>
            <p class="item-text">${item.desc}</p>
          </div>
        </div>`;
  });
  // turn the HTML array to HTML string
  mapMenu = mapMenu.join('');
  return mapMenu;
};
