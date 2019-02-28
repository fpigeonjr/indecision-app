class IndecisionApp extends React.Component {
  render() {
    const title = 'Indecision'
    const subTitle = 'Put Your Life in the hands of a Computer'
    const options = ['Thing One', 'Thing Two', 'Thing Three']

    return (
      <React.Fragment>
        <Header title={title} subTitle={subTitle} />
        <Action />
        <Options options={options} />
        <AddOption />
      </React.Fragment>
    )
  }
}

class Header extends React.Component {
  render() {
    return (
      <React.Fragment>
        <h1>{this.props.title}</h1>
        <h2>{this.props.subTitle}</h2>
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
        {this.props.options.map((option, i) => (
          <Option key={i} optionText={option} />
        ))}
      </React.Fragment>
    )
  }
}

class Option extends React.Component {
  render() {
    return <p>{this.props.optionText}</p>
  }
}

class AddOption extends React.Component {
  render() {
    return <p>Add Options Component Here</p>
  }
}

ReactDOM.render(<IndecisionApp />, document.getElementById('app'))
