import { createStore, applyMiddleware } from 'redux';
import {thunk} from 'redux-thunk';
import rootreducer from './rootreducer';
const store = createStore(
  rootreducer,
  applyMiddleware(thunk)
  
);

export default store;

//   applyMiddleware