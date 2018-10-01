import React, { Component } from 'react';
import styles from './_sideMenu.scss';
import classNames from 'classnames/bind';
// import FontAwesomeIcon from '@fortawesome/react-fontawesome';
// import { faCaretUp, faCaretDown } from '@fortawesome/pro-solid-svg-icons';

// import surfaceEditorIcon from '../../../static/images/configurator/surface-editor-icon.svg';
// import legPlacementIcon from '../../../static/images/configurator/leg-placement-icon.svg';
// import threeDeeViewIcon from '../../../static/images/configurator/3d-view-icon.svg';
// import arViewIcon from '../../../static/images/configurator/ar-view-icon.svg';
//
// import instructions3dLeftClick from '../../../static/images/configurator/3d-instructions/3d-left-click.svg';
// import instructions3dRightClick from '../../../static/images/configurator/3d-instructions/3d-right-click.svg';
// import instructions3dScroll from '../../../static/images/configurator/3d-instructions/3d-scroll.svg';
// import instructions3dOneFinger from '../../../static/images/configurator/3d-instructions/3d-one-finger.svg';
// import instructions3dThreeFingers from '../../../static/images/configurator/3d-instructions/3d-three-fingers.svg';
// import instructions3dPinch from '../../../static/images/configurator/3d-instructions/3d-pinch.svg';

import { LegsList, LegsData } from '../../data/LegsData';
// import { ModuleDiscounts } from '../../data/DiscountsData';

let cx = classNames.bind(styles);

class SideMenu extends Component {
  constructor(props) {
    super(props);

    this.state = {
      sideMenuVisible: false,
      totalModulesInCart: this.props.totalModulesInCart,
      totalModulesInConfigurator: this.props.totalModulesInConfigurator,
      currentView: this.props.currentView,
      legsType: this.props.legsType,
      legsPrice: this.props.legsPrice,
      legsCount: this.props.totalLegsInConfigurator,
      configurationDeletePrompt: false,
      legOptionsExpanded: false,
      cartGroupEditingID: this.props.cartGroupEditingID,
      buyNotificationActive: false,
    };

    this.toggleBuyActive = this.toggleBuyActive.bind(this);
    this.triggerDeletePrompt = this.triggerDeletePrompt.bind(this);
    this.updateLegType = this.updateLegType.bind(this);
    this.triggerLegOptions = this.triggerLegOptions.bind(this);
    this.addToCart = this.addToCart.bind(this);
    this.saveEditingGroup = this.saveEditingGroup.bind(this);
    this.cancelEditing = this.cancelEditing.bind(this);
  }

  toggleBuyActive = () => {
    this.setState({
      buyNotificationActive: true,
    });
    setTimeout(function() { this.setState({buyNotificationActive: false}); }.bind(this), 2000);
  }

  deleteConfiguration = () => {
    this.props.clearDataFunction();
  }

  triggerDeletePrompt = () => {
    this.setState({
      configurationDeletePrompt: !this.state.configurationDeletePrompt,
    });
  }

  triggerLegOptions = () => {
    this.setState({
      legOptionsExpanded: !this.state.legOptionsExpanded,
    }, () => {
    });
  }

  updateLegType = ( newType ) => {
    this.setState({
      legsType: newType,
      legOptionsExpanded: false,
    }, () => {
      this.props.legsTypeUpdateFunction(newType);
      this.props.updateLegsPriceInConfiguratorFunction(this.state.legsCount * LegsData[newType].price);
    })
  }

  addToCart = (modulesPrice, otherItemsPrice) => {
    const newCartGroup = {
      ID: (+new Date()).toString(36).slice(-8),
      index: this.props.cartGroups.size,
      quantity: 1,
      type: 'configuration',
      image: '',
      modulesPrice: modulesPrice,
      otherItemsPrice: otherItemsPrice,
      price: modulesPrice + otherItemsPrice,
      configurationSetup: this.props.configurationSetup,
      legsType: this.props.legsType,
      configurationItems: this.props.configurationItems,
      configurationURL: this.props.history.location.hash.substr(1),
    }
    this.props.addGroupToCartFunction(newCartGroup);
    this.props.updateNumberOfModulesInCartFunction(this.state.totalModulesInConfigurator);
    this.props.updateCartTotal(modulesPrice + otherItemsPrice);
    this.props.clearDataFunction();
  }

  saveEditingGroup = (modulesPrice, otherItemsPrice) => {
    const newCartGroup = {
      ID: (+new Date()).toString(36).slice(-8),
      index: this.props.cartGroups.size,
      quantity: 1,
      type: 'configuration',
      image: '',
      modulesPrice: modulesPrice,
      otherItemsPrice: otherItemsPrice,
      price: modulesPrice + otherItemsPrice,
      configurationSetup: this.props.configurationSetup,
      legsType: this.props.legsType,
      configurationItems: this.props.configurationItems,
      configurationURL: this.props.history.location.hash.substr(1),
    }
    this.props.updateGroupInCart(this.state.cartGroupEditingID, newCartGroup);
    this.props.updateNumberOfModulesInCartFunction(this.state.totalModulesInConfigurator);
    this.props.updateCartTotal(modulesPrice + otherItemsPrice);
    this.props.editGroupInCart('');
    this.props.clearDataFunction();
  }

