import { combineReducers } from 'redux'

import counter from './counterReducer1.js'
import step from './step.js'

console.log("index.js reducers #########")
export default combineReducers({
  counter,
  step
});
