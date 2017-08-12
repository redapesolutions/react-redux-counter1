
const startingState = {
  counter: 1,
  value: 1,
  counter2: 1
}

const reducer = (state=startingState, action) => {
  switch(action.type){
    case 'INCREMENT': {
      return {...state, counter: state.counter + parseInt(action.payload)}
      break;
    }
    case 'DECREMENT': {
      return {...state, counter: state.counter - action.payload}
      break;
    }
    case 'RESET': {
      return {...state, counter: action.payload}
      break;
    }
    case 'MODIFYVAL': {
      const num = action.payload
      return {...state, counter2: action.payload}
    }
    default: {
      return state
    }
  }
  return state
}

export default reducer;