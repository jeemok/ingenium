import React, { Component } from 'react';
import MetaTags from 'react-meta-tags';
import { connect } from 'react-redux';
import { List, Map } from 'immutable';
import {
  addGroupToCart,
  removeGroupFromCart,
  updateNumberOfModulesInCart,
  updateCartTotal,
  updateCartShipping,
  editGroupInCart,
  updateCartItemsList,
  updateCartDiscount,
  setNewNumberOfModulesInCart,
  setCouponCode,
  updateCouponDiscount,
} from '../actions/Actions';
import styles from './_shoppingCartView.scss';
// import deskCutCart from '../../static/images/cart/desk-cut-cart.png';
// import cartEmpty from '../../static/images/cart/empty-state.svg';
import classNames from 'classnames/bind';
import DoubleCta from '../components/common-elements/DoubleCta';
// import FontAwesomeIcon from '@fortawesome/react-fontawesome';
// import { faPlus, faMinus } from '@fortawesome/pro-regular-svg-icons';
import CountrySelector from '../components/index/CountrySelector';
import {
  ShippingSettings,
  ShippingCountries,
  ShippingZones,
} from '../data/ShippingData';
import { AvailableCoupons } from '../data/CouponData';

let cx = classNames.bind(styles);

class ShoppingCartView extends Component {
  constructor(props) {
    super(props);

    this.state = {
      cartGroups: List.isList(this.props.cartGroups)
        ? this.props.cartGroups.toArray()
        : this.props.cartGroups,
      cartItems: this.props.cartItems,
      cartShipping: this.props.cartShipping,
      cartDiscount: this.props.cartDiscount,
      cartTotal: this.props.cartTotal,
      cartNumberOfModules: this.props.cartNumberOfModules,
      customerCountry: this.props.userCountry,
      couponCode: this.props.couponCode,
      couponDiscount: this.props.couponDiscount ? this.props.couponDiscount : 0,
      couponValid: false,
    };
    this.parseConfigurationGroup = this.parseConfigurationGroup.bind(this);
    this.editConfigurationGroup = this.editConfigurationGroup.bind(this);
    this.calculateShipping = this.calculateShipping.bind(this);
    this.updateCartItems = this.updateCartItems.bind(this);
    this.varifyCoupon = this.verifyCoupon.bind(this);
    this.setCoupon = this.setCoupon.bind(this);
    this.calculateCouponDiscount = this.calculateCouponDiscount.bind(this);
  }

  updateCartItems = () => {
    let newCartItemsDict = {};
    this.calculateShipping();
    this.state.cartGroups.forEach((item, index) => {
      if (item.type === 'configuration') {
        item.configurationItems.forEach(function(configurationItem) {
          if (configurationItem) {
            if (newCartItemsDict[configurationItem.sku]) {
              newCartItemsDict[configurationItem.sku] = newCartItemsDict[
                configurationItem.sku
              ].set(
                'quantity',
                newCartItemsDict[configurationItem.sku].get('quantity') +
                  item.quantity,
              );
            } else {
              newCartItemsDict[configurationItem.sku] = Map(configurationItem);
              newCartItemsDict[configurationItem.sku] = newCartItemsDict[
                configurationItem.sku
              ].set('quantity', item.quantity);
            }
          }
        });
      } else {
        if (newCartItemsDict[item.sku]) {
          newCartItemsDict[item.sku] = newCartItemsDict[item.sku].set(
            'quantity',
            newCartItemsDict[item.sku].get('quantity') + item.quantity,
          );
        } else {
          newCartItemsDict[item.sku] = Map(item);
        }
      }
    });
    let newCartItems = [];
    let modulesTotal = 0;
    let modulesNumber = 0;
    let cartTotal = 0;
    for (var key in newCartItemsDict) {
      const itemData = Map(newCartItemsDict[key]);
      if (itemData.get('type') === 'module') {
        modulesTotal += itemData.get('quantity') * itemData.get('price');
        modulesNumber += itemData.get('quantity');
      }
      const itemToAdd = {
        amount: (
          itemData.get('quantity') *
          itemData.get('price') *
          100
        ).toFixed(0),
        currency: 'usd',
        description: itemData.get('itemName'),
        parent: itemData.get('sku'),
        type: 'sku',
        quantity: itemData.get('quantity'),
      };
      newCartItems.push(itemToAdd);
      cartTotal += itemData.get('quantity') * itemData.get('price');
    }
    this.props.updateCartTotal(cartTotal - this.state.cartTotal);
    // const shippingItem = {
    //   "amount": (this.state.cartShipping*100).toFixed(0),
    //   "currency": "usd",
    //   "description": "Shipping to " + this.state.customerCountry,
    //   "type": "shipping"
    // }
    // newCartItems.push(shippingItem);
    if (this.state.couponCode) {
      this.calculateCouponDiscount();
      const couponDiscountItem = {
        amount: (-this.state.couponDiscount * 100).toFixed(0),
        currency: 'usd',
        description:
          'Coupon discount: ' +
          AvailableCoupons[this.state.couponCode].description,
        type: 'discount',
      };
      newCartItems.push(couponDiscountItem);
    }
    this.props.setNewNumberOfModulesInCart(modulesNumber);
    this.props.updateCartItemsList(newCartItems);
  };

