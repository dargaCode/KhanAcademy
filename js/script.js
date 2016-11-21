
'use strict'; // enable 'let declarations'

// DEPENDENCIES

const PROJECTS = CONSTANTS.PROJECTS;

// CONSTANTS

const postTemplate = document.querySelector('#project-template').innerHTML;

const templateDestination = document.querySelector('.project-list');

const template = Handlebars.compile(postTemplate);

// FUNCTIONS

// HELPERS

// MAIN

for (let project of PROJECTS) {
  var compiledHTML = template(project);

  templateDestination.innerHTML += compiledHTML;
}
