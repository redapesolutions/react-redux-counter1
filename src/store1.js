import { applyMiddleware, createStore } from 'redux';
// import Reducer1 from './reducers'; // export default automatically causes all functions that are exported to be invoked
import Reducer1 from './reducers/counterReducer1'; 

console.log("store1.js =========")
const middleware = applyMiddleware();  // not being used at all

export default createStore(Reducer1, middleware)