  calculateCouponDiscount = () => {
    const tempTotal = this.state.cartTotal + this.state.cartShipping;
    const couponDiscountPercentage =
      AvailableCoupons[this.state.couponCode].amount;
    const newCouponDiscountAmount =
      (tempTotal * couponDiscountPercentage) / 100;
    this.setState(
      {
        couponDiscount: newCouponDiscountAmount,
      },
      () => {
        this.props.updateCouponDiscount(newCouponDiscountAmount);
      },
    );
  };

  verifyCoupon = event => {
    this.setState({
      couponValid: AvailableCoupons[event.currentTarget.value.toUpperCase()]
        ? event.currentTarget.value
        : false,
    });
  };

  setCoupon = () => {
    this.setState(
      {
        couponCode: this.state.couponValid.toUpperCase(),
      },
      () => {
        this.props.setCouponCode(this.state.couponValid.toUpperCase());
        this.updateCartItems();
      },
    );
  };

  calculateShipping = () => {
    let totalWeight = 0;
    this.props.cartGroups.forEach((item, index) => {
      if (item.type === 'configuration') {
        item.configurationItems.forEach(function(configurationItem) {
          if (configurationItem) {
            totalWeight += configurationItem.weight;
          }
        });
      } else {
        totalWeight += item.quantity * item.weight;
      }
    });
    const numberOfLargePackages = Math.floor(
      totalWeight / ShippingSettings.maxPackageWeight,
    );
    const smallestPackageWeight =
      totalWeight % ShippingSettings.maxPackageWeight;
    const countryZone = ShippingCountries[this.state.customerCountry];
    let totalShippingCost =
      numberOfLargePackages *
      ShippingZones[ShippingSettings.maxPackageWeight][countryZone];
    let smallestPackagePriceBase = 0;
    if (smallestPackageWeight === 0) {
      smallestPackagePriceBase = 0;
    } else if (smallestPackageWeight > 20) {
      smallestPackagePriceBase = 40;
    } else if (smallestPackageWeight > 10) {
      smallestPackagePriceBase = 20;
    } else if (smallestPackageWeight > 5) {
      smallestPackagePriceBase = 10;
    } else if (smallestPackageWeight > 1) {
      smallestPackagePriceBase = 5;
    } else {
      smallestPackagePriceBase = 1;
    }
    if (smallestPackagePriceBase) {
      totalShippingCost += ShippingZones[smallestPackagePriceBase][countryZone];
    }
    this.props.updateCartShipping(totalShippingCost);
  };

  parseConfigurationGroup = group => {
    const SKUs = [];
    const itemGroups = {};
    const returnList = [];
    group.configurationItems.forEach((item, index) => {
      if (item) {
        if (SKUs.includes(item.sku)) {
          itemGroups[item.sku].quantity += 1;
        } else {
          itemGroups[item.sku] = {
            itemName: item.itemName,
            itemType: item.itemType,
            moduleMaterial: item.moduleMaterial,
            moduleColor: item.moduleColor,
            quantity: 1,
          };
          SKUs.push(item.sku);
        }
      }
    });
    Object.keys(itemGroups).forEach(function(key) {
      if (itemGroups[key].itemType === 'module') {
        returnList.unshift(
          <span key={itemGroups[key].sku}>
            {itemGroups[key].quantity} x {itemGroups[key].itemName} (
            {itemGroups[key].moduleMaterial} |
            {itemGroups[key].moduleColor})
          </span>,
        );
      } else {
        returnList.push(
          <span key={itemGroups[key].sku}>
            {itemGroups[key].quantity} x {itemGroups[key].itemName}
          </span>,
        );
      }
    });
    return returnList;
  };

  editConfigurationGroup = (groupID, configuratorURL) => {
    this.props.editGroupInCart(groupID);
    this.props.history.push('/configurator#' + configuratorURL);
  };

