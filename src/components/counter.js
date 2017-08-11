import React from 'react';
import {connect} from 'react-redux'
import counterActions from '../actions/counterAction.js'
import counterReducer from '../reducers/counterReducer.js';
import { createStore } from 'redux'
import { withHandlers } from 'recompose'

const store = createStore(counterReducer)
console.log('counter.js : store.getState() ---------------', store.getState());


class Counter extends React.Component {
  constructor(props) {
    console.log('Initialising counter: counter.js')
    super(props)
  }
  handleCounterButton = (event) => {
    if (event.target.name == "increment") {
      this.props.dispatch(counterActions.increment(this.props.counter.counter))
    } else if (event.target.name == "decrement") {
      this.props.dispatch(counterActions.decrement(this.props.counter.counter))
    } else {
      this.props.dispatch(counterActions.reset(this.props.counter.counter))
    }
  }

  render() {
    console.log("counter.js render: ---- ", this.props)
    console.log('counter.js : store.getState() inside render ---------------', store.getState());
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
    counter2: '',
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
)(Counter)

export default VisibleCounter 