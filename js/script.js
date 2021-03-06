
'use strict'; // enable 'let declarations'

// DEPENDENCIES

const PROJECTS = CONSTANTS.PROJECTS;

// CONSTANTS

const MONTHS = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
];

const postTemplate = document.querySelector('#project-template').innerHTML;

const templateDestination = document.querySelector('.project-list');

const template = Handlebars.compile(postTemplate);

// FUNCTIONS

function getDateString(date) {
  const monthIndex = date.getMonth();
  const year = date.getFullYear();
  const monthName = MONTHS[monthIndex];
  const dayOfMonth = date.getDate();

  return `${monthName} ${dayOfMonth}, ${year}`;
}

// date in the special format required by the 'datetime' attribute
function getDateTimeString(date) {
  const year = date.getFullYear();
  const monthNum = date.getMonth() + 1;
  const dayNum = date.getDate();

  return `${year}-${monthNum}-${dayNum}`;
}

// HELPERS

// MAIN

for (let project of PROJECTS) {
  project.dateTimeString = getDateTimeString(project.date);
  project.dateString = getDateString(project.date);

  var compiledHTML = template(project);

  templateDestination.innerHTML += compiledHTML;
}