  componentWillReceiveProps(nextProps) {
    if (nextProps.cartGroups !== this.props.cartGroups) {
      this.setState(
        {
          cartGroups: List.isList(nextProps.cartGroups)
            ? nextProps.cartGroups.toArray()
            : nextProps.cartGroups,
          cartItems: nextProps.cartItems,
          cartShipping: nextProps.cartShipping,
          cartNumberOfModules: nextProps.cartNumberOfModules,
          cartDiscount: nextProps.cartDiscount,
          cartTotal: nextProps.cartTotal,
        },
        () => this.updateCartItems(),
      );
    }
    if (nextProps.userCountry !== this.props.userCountry) {
      this.setState(
        {
          customerCountry: nextProps.userCountry,
        },
        () => this.calculateShipping(),
      );
    }
    if (
      nextProps.couponCode !== this.props.couponCode ||
      nextProps.couponDiscount !== this.props.couponDiscount
    ) {
      this.setState(
        {
          couponCode: nextProps.couponCode,
          couponDiscount: nextProps.couponDiscount,
        },
        () => this.updateCartItems(),
      );
    }
  }

  componentDidMount() {
    window.scrollTo(0, 0);
    this.updateCartItems();
  }

  render() {
    const cartItems = this.state.cartGroups.map((group, index) => {
      return (
        <li
          key={group.ID}
          className={cx(styles['cart-row'], styles['list-row'])}
        >
          <div className={cx(styles['column-image'])}>
            <img src={group.image} alt="" />
          </div>
          <div className={cx(styles['column-description'])}>
            {group.type === 'configuration' ? (
              <div className={styles['configuration-description']}>
                <span className={styles['configuration-title']}>
                  Configuration
                </span>
                {this.parseConfigurationGroup(group)}
              </div>
            ) : (
              group.itemName
            )}
          </div>
          <div className={cx(styles['column-subtotal'])}>
            ${group.price.toFixed(2)}
          </div>
          <div className={cx(styles['column-quantity'])}>
            <button
              className={styles['quantity-add-remove-button']}
              onClick={() => {
                this.props.removeGroupFromCart(group);
                this.updateCartItems();
              }}
            >
              Minus Icon
              {/* <FontAwesomeIcon className={styles['button-icon']} icon={faMinus} /> */}
            </button>
            <span className={styles['quantity-amount']}>{group.quantity}</span>
            <button
              className={styles['quantity-add-remove-button']}
              onClick={() => {
                this.props.addGroupToCart(group);
                this.updateCartItems();
              }}
            >
              Plus Icon
              {/* <FontAwesomeIcon className={styles['button-icon']} icon={faPlus} /> */}
            </button>
          </div>
          <div className={cx(styles['column-buttons'])}>
            {group.type === 'configuration' && (
              <button
                className={styles['configuration-edit-button']}
                onClick={() =>
                  this.editConfigurationGroup(group.ID, group.configurationURL)
                }
              >
                Edit configuration
              </button>
            )}
          </div>
          <div className={cx(styles['column-total'])}>
            ${(group.price * group.quantity).toFixed(2)}
          </div>
        </li>
      );
    });

    return (
      <main
        className={cx(styles['static-page-content'], styles['materials-page'])}
      >
        <MetaTags>
          <title>Shopping cart | Modulos</title>
          <meta name="title" content="Shopping cart | Modulos" />
          <meta
            name="description"
            content="With Modulos, you can customize your work surface to your own individual needs, then customize it again... and again... Get yours now!"
          />
          <meta
            name="keywords"
            content="modulos, desk, modular desk, modular"
          />
          <meta property="og:site_name" content="Modulos" />
          <meta
            property="og:description"
            content="With Modulos, you can customize your work surface to your own individual needs, then customize it again... and again... Get yours now!"
          />
        </MetaTags>
        <section
          className={cx(styles['container'], styles['shopping-cart-header'])}
        >
          <div className={styles['content-left']}>
            <h1>Your shopping cart</h1>
            <p>
              In order for us to be able to give you an estimate of shipping to
              your country, please select it using the dropdown below:
            </p>
            <CountrySelector />
          </div>
          <div className={styles['content-right']}>
            <DoubleCta
              primaryCtaText={cartItems.length ? 'Continue to checkout' : ''}
              primaryCtaTarget={cartItems.length ? '/store/checkout' : ''}
              secondaryCtaText="Continue shopping"
              secondaryCtaTarget="/"
            />
          </div>
        </section>
        <section className={cx(styles['container'], styles['cart-list'])}>
          <ul>
            <li className={cx(styles['cart-row'], styles['list-header'])}>
              <div className={cx(styles['column-image'])} />
              <div className={cx(styles['column-description'])}>
                Item name / Description
              </div>
              <div className={cx(styles['column-subtotal'])}>Item price</div>
              <div className={cx(styles['column-quantity'])}>Quantity</div>
              <div className={cx(styles['column-buttons'])} />
              <div className={cx(styles['column-total'])}>Subtotal</div>
            </li>
            {cartItems.length ? (
              cartItems
            ) : (
              <li
                className={cx(styles['cart-row'], styles['cart-empty-state'])}
              >
                {/* <img className={styles['empty-graphic']} src={cartEmpty} alt="Your cart is empty :(" role="presentation" /> */}
                <p>
                  Your shopping cart is empty, why don't you browse our site or
                  fire up our configurator and add some items?
                </p>
              </li>
            )}
          </ul>
        </section>
        <section className={styles['cart-footer']}>
          <div
            className={cx(styles['container'], styles['cart-footer__content'])}
          >
            {/* <img src={deskCutCart} className={styles['cart-footer-graphic']} alt="Modulos Aeon dark combination" role="presentation" /> */}
            <div className={styles['cart-total']}>
              <ul>
                <li>
                  <span className={styles['label']}>Subtotal:</span>
                  <span className={styles['amount']}>
                    ${this.state.cartTotal.toFixed(2)}
                  </span>
                </li>
                <li>
                  <span className={styles['label']}>
                    Shipping to {this.state.customerCountry} (4-6 weeks):
                  </span>
                  <span className={styles['amount']}>
                    ${this.props.cartShipping.toFixed(2)}
                  </span>
                </li>
                {this.props.couponDiscount ? (
                  <li>
                    <span
                      className={cx(styles['label'], styles['discount-label'])}
                    >
                      Coupon discount:{' '}
                      {AvailableCoupons[this.state.couponCode].description}
                    </span>
                    <span
                      className={cx(
                        styles['amount'],
                        styles['discount-amount'],
                      )}
                    >
                      ${this.props.couponDiscount.toFixed(2)}
                    </span>
                  </li>
                ) : (
                  ''
                )}
                <li className={styles['total']}>
                  <span className={cx(styles['label'], styles['total-label'])}>
                    Total (tax included):
                  </span>
                  <span
                    className={cx(styles['amount'], styles['total-amount'])}
                  >
                    $
                    {(
                      this.props.cartTotal +
                      this.props.cartShipping -
                      this.state.couponDiscount
                    ).toFixed(2)}
                  </span>
                </li>
              </ul>
              {!this.props.couponDiscount ? (
                <div className={styles['coupon-discount-input']}>
                  <h3>
                    Do you have a coupon code?
                    <br />
                    Enter it below for more discount!
                  </h3>
                  <div className={styles['coupon-inputs-container']}>
                    <input
                      onChange={this.verifyCoupon}
                      type="text"
                      className={styles['coupon-input']}
                      placeholder="Coupon code"
                    />
                    {this.state.couponValid ? (
                      <button
                        onClick={() => this.setCoupon()}
                        className={styles['coupon-submit']}
                      >
                        Activate
                      </button>
                    ) : (
                      ''
                    )}
                  </div>
                </div>
              ) : (
                ''
              )}
              <DoubleCta
                primaryCtaText={cartItems.length ? 'Continue to checkout' : ''}
                primaryCtaTarget={cartItems.length ? '/store/checkout' : ''}
                secondaryCtaText="Continue shopping"
                secondaryCtaTarget="/"
              />
            </div>
          </div>
        </section>
      </main>
    );
  }
}

