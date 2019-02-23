'use strict';

console.log('App.js is running');

// JSX  - JavaScript XML
var appRoot = document.getElementById('app');
var person = {
  name: 'Frank Pigeon',
  age: 40,
  location: 'San Antonio'
};
var app = {
  title: 'Indecision',
  subTitle: 'Put your life in the hands of a computer',
  options: ['One', 'Two']
};

var template = React.createElement(
  React.Fragment,
  null,
  React.createElement(
    'h1',
    null,
    app.title
  ),
  app.subTitle && React.createElement(
    'h2',
    null,
    app.subTitle
  ),
  app.options && app.options.length > 0 ? React.createElement(
    'p',
    null,
    'Here are your options'
  ) : React.createElement(
    'p',
    null,
    'No Options'
  ),
  React.createElement(
    'p',
    null,
    'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolore soluta quos impedit, assumenda dolor illo, totam eum labore minima eaque molestias, incidunt obcaecati? Porro itaque dicta doloremque sequi, ipsa cupiditate!'
  ),
  React.createElement(
    'ol',
    null,
    React.createElement(
      'li',
      null,
      'Item One'
    ),
    React.createElement(
      'li',
      null,
      'Item Two'
    ),
    React.createElement(
      'li',
      null,
      'Item Three'
    )
  ),
  React.createElement('template2', null)
);

function getLocation(location) {
  if (location) {
    return React.createElement(
      'p',
      null,
      'location: ',
      location
    );
  }
}

var templateTwo = React.createElement(
  React.Fragment,
  null,
  React.createElement(
    'h1',
    null,
    person.name ? person.name : 'Anonymous'
  ),
  person.age && person.age > 18 && React.createElement(
    'p',
    null,
    'age: ',
    person.age
  ),
  getLocation(person.location)
);

ReactDOM.render(template, appRoot);
