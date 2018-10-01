import Immutable from 'immutable';
import {
  UPDATE_BILLING_INFO,
  UPDATE_SHIPPING_INFO,
  UPDATE_USER_COUNTRY,
  UPDATE_LATEST_ORDER_ID,
} from '../actions/ActionTypes';

const initialState = {
  userCountry: 'Croatia',
  billingInfo: Immutable.Map({
    fullName: '',
    email: '',
    addressLine1: '',
    addressLine2: '',
    city: '',
    state: '',
    zipCode: '',
    country: '',
    companyName: '',
    companyTaxId: '',
  }),
  shippingInfo: Immutable.Map({
    fullName: '',
    email: '',
    phoneNumber: '',
    addressLine1: '',
    addressLine2: '',
    city: '',
    state: '',
    zipCode: '',
    country: '',
    companyName: '',
  }),
  latestOrderId: '',
};

const user = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_BILLING_INFO:
      return Object.assign({}, state, {
        billingInfo: Immutable.Map(state.billingInfo).set(
          action.key,
          action.value,
        ),
      });
    case UPDATE_SHIPPING_INFO:
      return Object.assign({}, state, {
        shippingInfo: Immutable.Map(state.shippingInfo).set(
          action.key,
          action.value,
        ),
      });
    case UPDATE_USER_COUNTRY:
      return Object.assign({}, state, {
        userCountry: action.newCountry,
      });
    case UPDATE_LATEST_ORDER_ID:
      return Object.assign({}, state, {
        latestOrderId: action.orderId,
      });
    default:
      return state;
  }
};

export default user;

// WEBPACK FOOTER //
// ./src/reducers/userReducers.js
