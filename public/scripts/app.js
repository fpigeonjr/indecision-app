'use strict';

console.log('App.js is running');

// JSX  - JavaScript XML
var appRoot = document.getElementById('app');
var person = {
  name: 'Frank Pigeon',
  age: 40,
  location: 'San Antonio'
};

var template = React.createElement(
  React.Fragment,
  null,
  React.createElement(
    'h1',
    null,
    'Did it change bro\uD83D\uDD25?'
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

// challenge
var template2 = React.createElement(
  React.Fragment,
  null,
  React.createElement(
    'h1',
    null,
    person.name
  ),
  React.createElement(
    'p',
    null,
    'age: ',
    person.age
  ),
  React.createElement(
    'p',
    null,
    'location: ',
    person.location
  )
);

ReactDOM.render(template2, appRoot);
