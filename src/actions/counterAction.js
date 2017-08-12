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

export default {
  increment,
  decrement,
  reset,
}
