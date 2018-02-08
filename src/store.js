import {createStore, applyMiddleware, combineReducers} from 'redux';
import { routerReducer, routerMiddleware } from 'react-router-redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';

import reducers from './reducers';

const store = createStore(
  combineReducers({
    ...reducers,
    router: routerReducer
  }),
  applyMiddleware(thunk, logger, routerMiddleware)
);

export default store;