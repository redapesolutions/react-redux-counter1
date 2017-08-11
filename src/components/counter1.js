import React from 'react';
import {connect} from 'react-redux'
import counterActions from '../actions/counterAction.js'
import counterReducer1 from '../reducers/counterReducer1.js';
import { createStore } from 'redux'
import { compose, withState, withHandlers } from 'recompose'

const store = createStore(counterReducer1)
console.log('counter.js : store.getState() ---------------', store.getState());

const buttonEnhance = compose(
  withState('count', 'setCount', store.getState().counter ),
  withState('value', 'setValue', store.getState().value ),  // create mutiple states. However, should state be stored here or in mapStateToProps
  withHandlers({
    incrementCount: props => event => {
      props.setCount(props.count + props.value)  // instead of +1 here, I should invoke the event in counterReducer1.js. Need to figure out how.
    }, 
    decrementCount: props => event => {
      props.setCount(props.count - props.value)
    },
    resetCount: props => event => {
      props.setCount(0)
    },
    handleChange: props => event => {
      console.log('handling change ..............', props.value1)
      props.setValue(props.value1)
    }
  })
);

const Button1 = buttonEnhance(({ count, incrementCount, decrementCount, resetCount, handleChange }) => 
  <div>
     <h3> {count} </h3> 
     <button onClick={incrementCount}> Modified Increment </button > 
     <button onClick={decrementCount}>  Modified Decrement  </button > 
     <button onClick={resetCount}>  Modified Reset </button>
     <br></br>
      <form>
          <label>
            Value:
            <input value={store.getState().value} onChange={handleChange} />
          </label>
          <input type="submit" value="Submit" />
        </form>
  </div>
)

const mapStateToProps = state => {  // how is this getting its state from ? 
  console.log("counter1.js mapStateToProps >>>>>>>>>>>>>>>>", state) // why does this log eventhough I'm increment from counter.js
  return {
    counter: state.counterReducer1,
    counter2: '',
    value1: 1,   // State gets stored in here. 
    onSubmitValue: 1
  }
}

// this does not appear to be logging in console. EG: I commented mapDispatchToProps out in counter.js and still worked fine
const mapDispatchToProps = dispatch => {
  console.log("counter.js mapDispatchToProps -------", dispatch)
  return {
    dispatch: dispatch,
    dispatch2: '', 
  }
}


const Button2 = connect(
  mapStateToProps,
)(Button1)

export default Button2;


    