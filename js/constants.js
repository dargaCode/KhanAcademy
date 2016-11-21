
const CONSTANTS = (function() {

  const PROJECTS = [
    {
      'name': 'This Portfolio Website',
      'type': 'Front-End',
      'tags': ['JavaScript', 'CSS', 'HTML',],
      'description': 'This work-in-progress website is intended to showcase my knowledge of JavaScript DOM manipulation, CSS, and Semantic HTML. Future iterations will include responsiveness, more interactivity, and mobile support.',
      'date': new Date('Oct 16 2016'),
      'imageUrl': './img/project-thumbnails/portfolio.jpg',
      'gitHubUrl': 'https://github.com/dargaCode/dargacode.github.io',
      'livePageUrl': '',
    },
    {
      'name': 'Apartment Description Highlights',
      'type': 'Back-End',
      'tags': ['JavaScript', 'Node.js',],
      'description': 'Given a long description of an apartment and a query string, generates a highlight snippet made from only relevant phrases. Uses an array of dictionary objects to map categories to relevant keywords.',
      'date': new Date('Sep 16 2016'),
      'imageUrl': './img/project-thumbnails/apartment.jpg',
      'gitHubUrl': 'https://github.com/dargaCode/ApartmentDescriptionHighlights',
      'livePageUrl': null,
    },
    {
      'name': 'RESTful Blog',
      'type': 'Back-End',
      'tags': ['JavaScript', 'Node.js', 'Express', 'EJS', 'MongoDB',],
      'description': 'Node/Express CRUD app using all 7 RESTful routes. HTML views are created server-side using templating, posts are added and removed from a MongoDB server, and sanitized HTML is used to render blog posts.',
      'date': new Date('May 23 2016'),
      'imageUrl': './img/project-thumbnails/blog.jpg',
      'gitHubUrl': 'https://github.com/dargaCode/UdemyRESTfulBlog',
      'livePageUrl': 'https://darga-restful-blog.herokuapp.com/blogs',
    },
    {
      'name': 'Color Match Game',
      'type': 'Front-End',
      'tags': ['JavaScript', 'CSS', 'HTML', 'LocalStorage',],
      'description': 'An early attempt at JavaScript DOM manipulation, and my first use of LocalStorage to save settings. The biggest challenge was organizing code for logic, events, and UI elements while still remaining readable.',
      'date': new Date('April 6 2016'),
      'imageUrl': './img/project-thumbnails/color-game.jpg',
      'gitHubUrl': 'https://github.com/dargaCode/UdemyColorMatchGame',
      'livePageUrl': 'http://dargacode.github.io/UdemyColorMatchGame/',
    },
    {
      'name': 'Animated Insertion Sort',
      'type': 'Command Line',
      'tags': ['C', 'Sorting', 'Command Line'],
      'description': 'I made three sorting programs in C which animated in the console. They were interesting exercises in generating random numbers, adding delays, rendering formatted text, and accepting program arguments.',
      'date': new Date('Oct 1 2015'),
      'imageUrl': './img/project-thumbnails/sort.jpg',
      'gitHubUrl': 'https://github.com/dargaCode/AnimatedInsertionSort',
      'livePageUrl': null,
    },
    {
      'name': 'Drag and Drop Book Shelf',
      'type': 'Front-End',
      'tags': ['JavaScript', 'Canvas', 'Processing.js', 'OOP',],
      'description': 'Originally written on Khan Academy, this old project is a personal favorite. I expanded the simple assignment ("Create an array of book objects") to include a drag and drop interface using a hierarchy of nine classes.',
      'date': new Date('Jul 31 2015'),
      'imageUrl': './img/project-thumbnails/bookshelf.jpg',
      'gitHubUrl': 'https://github.com/dargaCode/KhanBookShelf',
      'livePageUrl': 'http://dargacode.github.io/KhanBookShelf',
    },
  ];

  // 'revealing' module
  return {
    PROJECTS: PROJECTS,
  }

}());
