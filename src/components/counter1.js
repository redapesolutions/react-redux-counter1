import React, { Component } from 'react';
import { createStore } from 'redux';
import Reducer1 from '../reducers/counterReducer1';

import { compose, withHandlers, withProps, withState } from 'recompose';

const reduxStore = createStore(Reducer1);

const enhanceButton = compose(   
  // withState('val', 'valUpdate', 0),
  withState('reduxStore', 'reduxDispatch', reduxStore),
  withState('reduxState', 'getReduxState', reduxStore.getState()),
  withHandlers({
    onClicks: props => event => {
      console.log("i'm clicked ................ props: ", props)
      console.log("i'm clicked ................ event: ", event)
    },
    // increment: ({ valUpdate }) => () => valUpdate( (n) => n + 1 ), 
    reduxDispatchDec: ({ reduxDispatch }) => () => reduxDispatch( (rStore) => rStore.dispatch({type: "DECREMENT"}) ), 
    reduxDispatchInc: ({ reduxDispatch }) => () => reduxDispatch( (rStore) => rStore.dispatch({ type: "INCREMENT", payload: 10}) ),
    getReduxState: (props) => () => props.getReduxState( (state) => console.log("state: ", state))
  })
)
// ------------  Testing start----------------------
const comp = ({ x }) => <div> {x} </div>;

const numberEnhance = compose(
  withProps( ({x}) => ({ x: x + 2 }) ),
  withProps( ({x}) => ({ x: x * 2 }) )
);
// ------------  Testing end ----------------------

// Question :  HOC coupling with Components: 
// In case below, component Counter needs to know there is such function called onClicks and increment. 
// But then, it seems quite COUPLED between the HOC and component Counter. 
const Counter = enhanceButton(( props ) => {
  console.log("PROPS: --------------", props) 
  return (
    <div>
      <h2> Testing </h2>
      <button onClick={props.onClicks}> Press me to invoke onClicks </button>
      {/* <button onClick={props.increment}> Press to invoke increment </button> */}
      <button onClick={props.reduxDispatchDec}> Press to invoke reduxDispatchDec  </button>
      <button onClick={props.reduxDispatchInc}> Press to invoke reduxDispatchInc  </button>
      <button onClick={props.getReduxState}> Get Redux State </button>
    </div>
  )
})

export default Counter;