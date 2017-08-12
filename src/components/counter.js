import React from 'react';
import {connect} from 'react-redux'
import counterActions from '../actions/counterAction.js'
import counterReducer from '../reducers/counterReducer.js';
import { createStore } from 'redux'

const store = createStore(counterReducer)

class ParentComponent extends React.Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <div>
        <IncrementForm {...this.props} />
        <Counter {...this.props} />
      </div>
    )
  }
}

class IncrementForm extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      value: 1, 
      finalVal: 1
    }
  }

  dispatchIncrementVal = (event) => {
  }

  handleChange = (e) => {
    const v = e.target.value;
    this.setState({...this.state, value: v})
  }

  handleSubmit = (e) => {
    e.preventDefault()
    alert(this.state.value)
    this.props.dispatch(counterActions.modifyValue(this.state.value))
  }

  render() {
    console.log(this.state)
    return (
      <div> 
        <h3> Increment Form </h3>
        <form onSubmit={this.handleSubmit}>
          Value 
          <input 
            value={this.state.value} 
            type="number" 
            name="val" 
            onChange={this.handleChange}
          />
          <input type="submit" value="submit" />
        </form>
      </div>
    )
  }
}


class Counter extends React.Component {
  constructor(props) {
    super(props)
  }
  handleCounterButton = (event) => {
    const count = this.props.counter;
    if (event.target.name == "increment") {
      this.props.dispatch(counterActions.increment(count.counter2))
    } else if (event.target.name == "decrement") {
      this.props.dispatch(counterActions.decrement(count.counter2))
    } else {
      this.props.dispatch(counterActions.reset(this.props.counter.counter))
    }
  }

  render() {
    return (
      <div>
        <h1> {this.props.counter.counter}</h1>
        <button 
          onClick={this.handleCounterButton}
          name="increment"
        > Increment 
        </button>
        <button 
          name="decrement"
          onClick={this.handleCounterButton}
        > Decrement 
        </button>
        <button 
          name="reset"
          onClick={this.handleCounterButton}
        > Reset 
        </button>

      </div>
    )
  }
}

const mapStateToProps = state => {
  console.log("counter.js mapStateToProps ---------", state)
  return {
    counter: state.counterReducer,
    counter2: state.counterReducer,
  }
}

const mapDispatchToProps = dispatch => {
  console.log("counter.js mapDispatchToProps -------", dispatch)
  return {
    dispatch: dispatch,
    dispatch2: '', 
  }
}

const VisibleCounter = connect(
  mapStateToProps, 
  mapDispatchToProps
)(ParentComponent)

export default VisibleCounter 