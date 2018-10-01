import React, { Component } from 'react';
import styles from './_contactPromoElement.scss';
// import graphic from '../../../static/images/contact-promo-graphic.png';
import DoubleCta from '../../components/common-elements/DoubleCta';
import classNames from 'classnames/bind';

let cx = classNames.bind(styles);

class ContactPromoElement extends Component {

  render() {

    return (
      <section className={cx(styles['container'], styles['contact-promo-element'])}>
        {/* <img src={graphic} alt='Configure your own desk!' role='presentation' className={styles['image-container']} /> */}
        <h2>Let's get in touch!</h2>
        <p>If your business has needs for larger amounts of desks, or even certain customisations - don't hesitate to contact us!</p>
        <div className={styles['cta-container']}>
          <DoubleCta
            isLarge
            primaryCtaText='Contact us'
            primaryCtaTarget='/contact'
          />
        </div>
      </section>
    );
  }
}

ContactPromoElement.defaultProps = {

}

export default ContactPromoElement;



// WEBPACK FOOTER //
// ./src/components/index/ContactPromoElement.js
