import React, { Component } from 'react';
import styles from './_indexConfiguratorPromo.scss';
// import graphic from '../../../static/images/index/configurator-promo.png';
import classNames from 'classnames/bind';
import DoubleCta from '../../components/common-elements/DoubleCta';

let cx = classNames.bind(styles);

class IndexConfiguratorPromo extends Component {

  render() {

    return (
      <section className={cx(styles['container-wide'], styles['index-configurator-promo'])}>
        <div className={cx(styles['container'], styles['content-container'])}>
          <div className={styles['text']}>
            <h2>Configure your own desk using our configurator</h2>
            <p>
              You can shop on our website the old fashion way - browsing our site and adding items to cart. But what we also offer is a powerful configurator tool that allows you to create your own Modulos desk configuration, select and position legs, and even view it in 3D!
            </p>
            <div className={styles['cta-container']}>
              <DoubleCta
                secondaryCtaText='Configure yours!'
                secondaryCtaTarget='/configurator'
              />
            </div>
          </div>
          <div className={styles['image']} style={{backgroundImage: 'url('+ graphic +')'}}>

          </div>
        </div>
      </section>
    );
  }
}

IndexConfiguratorPromo.defaultProps = {

}

export default IndexConfiguratorPromo;



// WEBPACK FOOTER //
// ./src/components/index/IndexConfiguratorPromo.js
