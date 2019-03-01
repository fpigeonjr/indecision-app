class VisibiltyToggle extends React.Component {
  constructor(props) {
    super(props)
    this.handleToggle = this.handleToggle.bind(this)

    this.state = {
      title: 'Visibility Toggle',
      isToggled: false,
      details: 'You can now see me'
    }
  }

  handleToggle() {
    this.setState(prevState => {
      return {
        isToggled: !prevState.isToggled
      }
    })
  }

  render() {
    return (
      <React.Fragment>
        <h1>{this.state.title}</h1>
        <button onClick={this.handleToggle}>
          {this.state.isToggled ? 'hide details' : 'show details'}
        </button>

        {this.state.isToggled && <p>{this.state.details}</p>}
      </React.Fragment>
    )
  }
}

const appRoot = document.getElementById('app')
ReactDOM.render(<VisibiltyToggle />, appRoot)
