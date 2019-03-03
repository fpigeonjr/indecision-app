class IndecisionApp extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      options: []
    }
    this.handleDeleteOptions = this.handleDeleteOptions.bind(this)
    this.handlePick = this.handlePick.bind(this)
    this.handleAddOption = this.handleAddOption.bind(this)
  }

  handleDeleteOptions() {
    this.setState(() => {
      return {
        options: []
      }
    })
  }

  handlePick() {
    const randomNum = Math.floor(Math.random() * this.state.options.length)
    const option = this.state.options[randomNum]
    alert(option)
  }

  handleAddOption(option) {
    if (!option) {
      return 'Enter a valid value'
    } else if (this.state.options.indexOf(option) > -1) {
      // if it already exists
      return 'This option already exists'
    }
    this.setState(prevState => {
      return {
        options: prevState.options.concat(option)
      }
    })
  }

  render() {
    const title = 'Indecision'
    const subTitle = 'Put Your Life in the hands of a Computer'

    return (
      <React.Fragment>
        <Header title={title} subTitle={subTitle} />
        <Action
          hasOptions={this.state.options.length > 0}
          handlePick={this.handlePick}
        />
        <Options
          options={this.state.options}
          handleDeleteOptions={this.handleDeleteOptions}
        />
        <AddOption handleAddOption={this.handleAddOption} />
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
    return (
      <button disabled={!this.props.hasOptions} onClick={this.props.handlePick}>
        What Should I Do?
      </button>
    )
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
        <button onClick={this.props.handleDeleteOptions}>Remove All</button>
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
  constructor(props) {
    super(props)
    this.handleAddOption = this.handleAddOption.bind(this)
    this.state = {
      error: undefined
    }
  }

  handleAddOption(e) {
    e.preventDefault()
    const option = e.target.elements.option.value.trim()

    const error = this.props.handleAddOption(option)

    this.setState(() => {
      return { error }
    })
  }

  render() {
    return (
      <React.Fragment>
        {this.state.error && <p>{this.state.error}</p>}
        <form onSubmit={this.handleAddOption}>
          <input type="text" name="option" />
          <button>Add Option</button>
        </form>
      </React.Fragment>
    )
  }
}

ReactDOM.render(<IndecisionApp />, document.getElementById('app'))