ShoppingCartView.defaultProps = {};

const mapStateToProps = (state, ownProps) => ({
  cartGroups: state.cart.cartGroups,
  cartItems: state.cart.cartItems,
  cartShipping: state.cart.cartShipping,
  cartNumberOfModules: state.cart.cartNumberOfModules,
  cartDiscount: state.cart.cartDiscount,
  couponDiscount: state.cart.couponDiscount,
  couponCode: state.cart.couponCode,
  cartTotal: state.cart.cartTotal,
  userCountry: state.user.userCountry,
});

const mapDispatchToProps = dispatch => ({
  addGroupToCart: group => dispatch(addGroupToCart(group)),
  removeGroupFromCart: group => dispatch(removeGroupFromCart(group)),
  updateNumberOfModulesInCart: numberOfModules =>
    dispatch(updateNumberOfModulesInCart(numberOfModules)),
  setNewNumberOfModulesInCart: numberOfModules =>
    dispatch(setNewNumberOfModulesInCart(numberOfModules)),
  updateCartTotal: addToTotal => dispatch(updateCartTotal(addToTotal)),
  updateCartShipping: newShippingTotal =>
    dispatch(updateCartShipping(newShippingTotal)),
  editGroupInCart: groupEditingID => dispatch(editGroupInCart(groupEditingID)),
  updateCartItemsList: cartItems => dispatch(updateCartItemsList(cartItems)),
  updateCartDiscount: cartDiscount =>
    dispatch(updateCartDiscount(cartDiscount)),
  updateCouponDiscount: couponDiscount =>
    dispatch(updateCouponDiscount(couponDiscount)),
  setCouponCode: newCouponCode => dispatch(setCouponCode(newCouponCode)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(ShoppingCartView);

// WEBPACK FOOTER //
// ./src/views/ShoppingCartView.js
