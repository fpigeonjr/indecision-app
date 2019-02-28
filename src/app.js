class Header extends React.Component {
  render() {
    return (
      <React.Fragment>
        <h1>Indecision</h1>
        <h2>Put Your Life in the Hands of a Computer</h2>
      </React.Fragment>
    )
  }
}

class Action extends React.Component {
  render() {
    return <button>What Should I Do?</button>
  }
}

class Options extends React.Component {
  render() {
    return <p>Options Component Here</p>
  }
}

class AddOption extends React.Component {
  render() {
    return <p>Add Options Component Here</p>
  }
}

const jsx = (
  <React.Fragment>
    <Header />
    <Action />
    <Options />
    <AddOption />
  </React.Fragment>
)

ReactDOM.render(jsx, document.getElementById('app'))
