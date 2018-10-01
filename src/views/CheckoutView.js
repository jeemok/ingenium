import React, { Component } from 'react';
import MetaTags from 'react-meta-tags';
import { connect } from 'react-redux';
import { List, Map } from 'immutable';
import {
  updateCartShipping,
  updateShippingInfo,
  updateBillingInfo,
} from '../actions/Actions';
import styles from './_checkoutView.scss';
import classNames from 'classnames/bind';
import CountrySelector from '../components/index/CountrySelector';
import {
  ShippingSettings,
  ShippingCountries,
  ShippingZones,
} from '../data/ShippingData';
import { isEmail } from 'validator';
import StripeCardContainer from '../components/index/StripeCardContainer';
import StripeInProgressOverlay from '../components/index/StripeInProgressOverlay';
import { AvailableCoupons } from '../data/CouponData';

let cx = classNames.bind(styles);

class CheckoutView extends Component {
  constructor(props) {
    super(props);

    this.state = {
      cartGroups: List.isList(this.props.cartGroups)
        ? this.props.cartGroups.toArray()
        : this.props.cartGroups,
      cartShipping: this.props.cartShipping,
      cartTotal: this.props.cartTotal,
      couponCode: this.props.couponCode,
      couponDiscount: this.props.couponDiscount ? this.props.couponDiscount : 0,
      cartNumberOfModules: this.props.cartNumberOfModules,
      customerCountry: this.props.userCountry,
      validations: Map({
        'billing-fullname': true,
        'billing-email': true,
        'billing-companyname': true,
        'billing-companyvatno': true,
        'billing-addressline1': true,
        'billing-addressline2': true,
        'billing-city': true,
        'billing-zipcode': true,
        'billing-country': true,
        'billing-state': true,
        'shipping-fullname': true,
        'shipping-email': true,
        'shipping-phone': true,
        'shipping-companyname': true,
        'shipping-addressline1': true,
        'shipping-addressline2': true,
        'shipping-city': true,
        'shipping-zipcode': true,
        'shipping-state': true,
      }),
      formIsValid: false,
      stripeInProgress: this.props.stripeInProgress,
      billingInfo: Map.isMap(this.props.billingInfo)
        ? this.props.billingInfo
        : Map(this.props.billingInfo),
      shippingInfo: Map.isMap(this.props.shippingInfo)
        ? this.props.shippingInfo
        : Map(this.props.shippingInfo),
    };
    this.calculateShipping = this.calculateShipping.bind(this);
    this.handleInputValidation = this.handleInputValidation.bind(this);
    this.validateForm = this.validateForm.bind(this);
    this.copyBillingToShippingInfo = this.copyBillingToShippingInfo.bind(this);
  }

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

  handleInputValidation = (inputID, value, required, dataType) => {
    let valid = true;
    if (required) {
      value.toString().trim().length ? (valid = true) : (valid = false);
    }
    if (dataType === 'email') {
      isEmail(value) ? (valid = valid && true) : (valid = false);
    }
    this.setState(
      {
        validations: this.state.validations.set(inputID, valid),
      },
      () => this.validateForm(),
    );
  };

