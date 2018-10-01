import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import styles from './_doubleCta.scss';
import classNames from 'classnames/bind';

let cx = classNames.bind(styles);

class DoubleCta extends Component {
  constructor(props) {
    super(props);

    this.state = {
      buyNotificationActive: false,
    };

    this.toggleBuyActive = this.toggleBuyActive.bind(this);
  }

  toggleBuyActive = () => {
    this.setState({
      buyNotificationActive: true,
    });
    setTimeout(function() { this.setState({buyNotificationActive: false}); }.bind(this), 2000);
  }

  render() {

    return (
      <div className={cx({ 'double-cta': true, 'large': this.props.isLarge, 'small': this.props.isSmall})}>
        {this.props.primaryCtaText && (
          this.props.primaryCtaOnClick ? (
            <button
              className={cx({'primary-cta': true, 'buy-button': this.props.primaryIsBuy, 'buy-notification-active': this.state.buyNotificationActive})}
              onClick={() => { this.props.primaryIsBuy && this.toggleBuyActive(); this.props.primaryCtaOnClick(); }}
            >
              {this.props.primaryCtaText}
            </button>
          ) : (
            <NavLink
              to={this.props.primaryCtaTarget}
              className={styles['primary-cta']}
            >
              {this.props.primaryCtaText}
            </NavLink>
          )
        )}
        {this.props.secondaryCtaText && (
          this.props.secondaryCtaOnClick ? (
            <button
              className={cx({'secondary-cta': true, 'buy-button': this.props.secondaryIsBuy, 'buy-notification-active': this.state.buyNotificationActive})}
              onClick={() => { this.props.secondaryIsBuy && this.toggleBuyActive(); this.props.secondaryCtaOnClick(); }}
            >
              {this.props.secondaryCtaText}
            </button>
          ) : (
            <NavLink
              to={this.props.secondaryCtaTarget}
              className={styles['secondary-cta']}
            >
              {this.props.secondaryCtaText}
            </NavLink>
          )
        )}
        {this.props.sideText && (
          <div className={styles['side-text']}>
            {this.props.sideText}
          </div>
        )}
      </div>
    );
  }
}

DoubleCta.defaultProps = {
  primaryIsBuy: false,
  secondaryIsBuy: false,
  isLarge: false,
  isSmall: false,
  primaryCtaText: '',
  primaryCtaTarget: '',
  primaryCtaOnClick: '',
  secondaryCtaText: '',
  secondaryCtaTarget: '',
  secondaryCtaOnClick: '',
  sideText: '',
}

export default DoubleCta;



// WEBPACK FOOTER //
// ./src/components/common-elements/DoubleCta.js
