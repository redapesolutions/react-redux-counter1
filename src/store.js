import { applyMiddleware, createStore } from 'redux';
import reducer from './reducers';

console.log("store.js =========")
const middleware = applyMiddleware();

export default createStore(reducer, middleware)