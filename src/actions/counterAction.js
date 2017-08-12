const increment = (counter2) => {
  return {
    type: 'INCREMENT', 
    payload: counter2,
  }
}

const decrement = (counter2) => {
  return {
    type: 'DECREMENT', 
    payload: counter2 ,  
  }
}

const reset = (counter) => {
  return {
    type: 'RESET', 
    payload: 0,
  }
}

const modifyValue = (value) => {
  return {
    type: 'MODIFYVAL', 
    payload: value,
  }
}

const funcs = { 
  increment: increment, 
  decrement: decrement, 
  reset: reset,
  modifyValue: modifyValue,
}
export default funcs;