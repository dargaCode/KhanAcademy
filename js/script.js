
'use strict'; // enable 'let declarations'

// DEPENDENCIES

const PROJECTS = CONSTANTS.PROJECTS;

// CONSTANTS

const postTemplate = document.querySelector('#entry-template').innerHTML;

const templateDestination = document.querySelector('.post-list');

const template = Handlebars.compile(postTemplate);

// FUNCTIONS

// HELPERS

// MAIN

for (let project of PROJECTS) {
  var context = {
    title: project.name,
    body: project.description,
  };
  var compiledHTML = template(context);

  templateDestination.innerHTML += compiledHTML;
}
