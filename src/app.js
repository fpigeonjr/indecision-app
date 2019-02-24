console.log(`App.js is running`)

// JSX  - JavaScript XML
var appRoot = document.getElementById('app')

const app = {
  title: 'Indecision App',
  subTitle: 'Put your life in the hands of a computer',
  options: ['One', 'Two']
}

const template = (
  <React.Fragment>
    <h1>{app.title}</h1>
    {app.subTitle && <h2>{app.subTitle}</h2>}
    {app.options && app.options.length > 0 ? (
      <p>Here are your options</p>
    ) : (
      <p>No Options</p>
    )}
    <p>
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolore soluta
      quos impedit, assumenda dolor illo, totam eum labore minima eaque
      molestias, incidunt obcaecati? Porro itaque dicta doloremque sequi, ipsa
      cupiditate!
    </p>
    <ol>
      <li>Item One</li>
      <li>Item Two</li>
      <li>Item Three</li>
    </ol>
  </React.Fragment>
)

let count = 0

const addOne = () => {
  console.log('add one')
}

const minusOne = () => {
  console.log('subtract one')
}

const reset = () => {
  console.log('reset counter')
}

const templateTwo = (
  <React.Fragment>
    <h1>Count: {count}</h1>
    <button onClick={addOne}>+1</button>
    <button onClick={minusOne}>-1</button>
    <button onClick={reset}>Reset</button>
  </React.Fragment>
)

ReactDOM.render(templateTwo, appRoot)
