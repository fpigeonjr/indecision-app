'use strict';

console.log('App.js is running');

// JSX  - JavaScript XML
var appRoot = document.getElementById('app');

var app = {
  title: 'Indecision App',
  subTitle: 'Put your life in the hands of a computer',
  options: []
};

var onFormSubmit = function onFormSubmit(e) {
  e.preventDefault();
  var option = e.target.elements.option.value;

  if (option) {
    app.options.push(option);
    e.target.elements.option.value = '';
  }
  renderCounterApp();
};

var removeAll = function removeAll() {
  app.options = [];
  renderCounterApp();
};

var renderCounterApp = function renderCounterApp() {
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
      app.options.length
    ),
    React.createElement(
      'button',
      { onClick: removeAll },
      'Remove All'
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
    React.createElement(
      'form',
      { onSubmit: onFormSubmit },
      React.createElement('input', { type: 'text', name: 'option' }),
      React.createElement(
        'button',
        null,
        'Add Option'
      )
    )
  );
  ReactDOM.render(template, appRoot);
};

renderCounterApp();
