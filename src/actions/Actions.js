import * as types from '../actions/ActionTypes';

export const updateConfigurationSetup = setup => ({
  type: types.UPDATE_CONFIGURATION_SETUP,
  setup
})

export const clearConfiguration = () => ({
  type: types.CLEAR_CONFIGURATION,
})

export const updateConfigurationItems = items => ({
  type: types.UPDATE_CONFIGURATION_ITEMS,
  items
})

export const setConfigurationLegsType = legsType => ({
  type: types.SET_CONFIGURATION_LEGS_TYPE,
  legsType
})

export const updateNumberOfModulesInConfigurator = numberOfModules => ({
  type: types.SET_CONFIGURATION_MODULES_NUMBER,
  numberOfModules
})

export const updateNumberOfLegsInConfigurator = numberOfLegs => ({
  type: types.SET_CONFIGURATION_LEGS_NUMBER,
  numberOfLegs
})

export const updateModulesPriceInConfigurator = modulesPrice => ({
  type: types.SET_CONFIGURATION_MODULES_PRICE,
  modulesPrice
})

export const updateLegsPriceInConfigurator = legsPrice => ({
  type: types.SET_CONFIGURATION_LEGS_PRICE,
  legsPrice
})

export const addGroupToCart = group => ({
  type: types.ADD_GROUP_TO_CART,
  group
})

export const removeGroupFromCart = group => ({
  type: types.REMOVE_GROUP_FROM_CART,
  group
})

export const updateCartItemsList = cartItems => ({
  type: types.UPDATE_CART_ITEMS_LIST,
  cartItems
})

export const updateGroupInCart = (groupID, group) => ({
  type: types.UPDATE_GROUP_IN_CART,
  groupID,
  group
})

export const editGroupInCart = groupEditingID => ({
  type: types.EDIT_GROUP_IN_CART,
  groupEditingID
})

export const updateNumberOfModulesInCart = numberOfModules => ({
  type: types.UPDATE_NUMBER_OF_MODULES_IN_CART,
  numberOfModules
})

export const setNewNumberOfModulesInCart = numberOfModules => ({
  type: types.SET_NEW_NUMBER_OF_MODULES_IN_CART,
  numberOfModules
})

export const updateCartTotal = addToTotal => ({
  type: types.UPDATE_CART_TOTAL,
  addToTotal
})

export const updateCouponDiscount = newCouponDiscount => ({
  type: types.UPDATE_COUPON_DISCOUNT,
  newCouponDiscount
})

export const setCouponCode = newCouponCode => ({
  type: types.SET_COUPON_CODE,
  newCouponCode
})

export const updateCartDiscount = newDiscount => ({
  type: types.UPDATE_CART_DISCOUNT,
  newDiscount
})

export const updateCartShipping = newShippingTotal => ({
  type: types.UPDATE_CART_SHIPPING,
  newShippingTotal
})

export const emptyCart = () => ({
  type: types.EMPTY_CART
})

export const setStripeOrderID = stripeOrderID => ({
  type: types.SET_STRIPE_ORDER_ID,
  stripeOrderID
})

export const toggleStripeInProgress = () => ({
  type: types.TOGGLE_STRIPE_IN_PROGRESS
})

export const updateBillingInfo = (key, value) => ({
  type: types.UPDATE_BILLING_INFO,
  key,
  value
})

export const updateShippingInfo = (key, value) => ({
  type: types.UPDATE_SHIPPING_INFO,
  key,
  value
})

export const updateUserCountry = (newCountry) => ({
  type: types.UPDATE_USER_COUNTRY,
  newCountry
})

export const updateLatestOrderId = (orderId) => ({
  type: types.UPDATE_LATEST_ORDER_ID,
  orderId
})



// WEBPACK FOOTER //
// ./src/actions/Actions.js
