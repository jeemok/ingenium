import React, { Component } from 'react';
import styles from './_indexImageConfigurationPin.scss';
import classNames from 'classnames/bind';
import { NavLink } from 'react-router-dom';
// import FontAwesomeIcon from '@fortawesome/react-fontawesome';
// import { faPlus } from '@fortawesome/pro-light-svg-icons';

import { ModulesData } from '../../data/ModulesData';
import { LegsData } from '../../data/LegsData';

let cx = classNames.bind(styles);

class IndexImageConfigurationPin extends Component {
  constructor(props) {
    super(props);

    this.state = {
      pinActive: false,
    };

    this.togglePin = this.togglePin.bind(this);
  }

  togglePin = () => {
    this.setState({
      pinActive: !this.state.pinActive,
    });
  }

  render() {

    return (
      <div className={cx({ 'pin-container': true, 'pin-active': this.state.pinActive })} style={{ top: this.props.locationY, left: this.props.locationX }}>
        <button className={cx({ 'pin-button': true, 'pin-active': this.state.pinActive })} onClick={() => this.togglePin()}>
          Plus icon {/* <FontAwesomeIcon
            icon={faPlus}
            className={styles['button-icon']}
          /> */}
        </button>
        <div className={cx({ 'info-wrapper': true, 'pin-active': this.state.pinActive })}>
          {this.state.pinActive && (
            <div className={cx({ 'info-container': true, 'pin-active': this.state.pinActive, 'no-image': !(this.props.itemImage || this.props.moduleId || this.props.legId) })}>
              <div className={styles['info-main']}>
                {this.props.moduleId && (
                  <span className={styles['item-name']}>{ModulesData[this.props.moduleId].moduleName}</span>
                )}
                {this.props.legId && (
                  <span className={styles['item-name']}>{LegsData[this.props.legId].legName}</span>
                )}
                {this.props.itemName && (
                  <span className={styles['item-name']}>{this.props.itemName}</span>
                )}
                <span className={styles['separator']}></span>
                {this.props.moduleId && (
                  <p className={styles['item-description']}>{ModulesData[this.props.moduleId].shortDescription}</p>
                )}
                {this.props.legId && (
                  <p className={styles['item-description']}>{LegsData[this.props.legId].shortDescription}</p>
                )}
                {this.props.itemDescription && (
                  <p className={styles['item-description']}>{this.props.itemDescription}</p>
                )}
                {this.props.moduleId && (
                  <span className={styles['item-price']}>${ModulesData[this.props.moduleId].materialData[this.props.moduleMaterial][this.props.moduleColor].orientation[this.props.moduleOrientation].price.toFixed(2)}</span>
                )}
                {this.props.legId && (
                  <span className={styles['item-price']}>${LegsData[this.props.legId].price.toFixed(2)}</span>
                )}
                {this.props.itemPrice && (
                  <span className={styles['item-price']}>${this.props.itemPrice.toFixed(2)}</span>
                )}
              </div>
              {this.props.moduleId && (
                <div className={styles['info-graphic']}>
                  <img src={ModulesData[this.props.moduleId].materialData[this.props.moduleMaterial][this.props.moduleColor].perspectiveImage} alt={ModulesData[this.props.moduleId].moduleName} role='presentation' />
                  <span className={styles['graphic-shadow']}></span>
                </div>
              )}
              {this.props.legId && (
                <div className={styles['info-graphic']}>
                  <img src={LegsData[this.props.legId].images.perspectiveImage} alt={LegsData[this.props.legId].legName} role='presentation' />
                  <span className={styles['graphic-shadow']}></span>
                </div>
              )}
              {this.props.itemImage && (
                <div className={styles['info-graphic']}>
                  <img src={this.props.itemImage} alt={this.props.itemName} role='presentation' />
                  <span className={styles['graphic-shadow']}></span>
                </div>
              )}
              {this.props.moduleId && (
                <NavLink
                  to={'/store/modules/' + this.props.moduleId}
                  className={styles['cta']}
                >
                  Learn more
                </NavLink>
              )}
              {this.props.legId && (
                <NavLink
                  to={'/store/legs/' + this.props.legId}
                  className={styles['cta']}
                >
                  Learn more
                </NavLink>
              )}
              {this.props.ctaLabel && (
                <NavLink
                  to={this.props.ctaDestination}
                  className={styles['cta']}
                >
                  {this.props.ctaLabel}
                </NavLink>
              )}
            </div>
          )}
        </div>
      </div>
    );
  }
}

IndexImageConfigurationPin.defaultProps = {
  itemName: '',
  itemDescription: '',
  itemPrice: '',
  itemImage: '',
  locationX: '0%',
  locationY: '0%',
  ctaLabel: '',
  ctaDestination: '',
  moduleId: '',
  moduleMaterial: '',
  moduleColor: '',
  legId: ''
}

export default IndexImageConfigurationPin;



// WEBPACK FOOTER //
// ./src/components/index/IndexImageConfigurationPin.js
