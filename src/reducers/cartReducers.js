import Immutable from 'immutable';
import {
  ADD_GROUP_TO_CART,
  UPDATE_CART_ITEMS_LIST,
  REMOVE_GROUP_FROM_CART,
  EDIT_GROUP_IN_CART,
  UPDATE_GROUP_IN_CART,
  UPDATE_NUMBER_OF_MODULES_IN_CART,
  UPDATE_CART_TOTAL,
  UPDATE_COUPON_DISCOUNT,
  UPDATE_CART_SHIPPING,
  UPDATE_CART_DISCOUNT,
  SET_NEW_NUMBER_OF_MODULES_IN_CART,
  SET_STRIPE_ORDER_ID,
  TOGGLE_STRIPE_IN_PROGRESS,
  EMPTY_CART,
  SET_COUPON_CODE,
} from '../actions/ActionTypes';

const initialState = {
  cartGroups: Immutable.List(),
  cartItems: Immutable.List(),
  cartNumberOfModules: 0,
  cartTotal: 0,
  cartShipping: 0,
  cartDiscount: 0,
  couponCode: '',
  couponDiscount: 0,
  cartGroupEditingID: 0,
  stripeOrderID: '',
  stripeInProgress: false,
};

const cart = (state = initialState, action) => {
  switch (action.type) {
    case ADD_GROUP_TO_CART:
      let foundMatch = false;
      let newGroupsAdded = Immutable.List(
        state.cartGroups.map((group, index) => {
          if (group.ID === action.group.ID) {
            foundMatch = true;
            const updatedGroup = group;
            updatedGroup.quantity += 1;
            return updatedGroup;
          } else {
            return group;
          }
        }),
      );
      newGroupsAdded = foundMatch
        ? newGroupsAdded
        : newGroupsAdded.push(action.group);
      return Object.assign({}, state, {
        cartGroups: newGroupsAdded,
      });
    case REMOVE_GROUP_FROM_CART:
      let newGroupsRemoved = Immutable.List(
        state.cartGroups.map((group, index) => {
          if (group.ID === action.group.ID) {
            if (action.group.quantity > 1) {
              const updatedGroup = group;
              updatedGroup.quantity -= 1;
              return updatedGroup;
            } else return 'remove';
          } else {
            return group;
          }
        }),
      );
      return Object.assign({}, state, {
        cartGroups:
          newGroupsRemoved.indexOf('remove') !== -1
            ? newGroupsRemoved.delete(newGroupsRemoved.indexOf('remove'))
            : newGroupsRemoved,
      });
    case UPDATE_CART_ITEMS_LIST:
      return Object.assign({}, state, {
        cartItems: action.cartItems,
      });
    case EDIT_GROUP_IN_CART:
      return Object.assign({}, state, {
        cartGroupEditingID: action.groupEditingID,
      });
    case UPDATE_GROUP_IN_CART:
      let updatedGroups = Immutable.List(
        state.cartGroups.map((group, index) => {
          if (group.ID === state.cartGroupEditingID) {
            return action.group;
          } else {
            return group;
          }
        }),
      );
      return Object.assign({}, state, {
        cartGroups: updatedGroups,
      });
    case UPDATE_NUMBER_OF_MODULES_IN_CART:
      const newNumberOfModules =
        state.cartNumberOfModules + action.numberOfModules;
      return Object.assign({}, state, {
        cartNumberOfModules: newNumberOfModules,
      });
    case SET_NEW_NUMBER_OF_MODULES_IN_CART:
      return Object.assign({}, state, {
        cartNumberOfModules: action.numberOfModules,
      });
    case UPDATE_CART_TOTAL:
      const newCartTotal = state.cartTotal + action.addToTotal;
      return Object.assign({}, state, {
        cartTotal: newCartTotal,
      });
    case SET_COUPON_CODE:
      return Object.assign({}, state, {
        couponCode: action.newCouponCode,
      });
    case UPDATE_COUPON_DISCOUNT:
      return Object.assign({}, state, {
        couponDiscount: action.newCouponDiscount,
      });
    case UPDATE_CART_SHIPPING:
      return Object.assign({}, state, {
        cartShipping: action.newShippingTotal,
      });
    case UPDATE_CART_DISCOUNT:
      return Object.assign({}, state, {
        cartDiscount: action.newDiscount,
      });
    case SET_STRIPE_ORDER_ID:
      return Object.assign({}, state, {
        stripeOrderID: action.stripeOrderID,
      });
    case TOGGLE_STRIPE_IN_PROGRESS:
      return Object.assign({}, state, {
        stripeInProgress: !state.stripeInProgress,
      });
    case EMPTY_CART:
      return initialState;
    default:
      return state;
  }
};

export default cart;

// WEBPACK FOOTER //
// ./src/reducers/cartReducers.js
