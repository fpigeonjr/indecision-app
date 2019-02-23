console.log(`App.js is running`)

// JSX  - JavaScript XML
var appRoot = document.getElementById('app')
let person = {
  name: 'Frank Pigeon',
  age: 40,
  location: 'San Antonio'
}
let app = {
  title: 'Indecision',
  subTitle: 'Put your life in the hands of a computer',
  options: ['One', 'Two']
}

let template = (
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
    <template2 />
  </React.Fragment>
)

function getLocation(location) {
  if (location) {
    return <p>location: {location}</p>
  }
}

let templateTwo = (
  <React.Fragment>
    <h1>{person.name ? person.name : 'Anonymous'}</h1>
    {person.age && person.age > 18 && <p>age: {person.age}</p>}
    {getLocation(person.location)}
  </React.Fragment>
)

ReactDOM.render(template, appRoot)
