
'use strict'; // enable 'let declarations'

const POST_NAMES = [
  'first',
  'second',
  'third',
  'fourth',
  'fifth',
];

const postTemplate = document.querySelector('#entry-template').innerHTML;

const templateDestination = document.querySelector('.post-list');

const template = Handlebars.compile(postTemplate);

for (name of POST_NAMES) {
  var context = {
    title: `My ${name} Post`,
    body: `This is my ${name.toUpperCase()} testing post!`,
  };

  var compiledHTML = template(context);

  templateDestination.innerHTML += compiledHTML;

}
