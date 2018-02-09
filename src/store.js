import {createStore, applyMiddleware, combineReducers} from 'redux';
import { routerReducer, routerMiddleware } from 'react-router-redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import createHistory from 'history/createBrowserHistory';

import reducers from './reducers';

const history = createHistory();
const reduxRouterMiddleware = routerMiddleware(history);

const store = createStore(
  combineReducers({
    ...reducers,
    router: routerReducer
  }),
  applyMiddleware(thunk, logger, reduxRouterMiddleware)
);

export {history};

export default store;