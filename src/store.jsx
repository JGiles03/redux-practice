import { legacy_createStore as createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from '@redux-devtools/extension';
import pointsReducer from './reducers';
import { thunk } from "redux-thunk";

const composedFunctions = composeWithDevTools(...[applyMiddleware(thunk)]);

const store = createStore(
  pointsReducer,
  composedFunctions
);

export default store;