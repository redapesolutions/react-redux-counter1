import React, { Component } from 'react';

// Dumb component
export default (props) => {
  return (
    <div>
      <span>Step:</span>
      <input type="number" value={props.value} onChange={props.onChange} />
    </div>
  )
}
