class IndecisionApp extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      options: props.options
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
    const subTitle = 'Put Your Life in the hands of a Computer'

    return (
      <React.Fragment>
        <Header subTitle={subTitle} />
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

IndecisionApp.defaultProps = {
  options: []
}

const Header = props => (
  <React.Fragment>
    <h1>{props.title}</h1>
    {props.subTitle && <h2>{props.subTitle}</h2>}
  </React.Fragment>
)

Header.defaultProps = {
  title: 'Indecision'
}

const Action = props => (
  <button disabled={!props.hasOptions} onClick={props.handlePick}>
    What Should I Do?
  </button>
)

const Options = props => (
  <React.Fragment>
    <p>Options Component Here</p>
    {props.options.map((option, i) => (
      <Option key={i} optionText={option} />
    ))}
    <button onClick={props.handleDeleteOptions}>Remove All</button>
  </React.Fragment>
)

const Option = props => <p>{props.optionText}</p>

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