  validateForm = () => {
    const validationsTemp = Map({
      'billing-fullname': this.state.billingInfo
        .get('fullName')
        .toString()
        .trim().length
        ? true
        : false,
      'billing-email': isEmail(this.state.billingInfo.get('email'))
        ? true
        : false,
      'billing-companyname': true,
      'billing-companyvatno': true,
      'billing-addressline1': this.state.billingInfo
        .get('addressLine1')
        .toString()
        .trim().length
        ? true
        : false,
      'billing-addressline2': true,
      'billing-city': this.state.billingInfo
        .get('city')
        .toString()
        .trim().length
        ? true
        : false,
      'billing-zipcode': this.state.billingInfo
        .get('zipCode')
        .toString()
        .trim().length
        ? true
        : false,
      'billing-country': true,
      'billing-state':
        (this.state.billingInfo.get('country') === 'USA' &&
          this.state.billingInfo
            .get('state')
            .toString()
            .trim().length) ||
        this.state.billingInfo.get('country') !== 'USA'
          ? true
          : false,
      'shipping-fullname': this.state.shippingInfo
        .get('fullName')
        .toString()
        .trim().length
        ? true
        : false,
      'shipping-email': isEmail(this.state.shippingInfo.get('email'))
        ? true
        : false,
      'shipping-phone': this.state.shippingInfo
        .get('phoneNumber')
        .toString()
        .trim().length
        ? true
        : false,
      'shipping-companyname': true,
      'shipping-addressline1': this.state.shippingInfo
        .get('addressLine1')
        .toString()
        .trim().length
        ? true
        : false,
      'shipping-addressline2': true,
      'shipping-city': this.state.shippingInfo
        .get('city')
        .toString()
        .trim().length
        ? true
        : false,
      'shipping-zipcode': this.state.shippingInfo
        .get('zipCode')
        .toString()
        .trim().length
        ? true
        : false,
      'shipping-state':
        (this.state.shippingInfo.get('country') === 'USA' &&
          this.state.shippingInfo
            .get('state')
            .toString()
            .trim().length) ||
        this.state.shippingInfo.get('country') !== 'USA'
          ? true
          : false,
    });

    this.setState({
      formIsValid: validationsTemp.includes(false) ? false : true,
    });
  };

  copyBillingToShippingInfo = () => {
    this.props.updateShippingInfo(
      'fullName',
      this.state.billingInfo.get('fullName'),
    );
    this.props.updateShippingInfo('email', this.state.billingInfo.get('email'));
    this.props.updateShippingInfo(
      'addressLine1',
      this.state.billingInfo.get('addressLine1'),
    );
    this.props.updateShippingInfo(
      'addressLine2',
      this.state.billingInfo.get('addressLine2'),
    );
    this.props.updateShippingInfo('city', this.state.billingInfo.get('city'));
    this.props.updateShippingInfo('state', this.state.billingInfo.get('state'));
    this.props.updateShippingInfo(
      'zipCode',
      this.state.billingInfo.get('zipCode'),
    );
    this.props.updateShippingInfo(
      'country',
      this.state.billingInfo.get('country'),
    );
    this.props.updateShippingInfo(
      'companyName',
      this.state.billingInfo.get('companyName'),
    );
  };

  componentWillReceiveProps(nextProps) {
    if (nextProps !== this.props) {
      this.setState(
        {
          customerCountry: nextProps.userCountry,
          billingInfo: Map.isMap(nextProps.billingInfo)
            ? nextProps.billingInfo
            : Map(nextProps.billingInfo),
          shippingInfo: Map.isMap(nextProps.shippingInfo)
            ? nextProps.shippingInfo
            : Map(nextProps.shippingInfo),
          stripeInProgress: nextProps.stripeInProgress,
        },
        () => this.calculateShipping(),
      );
    }
  }

  componentDidMount() {
    window.scrollTo(0, 0);
    this.validateForm();
  }

