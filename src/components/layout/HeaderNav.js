import React, { Component } from 'react';
import { connect } from 'react-redux';
import { List } from 'immutable';
import { NavLink } from 'react-router-dom';
import styles from './_headerNav.scss';
// import modulosLogoPositive from '../../../static/images/branding/Modulos_logo-horizontal-positive--web--outlines.svg';
// import modulosLogoNegative from '../../../static/images/branding/Modulos_logo-horizontal-negative--web.svg';
import ReactVivus from 'react-vivus';
// import FontAwesomeIcon from '@fortawesome/react-fontawesome';
// import { faEllipsisHAlt, faShoppingCart } from '@fortawesome/pro-regular-svg-icons';
import classNames from 'classnames/bind';

let cx = classNames.bind(styles);

class HeaderNav extends Component {
  constructor(props) {
    super(props);

    this.state = {
      extraItemsVisible: false,
      cartGroupsNumber: List.isList(this.props.cartGroups) ? this.props.cartGroups.size : this.props.cartGroups.length
    };

    this.toggleExtraItems = this.toggleExtraItems.bind(this);
  }

  toggleExtraItems = () => {
    this.setState({
      extraItemsVisible: !this.state.extraItemsVisible,
    });
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.cartGroups !== this.props.cartGroups) {
      this.setState({
        cartGroupsNumber: List.isList(nextProps.cartGroups) ? nextProps.cartGroups.size : nextProps.cartGroups.length,
      });
    }
  }

  render() {
    const displayedLogo = ''; //this.props.isNegative ? modulosLogoNegative : modulosLogoPositive;

    return (
      <header className={cx(styles['nav-wrapper'], styles[this.props.location])}>
        <div className={cx({ 'container': true, 'nav-container': true})}>
          <div className={styles['nav-main']}>
            <div className={styles['nav-left']}>
              <NavLink
                to='/store/modules'
                className={styles['nav-link']}
                activeClassName={styles['nav-link-active']}
              >
                Modules
              </NavLink>
              <NavLink
                to='/store/legs'
                className={styles['nav-link']}
                activeClassName={styles['nav-link-active']}
              >
                Legs
              </NavLink>
              <NavLink
                to='/store/addons'
                className={styles['nav-link']}
                activeClassName={styles['nav-link-active']}
              >
                Add-ons
              </NavLink>
              <span className={styles['nav-separator']}></span>
              <button className={cx({ 'nav-more-button': true, 'active': this.state.extraItemsVisible})} onClick={() => this.toggleExtraItems()}>
                More Icon {/* <FontAwesomeIcon className={styles['nav-more-icon']} icon={faEllipsisHAlt} /> */}
              </button>
            </div>
            <NavLink
              to='/'
              className={styles['logo-container']}
            >
              <ReactVivus
                className={styles['logo']}
                id="logo"
                option={{
                  file: displayedLogo,
                  animTimingFunction: 'EASE_OUT_BOUNCE',
                  type: 'delayed',
                  duration: 150
                }}
              />
            </NavLink>
            <div className={styles['nav-right']}>
              <NavLink
                to='/for-business'
                className={styles['nav-link']}
              >
                For Business
              </NavLink>

              <span className={styles['nav-separator']}></span>
              <NavLink
                to='/configurator'
                className={styles['nav-configurator']}
              >
                Configure yours!
              </NavLink>
              <span className={styles['nav-separator']}></span>
              <NavLink
                to='/store/shopping-cart'
                className={styles['nav-cart']}
              >
                Cart Icon {/* <FontAwesomeIcon className={styles['cart-icon']} icon={faShoppingCart} /> */}
                {this.state.cartGroupsNumber ? (
                  <span className={styles['cart-number']}>{this.state.cartGroupsNumber}</span>
                ) : ''}
              </NavLink>
            </div>
          </div>
          <div className={cx({ 'nav-extra': true, 'visible': this.state.extraItemsVisible})}>
            {this.state.extraItemsVisible && [
              <NavLink
                key='materials'
                to='/materials'
                className={styles['nav-link']}
                activeClassName={styles['nav-link-active']}
              >
                Materials
              </NavLink>,
              <NavLink
                key='about'
                to='/about-modulos'
                className={styles['nav-link']}
                activeClassName={styles['nav-link-active']}
              >
                About Modulos
              </NavLink>,
              <NavLink
                key='story'
                to='/our-story'
                className={styles['nav-link']}
                activeClassName={styles['nav-link-active']}
              >
                Our Story
              </NavLink>,
              <NavLink
                key='contact'
                to='/contact'
                className={styles['nav-link']}
                activeClassName={styles['nav-link-active']}
              >
                Contact
              </NavLink>
            ]}
          </div>
        </div>
      </header>
    );
  }
}

HeaderNav.defaultProps = {
  isNegative: false,
}

const mapStateToProps = (state, ownProps) => ({
  cartGroups: state.cart.cartGroups,
})

export default connect(
  mapStateToProps
)(HeaderNav)



// WEBPACK FOOTER //
// ./src/components/layout/HeaderNav.js
