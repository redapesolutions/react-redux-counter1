

const startingState = {
  counter: 0,
}

const Reducer1 = (state=startingState, action) => {
  console.log("counterReducer1.js -------------", action)
  switch(action.type){
    case 'INCREMENT':
      return {...state, counter: state.counter + action.step}
    
    case 'DECREMENT':
      return {...state, counter: state.counter - action.step}

    case 'SET':
      return {...state, counter: action.value}

    default:
      return state

  }
}

export default Reducer1;
