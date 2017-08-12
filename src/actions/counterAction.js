const increment = (step=1) => {
  console.log('dsadsa', step)
  return {
    type: 'INCREMENT',
    step,
  }
}

const decrement = (step=1) => {
  return {
    type: 'DECREMENT',
    step
  }
}

const reset = () => {
  return {
    type: 'SET',
    value: 0,
  }
}

const funcs = {
  increment: increment,
  decrement: decrement,
  reset: reset,
}
export default funcs;