  render() {
    return (
      <main
        className={cx(styles['static-page-content'], styles['materials-page'])}
      >
        <MetaTags>
          <title>Checkout | Modulos</title>
          <meta name="title" content="Checkout | Modulos" />
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
        <section className={cx(styles['container'], styles['checkout-header'])}>
          <div className={styles['content-left']}>
            <h1>Checkout</h1>
            <p>
              Enter your billing, shipping and card information and once you're
              ready to proceed with ordering hit the "Place my order" button.
            </p>
          </div>
          <div className={styles['content-right']} />
        </section>
        <section
          className={cx(
            styles['container'],
            styles['layout'],
            styles['two-columns-layout'],
            styles['customer-info-form'],
          )}
        >
          <div className={styles['column']}>
            <h2>Billing information</h2>
            <p>Let us know of the info we need to issue your invoice.</p>
            <div className={styles['form-fields']}>
              <div className={cx(styles['form-field'], styles['half-width'])}>
                <label>
                  Your full name
                  <span className={styles['required-symbol']}>required</span>
                  <input
                    type="text"
                    placeholder="Name Surname"
                    name="billing-fullname"
                    value={this.state.billingInfo.get('fullName')}
                    onChange={e =>
                      this.props.updateBillingInfo('fullName', e.target.value)
                    }
                    onBlur={e =>
                      this.handleInputValidation(
                        'billing-fullname',
                        e.target.value,
                        true,
                        null,
                      )
                    }
                  />
                </label>
                {!this.state.validations.get('billing-fullname') ? (
                  <span className={styles['input-error']}>
                    Please enter your full name and surname.
                  </span>
                ) : (
                  ''
                )}
              </div>
              <div className={cx(styles['form-field'], styles['half-width'])}>
                <label>
                  Your email address
                  <span className={styles['required-symbol']}>required</span>
                  <input
                    type="email"
                    placeholder="your@email.address"
                    name="billing-email"
                    value={this.state.billingInfo.get('email')}
                    onChange={e =>
                      this.props.updateBillingInfo('email', e.target.value)
                    }
                    onBlur={e =>
                      this.handleInputValidation(
                        'billing-email',
                        e.target.value,
                        true,
                        'email',
                      )
                    }
                  />
                </label>
                {!this.state.validations.get('billing-email') ? (
                  <span className={styles['input-error']}>
                    Please enter your valid email address.
                  </span>
                ) : (
                  ''
                )}
              </div>
              <div className={cx(styles['form-field'], styles['half-width'])}>
                <label>
                  Company name:
                  <input
                    type="text"
                    placeholder="Optional"
                    name="billing-companyname"
                    value={this.state.billingInfo.get('companyName')}
                    onChange={e =>
                      this.props.updateBillingInfo(
                        'companyName',
                        e.target.value,
                      )
                    }
                    onBlur={e =>
                      this.handleInputValidation(
                        'billing-companyname',
                        e.target.value,
                        false,
                        null,
                      )
                    }
                  />
                </label>
              </div>
              <div className={cx(styles['form-field'], styles['half-width'])}>
                <label>
                  Company VAT number:
                  <input
                    type="text"
                    placeholder="Optional"
                    name="billing-companyvatno"
                    value={this.state.billingInfo.get('companyTaxId')}
                    onChange={e =>
                      this.props.updateBillingInfo(
                        'companyTaxId',
                        e.target.value,
                      )
                    }
                    onBlur={e =>
                      this.handleInputValidation(
                        'billing-companyvatno',
                        e.target.value,
                        false,
                        null,
                      )
                    }
                  />
                </label>
              </div>
              <div className={styles['form-field']}>
                <label>
                  Address line 1
                  <span className={styles['required-symbol']}>required</span>
                  <input
                    type="text"
                    placeholder="Street name 1"
                    name="billing-addressline1"
                    value={this.state.billingInfo.get('addressLine1')}
                    onChange={e =>
                      this.props.updateBillingInfo(
                        'addressLine1',
                        e.target.value,
                      )
                    }
                    onBlur={e =>
                      this.handleInputValidation(
                        'billing-addressline1',
                        e.target.value,
                        true,
                        null,
                      )
                    }
                  />
                </label>
                {!this.state.validations.get('billing-addressline1') ? (
                  <span className={styles['input-error']}>
                    Please enter a valid address.
                  </span>
                ) : (
                  ''
                )}
              </div>
              <div className={styles['form-field']}>
                <label>
                  Address line 2:
                  <input
                    type="text"
                    placeholder="Optional"
                    name="billing-addressline2"
                    value={this.state.billingInfo.get('addressLine2')}
                    onChange={e =>
                      this.props.updateBillingInfo(
                        'addressLine2',
                        e.target.value,
                      )
                    }
                    onBlur={e =>
                      this.handleInputValidation(
                        'billing-addressline2',
                        e.target.value,
                        false,
                        null,
                      )
                    }
                  />
                </label>
              </div>
              <div className={cx(styles['form-field'], styles['half-width'])}>
                <label>
                  City
                  <span className={styles['required-symbol']}>required</span>
                  <input
                    type="text"
                    placeholder="City name"
                    name="billing-city"
                    value={this.state.billingInfo.get('city')}
                    onChange={e =>
                      this.props.updateBillingInfo('city', e.target.value)
                    }
                    onBlur={e =>
                      this.handleInputValidation(
                        'billing-city',
                        e.target.value,
                        true,
                        null,
                      )
                    }
                  />
                </label>
                {!this.state.validations.get('billing-city') ? (
                  <span className={styles['input-error']}>
                    Please enter a city name.
                  </span>
                ) : (
                  ''
                )}
              </div>
              <div className={cx(styles['form-field'], styles['half-width'])}>
                <label>
                  Zip code
                  <span className={styles['required-symbol']}>required</span>
                  <input
                    type="text"
                    placeholder="00000"
                    name="billing-zipcode"
                    value={this.state.billingInfo.get('zipCode')}
                    onChange={e =>
                      this.props.updateBillingInfo('zipCode', e.target.value)
                    }
                    onBlur={e =>
                      this.handleInputValidation(
                        'billing-zipcode',
                        e.target.value,
                        true,
                        null,
                      )
                    }
                  />
                </label>
                {!this.state.validations.get('billing-zipcode') ? (
                  <span className={styles['input-error']}>
                    Please enter a ZIP code.
                  </span>
                ) : (
                  ''
                )}
              </div>
              <div className={cx(styles['form-field'], styles['half-width'])}>
                <label>
                  Country
                  <span className={styles['required-symbol']}>required</span>
                  <CountrySelector />
                </label>
              </div>
              {this.state.billingInfo.get('country') === 'USA' ? (
                <div className={cx(styles['form-field'], styles['half-width'])}>
                  <label>
                    State
                    <span className={styles['required-symbol']}>required</span>
                    <input
                      type="text"
                      placeholder="US Only"
                      name="shipping-state"
                      value={this.state.billingInfo.get('state')}
                      onChange={e =>
                        this.props.updateBillingInfo('state', e.target.value)
                      }
                      onBlur={e =>
                        this.handleInputValidation(
                          'shipping-state',
                          e.target.value,
                          true,
                          null,
                        )
                      }
                    />
                  </label>
                  {!this.state.validations.get('billing-state') ? (
                    <span className={styles['input-error']}>
                      Please enter your state.
                    </span>
                  ) : (
                    ''
                  )}
                </div>
              ) : (
                ''
              )}
              <div className={styles['info-copy-button__container']}>
                <button
                  className={styles['info-copy-button']}
                  onClick={() => this.copyBillingToShippingInfo()}
                >
                  Copy info above to shipping info
                </button>
              </div>
            </div>
          </div>
          <div className={styles['column']}>
            <h2>Shipping information</h2>
            <p>Let us know where you want your awesome goods sent to.</p>
            <div className={styles['form-fields']}>
              <div className={cx(styles['form-field'], styles['half-width'])}>
                <label>
                  Full name
                  <span className={styles['required-symbol']}>required</span>
                  <input
                    type="text"
                    placeholder="Name Surname"
                    name="shipping-fullname"
                    value={this.state.shippingInfo.get('fullName')}
                    onChange={e =>
                      this.props.updateShippingInfo('fullName', e.target.value)
                    }
                    onBlur={e =>
                      this.handleInputValidation(
                        'shipping-fullname',
                        e.target.value,
                        true,
                        null,
                      )
                    }
                  />
                </label>
                {!this.state.validations.get('shipping-fullname') ? (
                  <span className={styles['input-error']}>
                    Please enter your full name and surname.
                  </span>
                ) : (
                  ''
                )}
              </div>
              <div className={cx(styles['form-field'], styles['half-width'])}>
                <label>
                  Contact email address
                  <span className={styles['required-symbol']}>required</span>
                  <input
                    type="email"
                    placeholder="your@email.address"
                    name="shipping-email"
                    value={this.state.shippingInfo.get('email')}
                    onChange={e =>
                      this.props.updateShippingInfo('email', e.target.value)
                    }
                    onBlur={e =>
                      this.handleInputValidation(
                        'shipping-email',
                        e.target.value,
                        true,
                        'email',
                      )
                    }
                  />
                </label>
                {!this.state.validations.get('shipping-email') ? (
                  <span className={styles['input-error']}>
                    Please enter a valid email address here.
                  </span>
                ) : (
                  ''
                )}
              </div>
              <div className={cx(styles['form-field'], styles['half-width'])}>
                <label>
                  Contact phone number
                  <span className={styles['required-symbol']}>required</span>
                  <input
                    type="tel"
                    placeholder="+0000000000"
                    name="shipping-phone"
                    value={this.state.shippingInfo.get('phoneNumber')}
                    onChange={e =>
                      this.props.updateShippingInfo(
                        'phoneNumber',
                        e.target.value,
                      )
                    }
                    onBlur={e =>
                      this.handleInputValidation(
                        'shipping-phone',
                        e.target.value,
                        true,
                        null,
                      )
                    }
                  />
                </label>
                {!this.state.validations.get('shipping-phone') ? (
                  <span className={styles['input-error']}>
                    Please enter a valid phone number here.
                  </span>
                ) : (
                  ''
                )}
              </div>
              <div className={cx(styles['form-field'], styles['half-width'])}>
                <label>
                  Company name:
                  <input
                    type="text"
                    placeholder="Optional"
                    name="shipping-companyname"
                    value={this.state.shippingInfo.get('companyName')}
                    onChange={e =>
                      this.props.updateShippingInfo(
                        'companyName',
                        e.target.value,
                      )
                    }
                    onBlur={e =>
                      this.handleInputValidation(
                        'shipping-companyname',
                        e.target.value,
                        false,
                        null,
                      )
                    }
                  />
                </label>
              </div>
              <div className={styles['form-field']}>
                <label>
                  Address line 1
                  <span className={styles['required-symbol']}>required</span>
                  <input
                    type="text"
                    placeholder="Street name 1"
                    name="shipping-addressline1"
                    value={this.state.shippingInfo.get('addressLine1')}
                    onChange={e =>
                      this.props.updateShippingInfo(
                        'addressLine1',
                        e.target.value,
                      )
                    }
                    onBlur={e =>
                      this.handleInputValidation(
                        'shipping-addressline1',
                        e.target.value,
                        true,
                        null,
                      )
                    }
                  />
                </label>
                {!this.state.validations.get('shipping-addressline1') ? (
                  <span className={styles['input-error']}>
                    Please enter a valid address.
                  </span>
                ) : (
                  ''
                )}
              </div>
              <div className={styles['form-field']}>
                <label>
                  Address line 2:
                  <input
                    type="text"
                    placeholder="Optional"
                    name="shipping-addressline2"
                    value={this.state.shippingInfo.get('addressLine2')}
                    onChange={e =>
                      this.props.updateShippingInfo(
                        'addressLine2',
                        e.target.value,
                      )
                    }
                    onBlur={e =>
                      this.handleInputValidation(
                        'shipping-addressline2',
                        e.target.value,
                        false,
                        null,
                      )
                    }
                  />
                </label>
              </div>
              <div className={cx(styles['form-field'], styles['half-width'])}>
                <label>
                  City
                  <span className={styles['required-symbol']}>required</span>
                  <input
                    type="text"
                    placeholder="City name"
                    name="shipping-city"
                    value={this.state.shippingInfo.get('city')}
                    onChange={e =>
                      this.props.updateShippingInfo('city', e.target.value)
                    }
                    onBlur={e =>
                      this.handleInputValidation(
                        'shipping-city',
                        e.target.value,
                        true,
                        null,
                      )
                    }
                  />
                </label>
                {!this.state.validations.get('shipping-city') ? (
                  <span className={styles['input-error']}>
                    Please enter a city.
                  </span>
                ) : (
                  ''
                )}
              </div>
              <div className={cx(styles['form-field'], styles['half-width'])}>
                <label>
                  Zip code
                  <span className={styles['required-symbol']}>required</span>
                  <input
                    type="text"
                    placeholder="00000"
                    name="shipping-zipcode"
                    value={this.state.shippingInfo.get('zipCode')}
                    onChange={e =>
                      this.props.updateShippingInfo('zipCode', e.target.value)
                    }
                    onBlur={e =>
                      this.handleInputValidation(
                        'shipping-zipcode',
                        e.target.value,
                        true,
                        null,
                      )
                    }
                  />
                </label>
                {!this.state.validations.get('shipping-zipcode') ? (
                  <span className={styles['input-error']}>
                    Please enter a ZIP code.
                  </span>
                ) : (
                  ''
                )}
              </div>
              <div className={cx(styles['form-field'], styles['half-width'])}>
                <label>
                  Country
                  <span className={styles['required-symbol']}>required</span>
                  <CountrySelector />
                </label>
              </div>
              {this.state.shippingInfo.get('country') === 'USA' ? (
                <div className={cx(styles['form-field'], styles['half-width'])}>
                  <label>
                    State
                    <span className={styles['required-symbol']}>required</span>
                    <input
                      type="text"
                      placeholder="US Only"
                      name="shipping-state"
                      value={this.state.shippingInfo.get('state')}
                      onChange={e =>
                        this.props.updateShippingInfo('state', e.target.value)
                      }
                      onBlur={e =>
                        this.handleInputValidation(
                          'shipping-state',
                          e.target.value,
                          true,
                          null,
                        )
                      }
                    />
                  </label>
                  {!this.state.validations.get('shipping-state') ? (
                    <span className={styles['input-error']}>
                      Please enter your state.
                    </span>
                  ) : (
                    ''
                  )}
                </div>
              ) : (
                ''
              )}
            </div>
          </div>
        </section>
        <section className={styles['checkout-footer']}>
          <div
            className={cx(
              styles['container'],
              styles['checkout-footer__content'],
            )}
          >
            <div className={styles['checkout-footer__card']}>
              <StripeCardContainer
                disablePaymentButton={!this.state.formIsValid}
                history={this.props.history}
              />
            </div>
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
                    Shipping to {this.state.customerCountry}:
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
            </div>
          </div>
        </section>
        {this.state.stripeInProgress ? <StripeInProgressOverlay /> : ''}
      </main>
    );
  }
}

CheckoutView.defaultProps = {};

const mapStateToProps = (state, ownProps) => ({
  cartGroups: state.cart.cartGroups,
  cartShipping: state.cart.cartShipping,
  cartNumberOfModules: state.cart.cartNumberOfModules,
  cartTotal: state.cart.cartTotal,
  userCountry: state.user.userCountry,
  billingInfo: state.user.billingInfo,
  shippingInfo: state.user.shippingInfo,
  stripeInProgress: state.cart.stripeInProgress,
  couponDiscount: state.cart.couponDiscount,
  couponCode: state.cart.couponCode,
});

const mapDispatchToProps = dispatch => ({
  updateCartShipping: newShippingTotal =>
    dispatch(updateCartShipping(newShippingTotal)),
  updateBillingInfo: (key, value) => dispatch(updateBillingInfo(key, value)),
  updateShippingInfo: (key, value) => dispatch(updateShippingInfo(key, value)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(CheckoutView);

// WEBPACK FOOTER //
// ./src/views/CheckoutView.js
