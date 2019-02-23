'use strict';

console.log('App.js is running');

// JSX  - JavaScript XML
var name = 'Frank Pigeon';

var template = React.createElement(
  React.Fragment,
  null,
  React.createElement(
    'h1',
    null,
    'Did it change bro\uD83D\uDD25?'
  ),
  React.createElement(
    'h2',
    null,
    'My name is ',
    name
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
  )
);

var appRoot = document.getElementById('app');

ReactDOM.render(template, appRoot);
