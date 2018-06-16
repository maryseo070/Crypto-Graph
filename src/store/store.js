import { createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import apiReducer from '../reducers/api_reducer';


const middlewares = [thunk];
middlewares.push(logger);

const configureStore = (preloadedState = {}) => (
  createStore(apiReducer, preloadedState, applyMiddleware(...middlewares))
);

export default configureStore;
