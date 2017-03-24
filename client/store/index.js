import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from '../reducers';
import {routerMiddleware, routerReducer } from 'react-router-redux'
import createHistory from 'history/createBrowserHistory'

export const history = createHistory();

let middlewares = [];

middlewares.push(thunk);
middlewares.push(routerMiddleware(history));

const store = createStore(
  combineReducers({
    rootReducer,
    router: routerReducer
  }),
  applyMiddleware(...middlewares)
);



export default store;
