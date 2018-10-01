import React, { Component } from 'react';
import styles from './_configuratorPromoElement.scss';
// import graphic from '../../../static/images/configurator-promo-graphic.png';
import DoubleCta from '../../components/common-elements/DoubleCta';
import classNames from 'classnames/bind';

let cx = classNames.bind(styles);

class ConfiguratorPromoElement extends Component {

  render() {

    return (
      <section className={cx(styles['container'], styles['configurator-promo-element'])}>
        {/* <img src={graphic} alt='Configure your own desk!' role='presentation' className={styles['image-container']} /> */}
        <h2>Configure your own Modulos desk</h2>
        <p>Right from the very beginnings, we have decided we want everything about Modulos to reflect the innovative and practical nature of the core product. That’s why we decided to help you get the best Modulos configuration for you by building an easy to use and helpful web configurator. So go on - give it a go!</p>
        <div className={styles['cta-container']}>
          <DoubleCta
            isLarge
            primaryCtaText='Configure yours now'
            primaryCtaTarget='/configurator'
          />
        </div>
      </section>
    );
  }
}

ConfiguratorPromoElement.defaultProps = {

}

export default ConfiguratorPromoElement;



// WEBPACK FOOTER //
// ./src/components/index/ConfiguratorPromoElement.js
