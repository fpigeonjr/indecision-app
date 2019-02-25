let count = 0

const addOne = () => {
  count += 1
  renderCounterApp()
}

const minusOne = () => {
  count -= 1
  renderCounterApp()
}

const reset = () => {
  count = 0
  renderCounterApp()
}

const renderCounterApp = () => {
  const templateTwo = (
    <React.Fragment>
      <h1>Count: {count}</h1>
      <button onClick={addOne}>🔥Carlos is Awesome +1</button>
      <button onClick={minusOne}>🐢Caleb is a Noob -1</button>
      <button onClick={reset}>Reset</button>
    </React.Fragment>
  )
  ReactDOM.render(templateTwo, appRoot)
}

renderCounterApp()
