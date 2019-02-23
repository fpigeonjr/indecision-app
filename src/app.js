console.log(`App.js is running`)

// JSX  - JavaScript XML
let name = 'Frank Pigeon'

let template = (
  <React.Fragment>
    <h1>Did it change bro🔥?</h1>
    <h2>My name is {name}</h2>
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

var appRoot = document.getElementById('app')

ReactDOM.render(template, appRoot)
