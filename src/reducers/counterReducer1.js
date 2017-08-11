
const startingState = {
  counter: 0,
  value: 1, 
}

const reducer = (state=startingState, action) => {
  console.log("counterReducer1.js action", action)
  switch(action.type){
    case 'INCREMENT': {
      return {...state, counter: action.payload}
      break;
    }
    case 'DECREMENT': {
      return {...state, counter: state.counter - 1}
      break;
    }
    case 'RESET': {
      return {...state, counter: 0}
      break;
    }
    default: {
      return state
    }
  }
  return state
}

export default reducer;