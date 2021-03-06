class Counter extends React.Component {
  constructor(props) {
    super(props)
    this.handleAddOne = this.handleAddOne.bind(this)
    this.handleMinusOne = this.handleMinusOne.bind(this)
    this.handleReset = this.handleReset.bind(this)
    this.state = {
      count: props.count
    }
  }

  handleAddOne() {
    this.setState(prevState => {
      return { count: prevState.count + 1 }
    })
  }

  handleMinusOne() {
    this.setState(prevState => {
      return { count: prevState.count - 1 }
    })
  }

  handleReset() {
    this.setState(() => {
      return {
        count: 0
      }
    })
  }

  render() {
    return (
      <div>
        {this.state.name}
        <h1>Count: {this.state.count}</h1>
        <button onClick={this.handleAddOne}>+1</button>
        <button onClick={this.handleMinusOne}>-1</button>
        <button onClick={this.handleReset}> reset</button>
      </div>
    )
  }
}

Counter.defaultProps = {
  count: 100
}

ReactDOM.render(<Counter count={0} />, document.getElementById('app'))
// let count = 0

// const addOne = () => {
//   count += 1
//   renderCounterApp()
// }

// const minusOne = () => {
//   count -= 1
//   renderCounterApp()
// }

// const reset = () => {
//   count = 0
//   renderCounterApp()
// }

// const renderCounterApp = () => {
//   const templateTwo = (
//     <React.Fragment>
//       <h1>Count: {count}</h1>
//       <button onClick={addOne}>🔥Carlos is Awesome +1</button>
//       <button onClick={minusOne}>🐢Caleb is a Noob -1</button>
//       <button onClick={reset}>Reset</button>
//     </React.Fragment>
//   )
//   ReactDOM.render(templateTwo, appRoot)
// }

// renderCounterApp()
