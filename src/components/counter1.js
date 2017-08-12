import React, { Component } from 'react';

// Dumb component
const Counter = props => (
    <div>
      <h3>Counter {props.value}</h3>
      <button onClick={props.onIncrement}> + </button>
      <button onClick={props.onDecrement}> - </button>
      <button onClick={props.onReset}> x </button>
    </div>
)

export default Counter;
