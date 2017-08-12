import React, { Component } from 'react';
import { createStore } from 'redux';
import Reducer1 from '../reducers/counterReducer1';
import { compose, withState, withHandlers } from 'recompose';

const store = createStore(Reducer1)




const GetReduxState = () => {

  const reduxButton = compose(
    withState('rState', 'getRState', { name: "james" }),
    withHandlers({
      getStateRedux: (props) => () => props.getRState( (s) => console.log('!!!: ', s))
    })
  )

  const RunFunction = () => {
    console.log(" reduxCounter1.js : Initial State: ", store.getState())

    store.dispatch({
      type: "INCREMENT", 
      payload: 10
    })

    console.log(" reduxCounter1.js : Store after dispatch: ", store.getState())
  }

  const getReduxState = () => {
    console.log(store.getState())
  }

  const normalButton = reduxButton(({ getRState }) => {
    console.log("normal button being invoked")
    return (
    <div>
      <button onClick={getRState}> HOC</button>
    </div>
    )
  })

  const normalButton1 = () => {
    return (
    <div>
      <h3> Button works </h3>
    </div>
    )
  }


  return (
    <div>
      {RunFunction()}
      <button onClick={getReduxState}> GET THE STATE </button>
       {normalButton1()} 
       <normalButton />  
       {
         // why is normalButton not invoking? 
       }
    </div>
  )
}

export default GetReduxState;