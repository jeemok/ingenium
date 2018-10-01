import Immutable from 'immutable';
import {
  UPDATE_CONFIGURATION_SETUP,
  UPDATE_CONFIGURATION_ITEMS,
  SET_CONFIGURATION_LEGS_TYPE,
  CLEAR_CONFIGURATION,
  SET_CONFIGURATION_MODULES_NUMBER,
  SET_CONFIGURATION_MODULES_PRICE,
  SET_CONFIGURATION_LEGS_NUMBER,
  SET_CONFIGURATION_LEGS_PRICE,
} from '../actions/ActionTypes';

const initialState = {
  configurationSetup: Immutable.List.of(Immutable.List()),
  legsType: 'metal-square-715',
  configurationItems: Immutable.List(),
  numberOfModules: 0,
  numberOfLegs: 0,
  priceOfModules: 0,
  priceOfLegs: 0,
};

const configuration = (state = initialState, action) => {
  switch (action.type) {
    case CLEAR_CONFIGURATION:
      return initialState;
    case UPDATE_CONFIGURATION_SETUP:
      return Object.assign({}, state, {
        configurationSetup: action.setup,
      });
    case UPDATE_CONFIGURATION_ITEMS:
      return Object.assign({}, state, {
        configurationItems: action.items,
      });
    case SET_CONFIGURATION_LEGS_TYPE:
      return Object.assign({}, state, {
        legsType: action.legsType,
      });
    case SET_CONFIGURATION_MODULES_NUMBER:
      return Object.assign({}, state, {
        numberOfModules: action.numberOfModules,
      });
    case SET_CONFIGURATION_MODULES_PRICE:
      return Object.assign({}, state, {
        priceOfModules: action.modulesPrice,
      });
    case SET_CONFIGURATION_LEGS_NUMBER:
      return Object.assign({}, state, {
        numberOfLegs: action.numberOfLegs,
      });
    case SET_CONFIGURATION_LEGS_PRICE:
      return Object.assign({}, state, {
        priceOfLegs: action.legsPrice,
      });
    default:
      return state;
  }
};

export default configuration;

// WEBPACK FOOTER //
// ./src/reducers/configuratorReducers.js
