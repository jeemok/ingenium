import React, { Component } from 'react';
import styles from './_footer.scss';
import { NavLink } from 'react-router-dom';
// import modulosLogoPositive from '../../../static/images/branding/Modulos-logo-positive--web.svg';
// import tpzLogo from '../../../static/images/logos/tpzg-logo.svg';
// import sfzgbLogo from '../../../static/images/logos/sfzgb-logo.svg';
import classNames from 'classnames/bind';

let cx = classNames.bind(styles);

class Footer extends Component {

  render() {

    return (
      <footer className={cx(styles['footer'], styles[this.props.location])}>
        <div className={cx({ 'container': true, 'footer-container': true})}>
          <NavLink
            to="/"
            className={styles['footer-logo-container']}
            >
            {/* <img src={modulosLogoPositive} alt="Modulos" /> */}
          </NavLink>
          <ul className={styles['footer-menu__container']}>
            <li className={styles['footer-menu__group']}>
              <span className={cx(styles['footer-menu__item'], styles['group-title'])}>
                Shop
              </span>
              <NavLink
                to='/configurator'
                className={styles['footer-link']}
                activeClassName={styles['footer-link-active']}
              >
                Configure yours!
              </NavLink>
              <NavLink
                to='/store/modules'
                className={styles['footer-link']}
                activeClassName={styles['footer-link-active']}
              >
                Modules
              </NavLink>
              <NavLink
                to='/store/legs'
                className={styles['footer-link']}
                activeClassName={styles['footer-link-active']}
              >
                Legs
              </NavLink>
              <NavLink
                to='/store/addons'
                className={styles['footer-link']}
                activeClassName={styles['footer-link-active']}
              >
                Add-ons
              </NavLink>
            </li>
            <li className={styles['footer-menu__group']}>
              <span className={cx(styles['footer-menu__item'], styles['group-title'])}>
                About
              </span>
              <NavLink
                key='materials'
                to='/materials'
                className={styles['footer-link']}
                activeClassName={styles['footer-link-active']}
              >
                Materials
              </NavLink>
              <NavLink
                key='about'
                to='/about-modulos'
                className={styles['footer-link']}
                activeClassName={styles['footer-link-active']}
              >
                About Modulos
              </NavLink>
              <NavLink
                key='story'
                to='/our-story'
                className={styles['footer-link']}
                activeClassName={styles['footer-link-active']}
              >
                Our Story
              </NavLink>
            </li>
            <li className={styles['footer-menu__group']}>
              <span className={cx(styles['footer-menu__item'], styles['group-title'])}>
                Learn more
              </span>
              <NavLink
                to='/for-business'
                className={styles['footer-link']}
              >
                For Business
              </NavLink>
              <NavLink
                key='contact'
                to='/contact'
                className={styles['footer-link']}
                activeClassName={styles['footer-link-active']}
              >
                Contact
              </NavLink>
            </li>
            <li className={styles['footer-menu__group']}>
              <span className={cx(styles['footer-menu__item'], styles['group-title'])}>
                Additional info
              </span>
              <NavLink
                to='/shipping-locations'
                className={styles['footer-link']}
                activeClassName={styles['footer-link-active']}
              >
                Shipping
              </NavLink>
              <NavLink
                to='/warranty-returns'
                className={styles['footer-link']}
                activeClassName={styles['footer-link-active']}
              >
                Warranty and returns
              </NavLink>
              <NavLink
                to='/terms-of-service'
                className={styles['footer-link']}
                activeClassName={styles['footer-link-active']}
              >
                Terms of Service
              </NavLink>
              <NavLink
                to='/privacy-policy'
                className={styles['footer-link']}
                activeClassName={styles['footer-link-active']}
              >
                Privacy Policy
              </NavLink>
            </li>
            <li className={styles['footer-menu__group']}>
              <span className={cx(styles['footer-menu__item'], styles['group-title'])}>
                Social media
              </span>
              <a className={styles['footer-link']} href="https://www.facebook.com/modulosdesk">Facebook</a>
              <a className={styles['footer-link']} href="https://www.instagram.com/modulosdesk">Instagram</a>
              <a className={styles['footer-link']} href="https://www.twitter.com/modulosdesk">Twitter</a>
            </li>
          </ul>
        </div>
        <p className={styles['copyright']}>
          Copyright © 2018 Modulos Desk LLC. All rights reserved. Modulos design is patent-pending and industrial design protected.
        </p>
        <div className={styles['footer-proud-member']}>
          <span className={styles['text']}>Proud member of:</span>
          {/* <img className={styles['logo']} src={tpzLogo} alt="Technology Park Zagreb | Logo" /> */}
          <span className={styles['separator']}></span>
          {/* <img className={styles['logo']} src={sfzgbLogo} alt="Startup Factory Zagreb | Logo" /> */}
        </div>
      </footer>
    );
  }
}

export default Footer



// WEBPACK FOOTER //
// ./src/components/layout/Footer.js
