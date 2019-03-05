class IndecisionApp extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      options: props.options
    }
    this.handleDeleteOptions = this.handleDeleteOptions.bind(this)
    this.handleDeleteOption = this.handleDeleteOption.bind(this)
    this.handlePick = this.handlePick.bind(this)
    this.handleAddOption = this.handleAddOption.bind(this)
  }

  componentDidMount() {
    try {
      const json = localStorage.getItem('options')
      const options = JSON.parse(json)

      if (options) {
        this.setState(() => ({ options }))
      }
    } catch (e) {
      // do nothing at all 😂️
    }
  }

  componentDidUpdate(prevProps, prevState) {
    // only if there was a change
    if (prevState.options.length !== this.state.options.length) {
      console.log('saving data')
      const json = JSON.stringify(this.state.options)
      localStorage.setItem('options', json)
    }
  }

  handleDeleteOptions() {
    this.setState(() => {
      return {
        options: []
      }
    })
  }

  handleDeleteOption(optionToRemove) {
    this.setState(prevState => ({
      options: prevState.options.filter(option => optionToRemove !== option)
    }))
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
          handleDeleteOption={this.handleDeleteOption}
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
  <div>
    <button onClick={props.handleDeleteOptions}>Remove All</button>
    {props.options.length === 0 && <p>Please add an option to get started!</p>}
    {props.options.map(option => (
      <Option
        key={option}
        optionText={option}
        handleDeleteOption={props.handleDeleteOption}
      />
    ))}
  </div>
)

const Option = props => (
  <div>
    {props.optionText}
    <button
      onClick={e => {
        props.handleDeleteOption(props.optionText)
      }}
    >
      remove
    </button>
  </div>
)

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

    if (!error) {
      e.target.elements.option.value = ''
    }
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
