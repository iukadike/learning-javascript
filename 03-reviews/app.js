// source images from google reviews data
const reviews = [
  {
    id: 1,
    name: 'susan smith',
    job: 'web developer',
    img: 'https://www.course-api.com/images/people/person-1.jpeg',
    text: "I'm baby meggings twee health goth +1. Bicycle rights tumeric chartreuse before they sold out chambray pop-up. Shaman humblebrag pickled coloring book salvia hoodie, cold-pressed four dollar toast everyday carry",
  },
  {
    id: 2,
    name: 'anna johnson',
    job: 'web designer',
    img: 'https://www.course-api.com/images/people/person-2.jpeg',
    text: 'Helvetica artisan kinfolk thundercats lumbersexual blue bottle. Disrupt glossier gastropub deep v vice franzen hell of brooklyn twee enamel pin fashion axe.photo booth jean shorts artisan narwhal.',
  },
  {
    id: 3,
    name: 'peter jones',
    job: 'intern',
    img: 'https://www.course-api.com/images/people/person-4.jpeg',
    text: 'Sriracha literally flexitarian irony, vape marfa unicorn. Glossier tattooed 8-bit, fixie waistcoat offal activated charcoal slow-carb marfa hell of pabst raclette post-ironic jianbing swag.',
  },
  {
    id: 4,
    name: 'bill anderson',
    job: 'the boss',
    img: 'https://www.course-api.com/images/people/person-3.jpeg',
    text: 'Edison bulb put a bird on it humblebrag, marfa pok pok heirloom fashion axe cray stumptown venmo actually seitan. VHS farm-to-table schlitz, edison bulb pop-up 3 wolf moon tote bag street art shabby chic. ',
  },
];

// select properties
const author = document.querySelector('#author');
const job = document.querySelector('#job');
const image = document.querySelector('#person-img');
const info = document.querySelector('#info');

// set defaults when the window initially loads
window.addEventListener('load', () => {
  author.textContent = reviews[0].name;
  job.textContent = reviews[0].job;
  image.setAttribute('src', reviews[0].img);
  info.textContent = reviews[0].text;
});

// function to select reviews
showReview = (tracker) => {
  let item = reviews[tracker];
  author.textContent = item.name;
  job.textContent = item.job;
  image.setAttribute('src', reviews[tracker].img);
  info.textContent = reviews[tracker].text;
};

// configure previous, next, and random buttons
const btns = document.querySelectorAll('button');
let tracker = 0;

btns.forEach((btn) =>
  btn.addEventListener('click', (e) => {
    // configure the next button
    if (e.currentTarget.className === 'next-btn') {
      upperBounds(tracker) ? (tracker = 0) : tracker++;
      showReview(tracker);
    }
    // configure the previous button
    if (e.currentTarget.className === 'prev-btn') {
      lowerBounds(tracker) ? (tracker = reviews.length - 1) : tracker--;
      showReview(tracker);
    }
    // configure the random button
    if (e.currentTarget.className === 'random-btn') {
      let randomReview = Math.floor(Math.random() * reviews.length);
      tracker = sameReview(randomReview);
      showReview(tracker);
    }
  })
);

// functions to check upper and lower boundaries
const upperBounds = (n) => parseInt(n) === reviews.length - 1;
const lowerBounds = (n) => parseInt(n) === 0;

// function to avoid randomizing same review
const sameReview = (randomReview) => {
  while (randomReview === tracker) {
    randomReview = Math.floor(Math.random() * reviews.length);
  }
  return randomReview;
};