  cancelEditing = () => {
    this.props.editGroupInCart('');
    this.props.clearDataFunction();
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps !== this.props) {
      this.setState({
        totalModulesInCart: nextProps.totalModulesInCart,
        totalModulesInConfigurator: nextProps.totalModulesInConfigurator,
        totalModulesPrice: nextProps.totalModulesPrice,
        legsCount: nextProps.totalLegsInConfigurator,
        legsPrice: nextProps.legsPrice,
        currentView: nextProps.currentView,
        legsType: nextProps.legsType,
        cartGroupEditingID: nextProps.cartGroupEditingID,
      }, () => {
        this.props.updateLegsPriceInConfiguratorFunction(this.state.legsCount * LegsData[this.state.legsType].price);
      })
    }
  }

  componentDidMount() {
    this.setState({
      sideMenuVisible: true,
    })
  }

  render() {
    const totalPrice = this.props.totalModulesPrice + this.state.legsPrice;

    const currentLeg = (
      <li key='current' className={cx({'leg-option': true, 'selected': this.state.legOptionsExpanded})} onClick={() => this.triggerLegOptions()}>
        <div className={styles['image-container']}>
          {/* <img src={LegsData[this.state.legsType].images.configuratorSmall} alt={LegsData[this.state.legsType].legName} role='presentation' /> */}
        </div>
        <div className={styles['info-container']}>
          <span className={styles['leg-name']}>
            {LegsData[this.state.legsType].legName}
          </span>
          <span className={styles['dimensions']}>
            {LegsData[this.state.legsType].legHeight}mm
          </span>
        </div>
        <div className={styles['price']}>
          ${LegsData[this.state.legsType].price} <span>/piece</span>
        </div>
        <div className={styles['caret-space']}>
          {this.state.legOptionsExpanded ? (
            "Up" // <FontAwesomeIcon className={styles['caret-icon']} icon={faCaretUp} />
          ) : (
            "Down" // <FontAwesomeIcon className={styles['caret-icon']} icon={faCaretDown} />
          )}
        </div>
      </li>
    )

    const legOptions = LegsList.map((leg, index) => {
      if (this.state.legsType !== leg) return (
        <li key={index} className={styles['leg-option']} onClick={() => this.updateLegType(leg)}>
          <div className={styles['image-container']}>
            {/* <img src={LegsData[leg].images.configuratorSmall} alt={LegsData[leg].legName} role='presentation' /> */}
          </div>
          <div className={styles['info-container']}>
            <span className={styles['leg-name']}>
              {LegsData[leg].legName}
            </span>
            <span className={styles['dimensions']}>
              {LegsData[leg].legHeight}mm
            </span>
          </div>
          <div className={styles['price']}>
            {LegsData[leg].price} <span>/piece</span>
          </div>
          <div className={styles['caret-space']}>

          </div>
        </li>
      )
    })

    return (
      <div className={cx({'side-menu': true, 'menu-visible': this.state.sideMenuVisible})}>
        <div className={styles['view-selector']}>
          <button className={cx({'view-selector-button': true, 'active': (this.state.currentView === 'surface')})} onClick={() => this.props.viewChangeFunction('surface')}>
            <div className={styles['icon-container']}>
              {/* <img src={surfaceEditorIcon} alt='Surface configuration view' role='presentation' /> */}
            </div>
            <span>Surface editor</span>
          </button>
          <button className={cx({'view-selector-button': true, 'active': (this.state.currentView === 'legs'), 'view-disabled': !(this.state.totalModulesInConfigurator)})} onClick={() => this.props.viewChangeFunction('legs')} disabled={!(this.state.totalModulesInConfigurator)}>
            <div className={styles['icon-container']}>
              {/* <img src={legPlacementIcon} alt='Leg placement view' role='presentation' /> */}
            </div>
            <span>Leg placement</span>
          </button>
          <button className={cx({'view-selector-button': true, 'active': (this.state.currentView === '3d'), 'view-disabled': false})} onClick={() => this.props.viewChangeFunction('3d')}>
            <div className={styles['icon-container']}>
              {/* <img src={threeDeeViewIcon} alt='View your configuration in 3d!' role='presentation' /> */}
            </div>
            <span>3D view</span>
          </button>
          <button className={cx({'view-selector-button': true, 'active': (this.state.currentView === 'ar'), 'view-disabled': true})} onClick={() => this.props.viewChangeFunction('ar')} disabled>
            <div className={styles['icon-container']}>
              {/* <img src={arViewIcon} alt='(BETA): View your configuration in AR!' role='presentation' /> */}
            </div>
            <span>View in AR (beta)</span>
          </button>
        </div>
        {this.state.currentView === '3d' ? (
          <div className={styles['main-content']}>
            <div className={cx(styles['instructions-3d'], styles['desktop-instructions'])}>
              <h3 className={styles['section-title']}>
                Mouse controls:
              </h3>
              <ul className={styles['controls-3d']}>
                <li>
                  {/* <img src={instructions3dLeftClick} alt="Orbit icon" /> */}
                  <span>To <b>orbit</b> hold down left mouse button and move the cursor around</span>
                </li>
                <li>
                  {/* <img src={instructions3dScroll} alt="Zoom icon" /> */}
                  <span>To <b>zoom</b> use your mouse scroll</span>
                </li>
                <li>
                  {/* <img src={instructions3dRightClick} alt="Pan icon" /> */}
                  <span>To <b>pan</b> hold down left mouse button and move the cursor around</span>
                </li>
              </ul>
            </div>
            <div className={cx(styles['instructions-3d'], styles['mobile-instructions'])}>
              <h3 className={styles['section-title']}>
                Touch controls:
              </h3>
              <ul className={styles['controls-3d']}>
                <li>
                  {/* <img src={instructions3dOneFinger} alt="One finger drag around" /> */}
                  <span>To <b>orbit</b> drag around with one finger</span>
                </li>
                <li>
                  {/* <img src={instructions3dPinch} alt="Pinch gesture" /> */}
                  <span>To <b>zoom</b> use the pinch gesture</span>
                </li>
                <li>
                  {/* <img src={instructions3dThreeFingers} alt="Three fingers drag around" /> */}
                  <span>To <b>pan</b> drag around with three fingers</span>
                </li>
              </ul>
            </div>
          </div>
        ) : (
          <div className={styles['main-content']}>
            <div className={styles['legs-setting']}>
              <h3 className={styles['section-title']}>
                Choose your legs:
              </h3>
              <ul>
                {currentLeg}
                {this.state.legOptionsExpanded && legOptions}
              </ul>
            </div>
            <ul className={styles['configuration-info']}>
              <li className={styles['emphasis']}>
                <div className={styles['item']}>
                  Configuration price:
                </div>
              </li>
              <li>
                <div className={styles['item']}>
                  {this.state.totalModulesInConfigurator ? (
                    <span>{this.state.totalModulesInConfigurator} x Module</span>
                  ) : (
                    <span className={'light'}>No modules placed</span>
                  )}
                </div>
                <div className={styles['price']}>
                  ${this.props.totalModulesPrice.toFixed(2)}
                </div>
              </li>
              <li>
                <div className={styles['item']}>
                  {this.state.legsCount ? (
                    <span>{this.state.legsCount} x {LegsData[this.state.legsType].legName}</span>
                  ) : (
                    <span className={'light'}>No legs placed</span>
                  )}
                </div>
                <div className={styles['price']}>
                  ${this.state.legsPrice.toFixed(2)}
                </div>
              </li>
              <li className={styles['emphasis']}>
                <span className={styles['item']}>
                  Total for this configuration:
                </span>
                <span className={styles['price']}>
                  ${totalPrice.toFixed(2)}
                </span>
              </li>
            </ul>
          </div>
        )}
        <div className={styles['main-controls-container']}>
          {this.state.configurationDeletePrompt && (
            <span className={styles['warning-text']}>
              Are you sure you want to delete the current configuration?
            </span>
          )}
          {this.state.cartGroupEditingID ? (
            <div className={styles['dual-cta-container']}>
              <button className={styles['primary-cta']} onClick={() => this.saveEditingGroup(this.props.totalModulesPrice, this.state.legsPrice)}>Update in cart</button>
              <button className={styles['secondary-cta']} onClick={() => this.cancelEditing()}>Cancel editing</button>
            </div>
          ) : (
            !this.state.configurationDeletePrompt ? (
              <div className={styles['dual-cta-container']}>
                <button className={cx({'primary-cta': true, 'buy-button': true, 'buy-notification-active': this.state.buyNotificationActive})} onClick={() => {this.addToCart(this.props.totalModulesPrice, this.state.legsPrice); this.toggleBuyActive();}}>Add to cart</button>
                <button className={styles['secondary-cta']} onClick={() => this.triggerDeletePrompt()}>Start a new configuration</button>
              </div>
            ) : (
              <div className={styles['dual-cta-container']}>
                <button className={styles['primary-cta']} onClick={() => this.triggerDeletePrompt()}>Leave the configuration</button>
                <button className={cx(styles['secondary-cta'], styles['danger'])} onClick={() => this.deleteConfiguration()}>Confirm deletion!</button>
              </div>
            )
          )}
        </div>
      </div>
    );
  }
}

SideMenu.defaultProps = {
  addedModules: [],
  legsType: 'metal-square-715',
}

export default SideMenu;



// WEBPACK FOOTER //
// ./src/components/configurator/SideMenu.js
