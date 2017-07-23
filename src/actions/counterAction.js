const increment = (counter) => {

  console.log("counterAction.js increment: ---------- ", counter)
  return {
    type: 'INCREMENT', 
    payload: counter += 1,
  }
}

const decrement = (counter) => {
  return {
    type: 'DECREMENT', 
    payload: counter -=1 , 
  }
}

const reset = (counter) => {
  return {
    type: 'RESET', 
    payload: 0,
  }
}

const funcs = { 
  increment: increment, 
  decrement: decrement, 
  reset: reset,
}
export default funcs;