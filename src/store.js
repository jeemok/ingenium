import { createStore, applyMiddleware, compose } from 'redux';
import { routerMiddleware } from 'react-router-redux';
import thunk from 'redux-thunk';
import createHistory from 'history/createBrowserHistory';
import rootReducer from './reducers';
import { loadState, saveState } from './reducers/localStorage';
import { Map } from 'immutable';

export const history = createHistory();

const initialState = {};
const enhancers = [];
const middleware = [thunk, routerMiddleware(history)];

if (process.env.NODE_ENV === 'development') {
  const devToolsExtension = window.devToolsExtension;

  if (typeof devToolsExtension === 'function') {
    enhancers.push(devToolsExtension());
  }
}

const persistedState = loadState();

const composedEnhancers = compose(
  applyMiddleware(...middleware),
  ...enhancers,
);

const store = createStore(rootReducer, persistedState, composedEnhancers);

store.subscribe(() => {
  saveState({
    cart: {
      cartGroups: store.getState().cart.cartGroups,
      cartItems: store.getState().cart.cartItems,
      cartNumberOfModules: store.getState().cart.cartNumberOfModules,
      cartTotal: store.getState().cart.cartTotal,
      cartShipping: store.getState().cart.cartShipping,
      cartDiscount: store.getState().cart.cartDiscount,
    },
    user: {
      userCountry: store.getState().user.userCountry,
      billingInfo: Map(store.getState().user.billingInfo),
      shippingInfo: Map(store.getState().user.shippingInfo),
    },
  });
});

export default store;

// WEBPACK FOOTER //
// ./src/store.js
