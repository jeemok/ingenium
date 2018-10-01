import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import configuration from './configuratorReducers';
import cart from './cartReducers';
import user from './userReducers';

export default combineReducers({
  configuration,
  cart,
  user,
  routing: routerReducer,
});

// WEBPACK FOOTER //
// ./src/reducers/index.js
