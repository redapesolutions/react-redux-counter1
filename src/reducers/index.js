import { combineReducers } from 'redux'

import counterReducer from './counterReducer.js'

console.log("index.js reducers #########")
export default combineReducers({
  counterReducer,
});