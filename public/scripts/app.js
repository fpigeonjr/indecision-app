'use strict';

console.log('build it is running');

var appRoot = document.getElementById('app');

var app = {
  title: 'Visibility Toggle',
  isToggled: false,
  details: 'You can now see me'
};

var handleToggle = function handleToggle() {
  app.isToggled = !app.isToggled;
  renderApp();
};

var renderApp = function renderApp() {
  var template = React.createElement(
    React.Fragment,
    null,
    React.createElement(
      'h1',
      null,
      app.title
    ),
    React.createElement(
      'button',
      { onClick: handleToggle },
      app.isToggled ? 'hide details' : 'show details'
    ),
    app.isToggled ? React.createElement(
      'p',
      null,
      app.details
    ) : null
  );

  ReactDOM.render(template, appRoot);
};

renderApp();
