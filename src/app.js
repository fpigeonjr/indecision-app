class IndecisionApp extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Header />
        <Action />
        <Options />
        <AddOption />
      </React.Fragment>
    )
  }
}

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
    return (
      <React.Fragment>
        <p>Options Component Here</p>
        <Option />
        <Option />
        <Option />
      </React.Fragment>
    )
  }
}

class Option extends React.Component {
  render() {
    return <p>Option Component Here</p>
  }
}

class AddOption extends React.Component {
  render() {
    return <p>Add Options Component Here</p>
  }
}

ReactDOM.render(<IndecisionApp />, document.getElementById('app'))
