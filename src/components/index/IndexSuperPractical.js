import React, { Component } from 'react';
import styles from './_indexSuperPractical.scss';
// import graphicOne from '../../../static/images/index/super-practical-01.png';
// import graphicTwo from '../../../static/images/index/super-practical-02.png';
// import graphicThree from '../../../static/images/index/super-practical-03.png';
import classNames from 'classnames/bind';
let cx = classNames.bind(styles);

class IndexSuperPractical extends Component {

  render() {

    return (
      <section className={cx({ 'container': true, 'index-super-practical': true})}>
        <div className={styles['intro-text']}>
          <h2>Super practical</h2>
          <p>Getting your new Modulos desk is a breeze! Simply configure your desk, order it and easily assemble it once it arrives! And the beautiful thing is that you can reconfigure your desk later or upgrade it by ordering new modules or legs. Never again experience issues when moving into a new space or redecorating your existing one.</p>
        </div>
        <div className={styles['practicality-items-container']}>
          <div className={styles['item']}>
            <div className={styles['item-image']}>
              {/* <img src={graphicOne} alt='Create your configuration' role='presentation' /> */}
            </div>
            <h3>Create your configuration</h3>
            <p>Use our simple and powerful configurator to create your own desk configuration or, alternatively, add element by element to cart.</p>
          </div>
          <div className={styles['item']}>
            <div className={styles['item-image']}>
              {/* <img src={graphicTwo} alt='Assemble it and enjoy' role='presentation' /> */}
            </div>
            <h3>Assemble it and enjoy</h3>
            <p>Easily assemble your desk once it arrives - we supply you with all the tools needed for assembly.</p>
          </div>
          <div className={styles['item']}>
            <div className={styles['item-image']}>
              {/* <img src={graphicThree} alt='Reconfigure / upgrade' role='presentation' /> */}
            </div>
            <h3>Reconfigure / upgrade</h3>
            <p>Damaged a part of surface? Decided to move or redecorate? Just reconfigure your desk and/or order additional elements from us!</p>
          </div>
        </div>
      </section>
    );
  }
}

IndexSuperPractical.defaultProps = {

}

export default IndexSuperPractical;



// WEBPACK FOOTER //
// ./src/components/index/IndexSuperPractical.js
