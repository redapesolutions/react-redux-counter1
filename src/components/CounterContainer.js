// Read https://medium.com/@dan_abramov/smart-and-dumb-components-7ca2f9a7c7d0
// about smart components (which are connected to state)
// and dumb ones which shouldn't
import React, { Component } from 'react';
import {connect} from 'react-redux'
import { compose, withHandlers } from 'recompose'

import counterActions from '../actions/counterAction'
import {setStep} from '../actions/step'

import StepSelector from './StepSelector'
import Counter from './counter1'


export default compose(
  connect(
    state => ({
      counter: state.counter.counter,
      step: state.step.step
    }),
    // Grab the methods we need to access, do not give access to dispatch
    dispatch => ({
      increment: step => dispatch(counterActions.increment(step)),  // TODO: In theory, this should simply be wrapped in a dispatch() refer to https://github.com/reactjs/react-redux/blob/master/docs/api.md
      decrement: step => dispatch(counterActions.decrement(step)),  // Not sure why it doesn't seem to dispatch unless coded this way
      reset: _ => dispatch(counterActions.reset()),
      setStep: value => dispatch(setStep(value))
    })
    /* Supposed to be as simple as */
    // _ => ({
    //   increment: counterActions.increment,
    // })
    /*
    Worked last time. To be investigated
    */
  ),
  withHandlers({
    // Now we override increment because the action expects a "step" not a mouse event
    increment: props => _ => {console.log('dsadsad');props.increment(props.step)},
    decrement: props => _ => props.decrement(props.step),
    setStep: props => event => props.setStep(parseInt(event.target.value))
  })
)(
  (props) => (<div>
    <Counter
      value={props.counter}
      onIncrement={props.increment}
      onDecrement={props.decrement}
      onReset={props.reset} />
    <StepSelector
      value={props.step}
      onChange={props.setStep} />
  </div>)
)
