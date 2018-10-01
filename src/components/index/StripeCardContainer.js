import React, { Component } from 'react';
import fetch from 'cross-fetch';
import { connect } from 'react-redux';
import { Map } from 'immutable';
import { StripeProvider, Elements, CardElement, injectStripe } from 'react-stripe-elements';
import { setStripeOrderID, toggleStripeInProgress, emptyCart, updateLatestOrderId } from '../../actions/Actions';
import styles from './_stripeCardContainer.scss';
import config from '../../config';

const mapStateToProps = (state, ownProps) => ({
  cartItems: state.cart.cartItems,
  userCountry: state.user.userCountry,
  billingInfo: state.user.billingInfo,
  shippingInfo: state.user.shippingInfo,
  cartShipping: state.cart.cartShipping,
  stripeOrderID: state.cart.stripeOrderID,
})

const mapDispatchToProps = dispatch => ({
  setStripeOrderID: stripeOrderID => dispatch(setStripeOrderID(stripeOrderID)),
  updateLatestOrderId: stripeOrderID => dispatch(updateLatestOrderId(stripeOrderID)),
  toggleStripeInProgress: () => dispatch(toggleStripeInProgress()),
  emptyCart: () => dispatch(emptyCart()),
})

class _CardForm extends React.Component {

  render() {
    return (
      <form onSubmit={(ev) => {ev.preventDefault(); this.props.stripe.createToken().then(payload => this.props.paymentFunction(payload))}}>
        <CardElement />
        <button className={styles['place-order-button']} disabled={this.props.disablePaymentButton}>Place my order</button>
      </form>
    )
  }
}

const CardForm = connect(
  mapStateToProps,
  mapDispatchToProps
)(injectStripe(_CardForm))


class StripeCardContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      orderStatus: 'default',
      errorMessage: '',
      stripeOrderID: '',
      readyToPay: false,
      billingInfo: Map.isMap(this.props.billingInfo) ? this.props.billingInfo : Map(this.props.billingInfo),
      shippingInfo: Map.isMap(this.props.shippingInfo) ? this.props.shippingInfo : Map(this.props.shippingInfo)
    };

    this.createStripeOrder = this.createStripeOrder.bind(this);
    this.doPayment = this.doPayment.bind(this);
    this.setReadyToPay = this.setReadyToPay.bind(this);
    this.startPayment = this.startPayment.bind(this);
  }

  handleStatusResult = (orderId) => {
    if (this.state.orderStatus === 'paid') {
      this.props.updateLatestOrderId(orderId);
      this.props.history.push('/store/order/success');
      this.props.emptyCart();
    }
  }

  startPayment = (token) => {
    if (!token.token) {
      this.setState({
        orderStatus: 'error',
        errorMessage: token.error.message
      })
    } else {
      this.props.toggleStripeInProgress();
      this.createStripeOrder(token)
    }
  }

  createStripeOrder = (token) => {
    fetch(config.stripe.createOrderUrl, { // Backend API url
      method: 'POST',
      body: JSON.stringify({
        email: this.state.billingInfo.get('email'),
        items: this.props.cartItems,
        shipping: {
          address: {
            city: this.state.shippingInfo.get('city'),
            country: this.state.shippingInfo.get('country'),
            line1: this.state.shippingInfo.get('addressLine1'),
            line2: this.state.shippingInfo.get('addressLine2'),
            postal_code: this.state.shippingInfo.get('zipCode'),
            state: this.state.shippingInfo.get('state')
          },
          name: this.state.shippingInfo.get('fullName'),
          phone: this.state.shippingInfo.get('phoneNumber'),
        },
        metadata: {
          shippingCost: (this.props.cartShipping*100).toFixed(0),
          billingFullName: this.state.billingInfo.get('fullName'),
          billingEmail: this.state.billingInfo.get('email'),
          billingAddressLine1: this.state.billingInfo.get('addressLine1'),
          billingAddressLine2: this.state.billingInfo.get('addressLine2'),
          billingCity: this.state.billingInfo.get('city'),
          billingState: this.state.billingInfo.get('state'),
          billingZipCode: this.state.billingInfo.get('zipCode'),
          billingCountry: this.state.billingInfo.get('country'),
          billingCompanyName: this.state.billingInfo.get('companyName'),
          billingCompanyTaxId: this.state.billingInfo.get('companyTaxId'),
        }
      }),
      headers: {
        "Content-Type": "application/json"
      }
    })
      .then(response => response.json())
      .then(json => {this.setState({ stripeOrderID: json.order.id }); this.doPayment(json.order.id, token)})
  }

  doPayment = (orderId, token) => {
    const res = fetch(config.stripe.createPaymentUrl, {
      method: 'POST',
      body: JSON.stringify({
        token: token['token']['id'],
        order: orderId
      }),
      headers: {
        "Content-Type": "application/json"
      }
    })
      .then(response => response.json())
      .then(json => this.setState({ orderStatus: json.order.status }, () => this.handleStatusResult(orderId)))
    this.props.toggleStripeInProgress();
  }

  setReadyToPay = () => {
    this.setState({
      readyToPay: !this.state.readyToPay,
    })
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps !== this.props) {
      this.setState({
        billingInfo: Map.isMap(nextProps.billingInfo) ? nextProps.billingInfo : Map(nextProps.billingInfo),
        shippingInfo: Map.isMap(nextProps.shippingInfo) ? nextProps.shippingInfo : Map(nextProps.shippingInfo),
        stripeInProgress: nextProps.stripeInProgress
      })
    }
  }

  render() {

    return (
      <div>
        <StripeProvider apiKey={config.stripe.apiKey}>
          <Elements>
            <CardForm
              paymentFunction = {this.startPayment}
              disablePaymentButton = {this.props.disablePaymentButton}
            />
          </Elements>
        </StripeProvider>
        {(this.state.orderStatus === 'error') ? (
          <span className={styles['card-error']}>
            {this.state.errorMessage}
          </span>
        ) : ''}
      </div>
    );
  }
}

StripeCardContainer.defaultProps = {
  showNotification: true,
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(StripeCardContainer)



// WEBPACK FOOTER //
// ./src/components/index/StripeCardContainer.js
