import React, { Component } from 'react';
import { createStore } from 'redux';
import Reducer1 from '../reducers/counterReducer1';
import {connect} from 'react-redux'
import counterActions from '../actions/counterAction.js'

import { compose, withHandlers, withProps, withState } from 'recompose';


const enhanceButton = compose(
  // redux connect works well with compose, awesome right?
  connect(
    // Grab the values we actually need from state, only the ones we need
    state => ({
      counter: state.counter
    }),
    // Grab the methods we need to access, do not give access to dispatch
    dispatch => ({
      increment: step => dispatch(counterActions.increment(step)),  // TODO: In theory, this should simply be wrapped in a dispatch() refer to https://github.com/reactjs/react-redux/blob/master/docs/api.md
      decrement: step => dispatch(counterActions.decrement(step)),  // Not sure why it doesn't seem to dispatch unless coded this way
      reset: _ => dispatch(counterActions.reset())
    })
    /* Supposed to be as simple as
    _ => ({
      increment: counterActions.increment,
      decrement: counterActions.decrement
    })
    Worked last time. To be investigated
    */
  ),
  withHandlers({
    // Now we override increment because the action expects a "step" not a mouse event
    increment: props => _ => props.increment(1),
    decrement: props => _ => props.decrement(1)
  })
)

// Question :  HOC coupling with Components:
// In case below, component Counter needs to know there is such function called onClicks and increment.
// But then, it seems quite COUPLED between the HOC and component Counter.
const Counter = enhanceButton(( props ) => {
  console.log("PROPS: --------------", props)
  return (
    <div>
      <h3>Counter {props.counter}</h3>
      <button onClick={props.increment}> + </button>
      <button onClick={props.decrement}> - </button>
      <button onClick={props.reset}> x </button>
    </div>
  )
})

export default Counter;
