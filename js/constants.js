
const CONSTANTS = (function() {

  const PROJECTS = [
   {
      'name': 'Book Shelf',
      'description': 'Expanded the project to include a drag and drop interface, using a hierarchy of 9 classes.',
      'date': new Date('Jul 31 2015'),
      'imageUrl': './img/project-thumbnails/bookshelf.png',
      'gitHubUrl': 'https://github.com/dargaCode/KhanBookShelf',
      'livePageUrl': 'http://dargacode.github.io/KhanBookShelf',
      'khanUrl': 'https://www.khanacademy.org/computer-programming/book-shelf/6312048259629056',
    },
   {
      'name': 'Thunder Storm',
      'description': 'Expanded the project to include changing weather conditions, splashes, and perspective',
      'date': new Date('Jun 27 2015'),
      'imageUrl': './img/project-thumbnails/thunder-storm.png',
      'gitHubUrl': 'https://github.com/dargaCode/KhanThunderStorm',
      'livePageUrl': 'http://dargacode.github.io/KhanThunderStorm',
      'khanUrl': 'https://www.khanacademy.org/computer-programming/thunder-storm/6692749556449280',
    },
   {
      'name': 'Mansion Builder',
      'description': 'A small house expands into a mansion. As the dimensions increase, loops fill the features.',
      'date': new Date('Jun 16 2015'),
      'imageUrl': './img/project-thumbnails/mansion-builder.png',
      'gitHubUrl': 'https://github.com/dargaCode/KhanMansionBuilder',
      'livePageUrl': 'http://dargacode.github.io/KhanMansionBuilder',
      'khanUrl': 'https://www.khanacademy.org/computer-programming/mansion-builder/5011695120547840',
    },
   {
      'name': 'Magic 8-Ball',
      'description': 'Added animations for the ball shaking and the answer appearing.',
      'date': new Date('Jun 6 2015'),
      'imageUrl': './img/project-thumbnails/magic-8-ball.png',
      'gitHubUrl': 'https://github.com/dargaCode/KhanMagic8Ball',
      'livePageUrl': 'http://dargacode.github.io/KhanMagic8Ball',
      'khanUrl': 'https://www.khanacademy.org/computer-programming/magic-8-ball/5857458956402688',
    },
   {
      'name': 'Randomized Fish',
      'description': 'Randomly generates new fish on each refresh.',
      'date': new Date('Jun 1 2015'),
      'imageUrl': './img/project-thumbnails/fish-tank.png',
      'gitHubUrl': 'https://github.com/dargaCode/KhanFishTank',
      'livePageUrl': 'http://dargacode.github.io/KhanFishTank',
      'khanUrl': 'https://www.khanacademy.org/computer-programming/the-noble-derpfish/5643580276342784',
    },
   {
      'name': 'Infinite Cat Attack',
      'description': 'Randomly colored cats infinitely run from the background and pounce through the screen.',
      'date': new Date('May 29 2015'),
      'imageUrl': './img/project-thumbnails/cat-attack.png',
      'gitHubUrl': 'https://github.com/dargaCode/KhanCatAttack',
      'livePageUrl': 'http://dargacode.github.io/KhanCatAttack',
      'khanUrl': 'https://www.khanacademy.org/computer-programming/infinite-cattack/4829025166032896',
    },
   {
      'name': 'Meteor Shower',
      'description': 'Added the moon, twinkling stars, and randomized meteor distance/speed.',
      'date': new Date('May 22 2015'),
      'imageUrl': './img/project-thumbnails/meteor-shower.png',
      'gitHubUrl': 'https://github.com/dargaCode/KhanMeteorShower',
      'livePageUrl': 'http://dargacode.github.io/KhanMeteorShower',
      'khanUrl': 'https://www.khanacademy.org/computer-programming/shooting-star-meteor-shower/5786372654891008',
    },
    {
      'name': 'Mouse Interaction',
      'description': 'Added more elaborate cursor movement/sizing/colors, as well as a pulsing cursor outline.',
      'date': new Date('May 18 2015'),
      'imageUrl': './img/project-thumbnails/mouse-interaction.png',
      'gitHubUrl': 'https://github.com/dargaCode/KhanMouseInteraction',
      'livePageUrl': 'http://dargacode.github.io/KhanMouseInteraction',
      'khanUrl': 'https://www.khanacademy.org/computer-programming/mouse-interaction-pulsing-colors/5967973175132160',
  },
   {
      'name': 'Chicken Drawing',
      'description': 'Static drawing made for Hour of Code. Helped me finally dive into the programming class.',
      'date': new Date('May 11 2015'),
      'imageUrl': './img/project-thumbnails/chicken-drawing.png',
      'gitHubUrl': 'https://github.com/dargaCode/KhanChickenDrawing',
      'livePageUrl': 'http://dargacode.github.io/KhanChickenDrawing',
      'khanUrl': 'https://www.khanacademy.org/computer-programming/wild-animal-chicken/5473107722764288',
    },
  ];

  // 'revealing' module
  return {
    PROJECTS: PROJECTS,
  }

}());
