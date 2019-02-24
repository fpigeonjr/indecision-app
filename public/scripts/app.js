'use strict';

console.log('App.js is running');

// JSX  - JavaScript XML
var appRoot = document.getElementById('app');

var app = {
  title: 'Indecision App',
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
  )
);

var count = 0;

var addOne = function addOne() {
  console.log('add one');
};

var minusOne = function minusOne() {
  console.log('subtract one');
};

var reset = function reset() {
  console.log('reset counter');
};

var templateTwo = React.createElement(
  React.Fragment,
  null,
  React.createElement(
    'h1',
    null,
    'Count: ',
    count
  ),
  React.createElement(
    'button',
    { onClick: addOne },
    '+1'
  ),
  React.createElement(
    'button',
    { onClick: minusOne },
    '-1'
  ),
  React.createElement(
    'button',
    { onClick: reset },
    'Reset'
  )
);

ReactDOM.render(templateTwo, appRoot);
