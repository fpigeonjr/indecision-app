console.log(`App.js is running`)

// JSX  - JavaScript XML
var appRoot = document.getElementById('app')

const app = {
  title: 'Indecision App',
  subTitle: 'Put your life in the hands of a computer',
  options: []
}

const onFormSubmit = e => {
  e.preventDefault()
  const option = e.target.elements.option.value

  if (option) {
    app.options.push(option)
    e.target.elements.option.value = ''
  }
  renderCounterApp()
}

const removeAll = () => {
  app.options = []
  renderCounterApp()
}

const onMakeDecision = () => {
  const randomNum = Math.floor(Math.random() * app.options.length)
  const option = app.options[randomNum]
  alert(option)
}

const renderCounterApp = () => {
  const template = (
    <React.Fragment>
      <h1>{app.title}</h1>
      {app.subTitle && <h2>{app.subTitle}</h2>}
      {app.options && app.options.length > 0 ? (
        <p>Here are your options</p>
      ) : (
        <p>No Options</p>
      )}

      <button disabled={app.options.length === 0} onClick={onMakeDecision}>
        What should I do?
      </button>
      <button onClick={removeAll}>Remove All</button>

      <ol>
        {app.options.map(option => (
          <li key={option}>{option}</li>
        ))}
      </ol>
      <form onSubmit={onFormSubmit}>
        <input type="text" name="option" />
        <button>Add Option</button>
      </form>
    </React.Fragment>
  )
  ReactDOM.render(template, appRoot)
}

renderCounterApp()
