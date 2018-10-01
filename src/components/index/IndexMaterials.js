import React, { Component } from 'react';
import styles from './_indexMaterials.scss';
// import moduleAeon from '../../../static/images/index/module-cabling-hole--aeon.png';
// import moduleHeritage from '../../../static/images/index/module-cabling-hole--heritage.png';
import classNames from 'classnames/bind';
import VisibilitySensor from 'react-visibility-sensor';
import { NavLink } from 'react-router-dom';
let cx = classNames.bind(styles);

class IndexMaterials extends Component {
  constructor(props) {
    super(props);

    this.state = {
      inView: false,
    };

    this.toggleVisibility = this.toggleVisibility.bind(this);
  }

  toggleVisibility = (isVisible) => {
    this.setState({
      inView: isVisible ? true : false,
    });
  }

  render() {

    return (
      <section className={cx({ 'container-wide': true, 'index-materials': true})}>
        <VisibilitySensor onChange={(isVisible) => this.toggleVisibility(isVisible)} />
        <div className={styles['materials-list']}>
          <div className={cx({ 'material-preview': true, 'preview-left': true, 'in-view': (this.state.inView) })}>
            {/* <img src={moduleAeon} alt='Aeon' role='presentation' /> */}
            <span className={styles['shadow']} />
          </div>
          <div className={styles['materials-text']}>
            <h2>Uncompromising material quality</h2>
            <p>We pride ourselves in our engineering and craftsmanship. However, we know that a top quality product starts with great materials. That’s why, since our very beginning, we have offered only the top quality materials for our modules. Our two product lines, <b>Aeon</b> and <b>Heritage</b>, are based on the materials used - Aeon being based on super hi-tech nano-based ultraresilient materials, and Heritage grounded in the beauty of top quality natural wood.</p>
            <NavLink
              to='/materials'
              className={styles['cta']}
            >
              Learn more about our materials
            </NavLink>
          </div>
          <div className={cx({ 'material-preview': true, 'preview-right': true, 'in-view': (this.state.inView) })}>
            {/* <img src={moduleHeritage} alt='Heritage' role='presentation' /> */}
            <span className={styles['shadow']} />
          </div>
        </div>
      </section>
    );
  }
}

IndexMaterials.defaultProps = {

}

export default IndexMaterials;



// WEBPACK FOOTER //
// ./src/components/index/IndexMaterials.js
