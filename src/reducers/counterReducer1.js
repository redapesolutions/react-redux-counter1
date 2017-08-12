

const startingState = {
  counter: 0,
}

const Reducer1 = (state=startingState, action) => {
  console.log("counterReducer1.js -------------", action)
  switch(action.type){
    case 'INCREMENT': {
      console.log("counterReducer1.js: >>>> Increment invoked .....")
      return {...state, counter: action.payload}
      break;
    }
    case 'DECREMENT': {
      console.log("counterReducer1.js: >>>> Decrement invoked .....")
      return {...state, counter: state.counter - 1}
      break;
    }
    case 'RESET': {
      console.log("counterReducer1.js: >>>> Reset invoked .....")
      return {...state, counter: 0}
      break;
    }
    default: {
      return state
    }
  }
  return state
}

export default Reducer1;