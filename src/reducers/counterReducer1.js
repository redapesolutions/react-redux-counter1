

const startingState = {
  counter: 0,
}

const Reducer1 = (state=startingState, action) => {
  console.log("counterReducer1.js -------------", action)
  switch(action.type){
    case 'INCREMENT': {
      console.log("counterReducer1.js: >>>> Increment invoked .....")
      return {...state, counter: state.counter + action.step}
    }
    case 'DECREMENT': {
      console.log("counterReducer1.js: >>>> Decrement invoked .....")
      return {...state, counter: state.counter - action.step}
    }
    case 'SET': {
      console.log("counterReducer1.js: >>>> Reset invoked .....")
      return {...state, counter: action.value}
    }
    default: {
      return state
    }
  }
}

export default Reducer1;