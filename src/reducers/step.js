
const startingState = {
  step: 1,
}

export default (state=startingState, action) => {
  switch(action.type){
    case 'SET_STEP': {
      return {step: action.value}
    }
    case 'RESET_STEP':
      return {...startingState}
    default: {
      return state
    }
  }
}
