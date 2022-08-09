import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';


import greetingReducer from './greetings/reducers/greetingsReducer';

// combine one or more reducers
const reducer = combineReducers({
  greetingReducer
});

// create the store
const store = createStore(reducer, applyMiddleware(thunk));

export default store;
