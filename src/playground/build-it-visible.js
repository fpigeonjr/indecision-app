console.log('build it is running')

const appRoot = document.getElementById('app')

const app = {
  title: 'Visibility Toggle',
  isToggled: false,
  details: 'You can now see me'
}

const handleToggle = () => {
  app.isToggled = !app.isToggled
  renderApp()
}

const renderApp = () => {
  const template = (
    <React.Fragment>
      <h1>{app.title}</h1>
      <button onClick={handleToggle}>
        {app.isToggled ? 'hide details' : 'show details'}
      </button>

      {app.isToggled ? <p>{app.details}</p> : null}
    </React.Fragment>
  )

  ReactDOM.render(template, appRoot)
}

renderApp()
