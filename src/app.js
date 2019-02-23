console.log(`App.js is running`)

// JSX  - JavaScript XML
var appRoot = document.getElementById('app')
let person = {
  name: 'Frank Pigeon',
  age: 40,
  location: 'San Antonio'
}

let template = (
  <React.Fragment>
    <h1>Did it change bro🔥?</h1>
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
    <template2 />
  </React.Fragment>
)

// challenge
let template2 = (
  <React.Fragment>
    <h1>{person.name}</h1>
    <p>age: {person.age}</p>
    <p>location: {person.location}</p>
  </React.Fragment>
)


ReactDOM.render(template2, appRoot)
