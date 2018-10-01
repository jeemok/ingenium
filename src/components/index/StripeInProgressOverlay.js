import React, { Component } from 'react';
import styles from './_stripeInProgressOverlay.scss';

class StripeInProgressOverlay extends Component {

  render() {

    return (
      <div className={styles['stripe-in-progress-overlay']}>
        <span>Processing your payment</span>
      </div>
    );
  }
}

export default StripeInProgressOverlay;



// WEBPACK FOOTER //
// ./src/components/index/StripeInProgressOverlay.js
