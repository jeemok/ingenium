import React, { Component } from 'react';
import { connect } from 'react-redux';
import { List } from 'immutable';
import { NavLink } from 'react-router-dom';
import styles from './_mobileNav.scss';
// import modulosLogoPositive from '../../../static/images/branding/Modulos_logo-horizontal-positive--web--outlines.svg';
// import modulosLogoNegative from '../../../static/images/branding/Modulos_logo-horizontal-negative--web.svg';
import ReactVivus from 'react-vivus';
// import FontAwesomeIcon from '@fortawesome/react-fontawesome';
// import { faEllipsisHAlt, faShoppingCart } from '@fortawesome/pro-regular-svg-icons';
import classNames from 'classnames/bind';

let cx = classNames.bind(styles);

class MobileNav extends Component {
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
        cartGroupsNumber: List.isList(nextProps.cartGroups) ? nextProps.cartGroups.size : nextProps.cartGroups.length
      });
    }
  }

  render() {
    const displayedLogo = ''; // this.props.isNegative ? modulosLogoNegative : modulosLogoPositive;

    return (
      <header className={cx(styles['nav-wrapper'], styles[this.props.location])}>
        <div className={cx({ 'container': true, 'nav-container': true})}>
          <div className={styles['nav-main']}>
            <div className={styles['nav-left']}>
              <button className={cx({ 'nav-more-button': true, 'active': this.state.extraItemsVisible})} onClick={() => this.toggleExtraItems()}>
                More Icon{/* <FontAwesomeIcon className={styles['nav-more-icon']} icon={faEllipsisHAlt} /> */}
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
                to='/configurator'
                className={styles['nav-configurator']}
                onClick={() => this.toggleExtraItems()}
              >
                Configure yours!
              </NavLink>,
              <NavLink
                to='/store/modules'
                className={styles['nav-link']}
                activeClassName={styles['nav-link-active']}
                onClick={() => this.toggleExtraItems()}
              >
                Modules
              </NavLink>,
              <NavLink
                to='/store/legs'
                className={styles['nav-link']}
                activeClassName={styles['nav-link-active']}
                onClick={() => this.toggleExtraItems()}
              >
                Legs
              </NavLink>,
              <NavLink
                to='/store/addons'
                className={styles['nav-link']}
                activeClassName={styles['nav-link-active']}
                onClick={() => this.toggleExtraItems()}
              >
                Add-ons
              </NavLink>,
              <span className={styles['nav-separator']}></span>,
              <NavLink
                key='materials'
                to='/materials'
                className={styles['nav-link']}
                activeClassName={styles['nav-link-active']}
                onClick={() => this.toggleExtraItems()}
              >
                Materials
              </NavLink>,
              <NavLink
                key='about'
                to='/about-modulos'
                className={styles['nav-link']}
                activeClassName={styles['nav-link-active']}
                onClick={() => this.toggleExtraItems()}
              >
                About Modulos
              </NavLink>,
              <NavLink
                key='story'
                to='/our-story'
                className={styles['nav-link']}
                activeClassName={styles['nav-link-active']}
                onClick={() => this.toggleExtraItems()}
              >
                Our Story
              </NavLink>,
              <NavLink
                key='contact'
                to='/contact'
                className={styles['nav-link']}
                activeClassName={styles['nav-link-active']}
                onClick={() => this.toggleExtraItems()}
              >
                Contact
              </NavLink>,
              <span className={styles['nav-separator']}></span>,
              <NavLink
                to='/for-business'
                className={styles['nav-link']}
                onClick={() => this.toggleExtraItems()}
              >
                For Business
              </NavLink>
            ]}
          </div>
        </div>
      </header>
    );
  }
}

MobileNav.defaultProps = {
  isNegative: false,
  cartNumber: 3,
}

const mapStateToProps = (state, ownProps) => ({
  cartGroups: state.cart.cartGroups,
})

export default connect(
  mapStateToProps
)(MobileNav)



// WEBPACK FOOTER //
// ./src/components/layout/MobileNav.js
