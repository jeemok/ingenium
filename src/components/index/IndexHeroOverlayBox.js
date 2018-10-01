import React, { Component } from 'react';
import styles from './_indexHeroOverlayBox.scss';
// import graphic from '../../../static/images/index/fotka-surface-modules-03.jpg';
import classNames from 'classnames/bind';
import DoubleCta from '../../components/common-elements/DoubleCta';

let cx = classNames.bind(styles);

class IndexHeroOverlayBox extends Component {

  render() {

    return (
      <section className={cx({ 'container-wide': true, 'index-hero-overlay-box': true})}>
        {/* <img className={styles['graphic']} src={graphic} alt='A surface made of square modules' role='presentation' /> */}
        <div className={styles['content']}>
          <h2>A surface made of modules</h2>
          <p>Modulos surface is comprised of Modules - surface tiles each capable of being connected to another one in any direction providing you with infinite possibilities. Since there are various models of modules with different functionalities available, you can create a surface that works the best for you, with functionalities spread out exactly how you like them.</p>
          <p>And if you need to change your desk, you can simply rearrange or add new modules. No need to throw your old desk just because your needs have changed - with Modulos, your desk follows the change of your needs!</p>
          <div className={styles['cta-container']}>
            <DoubleCta
              isSmall
              secondaryCtaText='Shop available modules'
              secondaryCtaTarget='/store/modules'
            />
          </div>
        </div>
      </section>
    );
  }
}

IndexHeroOverlayBox.defaultProps = {
  isNegative: false,
  cartNumber: 3,
}

export default IndexHeroOverlayBox;



// WEBPACK FOOTER //
// ./src/components/index/IndexHeroOverlayBox.js
