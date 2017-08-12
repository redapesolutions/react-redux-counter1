
const startingState = {
  step: 1,
}

export default (state=startingState, action) => {
  switch(action.type){
    case 'SET': {
      return {step: action.value}
    }
    case 'RESET':
      return {...startingState}
    default: {
      return state
    }
  }
}
