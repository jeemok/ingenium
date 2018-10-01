import React, { Component } from 'react';
import MetaTags from 'react-meta-tags';
import { connect } from 'react-redux';
import {
  updateConfigurationSetup,
  clearConfiguration,
  setConfigurationLegsType,
  updateConfigurationItems,
  addGroupToCart,
  updateNumberOfModulesInCart,
  updateCartTotal,
  updateNumberOfModulesInConfigurator,
  updateNumberOfLegsInConfigurator,
  updateModulesPriceInConfigurator,
  updateLegsPriceInConfigurator,
  updateGroupInCart,
  editGroupInCart,
} from '../actions/Actions';
import { List } from 'immutable';
import styles from './_configuratorView.scss';
import EditingCanvas from '../components/configurator/EditingCanvas';
import SideMenu from '../components/configurator/SideMenu';
import SideMenuAddModule from '../components/configurator/SideMenuAddModule';
import ThreeDeeTest from '../components/configurator/ThreeDeeTest';
import { LegsData } from '../data/LegsData';
import { ModulesData } from '../data/ModulesData';
// import shareImage from '../../static/images/index/modulos-4x2conf.jpg';

class ConfiguratorView extends Component {
  constructor(props) {
    super(props);

    this.state = {
      configurationSetup: this.props.configurationSetup,
      configurationItems: this.props.configurationItems,
      totalModulesInCart: this.props.cartNumberOfModules,
      totalModulesPrice: this.props.priceOfModules,
      totalModulesInConfigurator: this.props.numberOfModules,
      totalLegsInConfigurator: this.props.numberOfLegs,
      totalLegsPrice: this.props.priceOfLegs,
      addModuleActive: false,
      replaceModule: false,
      legsType: this.props.configurationLegsType,
      dataUpdatePosition: [],
      currentView: 'surface',
      lastMaterialAdded: 'Aeon',
      lastColorAdded: 'dark',
      lastOrientationAdded: 'universal',
    };

    this.switchView = this.switchView.bind(this);
    this.enableAddModuleMenu = this.enableAddModuleMenu.bind(this);
    this.updateData = this.updateData.bind(this);
    this.updateItemsList = this.updateItemsList.bind(this);
    this.disableAddModuleMenu = this.disableAddModuleMenu.bind(this);
    this.updateUrl = this.updateUrl.bind(this);
    this.getDataFromUrl = this.getDataFromUrl.bind(this);
  }

  switchView = newView => {
    this.setState({
      currentView: newView,
    });
  };

  enableAddModuleMenu = (dataUpdatePosition, replaceModule) => {
    this.setState({
      dataUpdatePosition: dataUpdatePosition,
      addModuleActive: true,
      replaceModule: replaceModule,
    });
  };

  disableAddModuleMenu = () => {
    this.setState({
      addModuleActive: false,
      dataUpdatePosition: [],
    });
  };

  setLastMaterialAdded = (material, color, orientation) => {
    this.setState({
      lastMaterialAdded: material,
      lastColorAdded: color,
      lastOrientationAdded: orientation,
    });
  };

  updateData(positionX, positionY, newData) {
    let updatedData = this.state.configurationSetup;
    if (
      updatedData.get(0).size === 1 &&
      updatedData.size === 1 &&
      newData === undefined
    ) {
      updatedData = List.of(List());
    } else if (updatedData.get(0).size) {
      if (positionY === 0) {
        let tempRow = List();
        tempRow = tempRow.set(updatedData.get(0).size - 1, undefined);
        updatedData = updatedData.unshift(tempRow);
      } else if (positionY > updatedData.size) {
        let tempRow = List();
        tempRow = tempRow.set(updatedData.get(0).size - 1, undefined);
        updatedData = updatedData.push(tempRow);
      }
      if (positionX === 0) {
        updatedData = List(
          updatedData.map((row, y) => {
            let tempRow = List(row);
            tempRow = tempRow.unshift(undefined);
            return tempRow;
          }),
        );
      } else if (positionX > updatedData.get(0).size) {
        updatedData = List(
          updatedData.map((row, y) => {
            let tempRow = List(row);
            tempRow = tempRow.push(undefined);
            return tempRow;
          }),
        );
      }
      // update data
      if (positionX === 0) {
        updatedData = updatedData.setIn([positionY - 1, positionX], newData);
      } else {
        if (positionY === 0) {
          updatedData = updatedData.setIn([positionY, positionX - 1], newData);
        } else {
          updatedData = updatedData.setIn(
            [positionY - 1, positionX - 1],
            newData,
          );
        }
      }
    } else {
      updatedData = updatedData.setIn([positionY, positionX], newData);
    }

    this.props.updateConfigurationSetup(updatedData);
    this.disableAddModuleMenu();
    this.updateItemsList();
    this.updateUrl(updatedData, this.props.configurationLegsType);
  }

  updateUrl = (updatedData, legsType) => {
    const urlHash = encodeURIComponent(
      btoa(JSON.stringify([updatedData, this.state.legsType])),
    );
    this.props.history.replace('/configurator#' + urlHash);
  };

  getDataFromUrl = () => {
    const reversedUrlHashData = JSON.parse(
      atob(decodeURIComponent(this.props.history.location.hash.substr(1))),
    );
    const reversedUrlHashImmutable = List(
      reversedUrlHashData[0].map((row, index) => {
        return List(row);
      }),
    );
    this.props.updateConfigurationSetup(reversedUrlHashImmutable);
    this.props.setConfigurationLegsType(reversedUrlHashData[1]);
    this.updateItemsList();
  };

  updateItemsList = () => {
    let modulesNumber = 0;
    let legsNumber = 0;
    let newTotalModulesPrice = 0;
    const newItemsList = List(
      this.state.configurationSetup.map((row, y) => {
        const rowsData = List(
          row.map((item, x) => {
            if (item && item !== null) {
              modulesNumber += 1;
              newTotalModulesPrice +=
                ModulesData[item.moduleName].materialData[item.material][
                  item.color
                ].orientation[item.orientation].price;
              let itemsToAdd = List.of({
                type: 'module',
                itemName: ModulesData[item.moduleName].moduleName,
                sku:
                  ModulesData[item.moduleName].materialData[item.material][
                    item.color
                  ].orientation[item.orientation].sku,
                moduleMaterial: item.material,
                moduleColor: item.color,
                price:
                  ModulesData[item.moduleName].materialData[item.material][
                    item.color
                  ].orientation[item.orientation].price,
                weight:
                  ModulesData[item.moduleName].materialData[item.material][
                    item.color
                  ].orientation[item.orientation].weight,
                id: item.moduleName,
              });
              Object.keys(item.legPositions).forEach(key => {
                if (item.legPositions[key]) {
                  legsNumber += 1;
                  itemsToAdd = itemsToAdd.push({
                    type: 'leg',
                    itemName: LegsData[this.state.legsType].legName,
                    sku: LegsData[this.state.legsType].sku,
                    price: LegsData[this.state.legsType].price,
                    weight: LegsData[this.state.legsType].weight,
                    id: this.state.legsType,
                  });
                }
              });
              return itemsToAdd;
            }
          }),
        );
        return rowsData.flatten();
      }),
    );
    this.setState(
      {
        totalModulesInConfigurator: modulesNumber,
        totalLegsInConfigurator: legsNumber,
        configurationItems: newItemsList.flatten(),
        totalModulesPrice: newTotalModulesPrice,
      },
      () => {
        this.props.updateConfigurationItems(newItemsList.flatten());
        this.props.updateNumberOfModulesInConfigurator(modulesNumber);
        this.props.updateNumberOfLegsInConfigurator(legsNumber);
        this.props.updateModulesPriceInConfigurator(newTotalModulesPrice);
      },
    );
  };

  componentWillReceiveProps(nextProps) {
    if (nextProps.configurationSetup !== this.props.configurationSetup) {
      this.setState(
        {
          configurationSetup: nextProps.configurationSetup,
          totalModulesInConfigurator: nextProps.numberOfModules,
          totalLegsInConfigurator: nextProps.numberOfLegs,
          totalModulesPrice: nextProps.priceOfModules,
          totalLegsPrice: nextProps.priceOfLegs,
        },
        () => this.updateItemsList(),
      );
    }
    if (nextProps.configurationLegsType !== this.props.configurationLegsType) {
      this.setState(
        {
          legsType: nextProps.configurationLegsType,
          configurationItems: nextProps.configurationItems,
          totalLegsPrice: nextProps.priceOfLegs,
        },
        () => {
          this.updateItemsList();
          this.updateUrl(
            nextProps.configurationSetup,
            nextProps.configurationLegsType,
          );
        },
      );
    }
    if (nextProps.cartNumberOfModules !== this.props.cartNumberOfModules) {
      this.setState({
        totalModulesInCart: nextProps.cartNumberOfModules,
      });
    }
    if (nextProps.history.location !== this.props.history.location) {
      this.getDataFromUrl();
    }
  }

  componentDidMount() {
    window.scrollTo(0, 0);
    this.props.history.location.hash && this.getDataFromUrl();
  }

  render() {
    return (
      <main className={styles['configurator-wrapper']}>
        <MetaTags>
          <title>Create your own desk! | Modulos</title>
          <meta name="title" content="Create your own desk! | Modulos" />
          <meta
            name="description"
            content="With Modulos, you can customize your work surface to your own individual needs, then customize it again... and again... Get yours now!"
          />
          <meta
            name="keywords"
            content="modulos, desk, modular desk, modular"
          />
          <meta property="og:site_name" content="Modulos" />
          <meta
            property="og:description"
            content="With Modulos, you can customize your work surface to your own individual needs, then customize it again... and again... Get yours now!"
          />
          {/* <meta property="og:image" content={shareImage} /> */}
          <link
            rel="canonical"
            href="https://www.modulosdesk.com/configurator"
          />
        </MetaTags>
        <div className={styles['configurator-view']}>
          {(this.state.currentView === 'surface' ||
            this.state.currentView === 'legs') && (
            <EditingCanvas
              addedModules={this.state.addedModules}
              currentView={this.state.currentView}
              updateConfigurationDataFunction={this.updateData}
              toggleAddModuleMenuFunction={this.enableAddModuleMenu}
              editingEnabled={this.state.addModuleActive}
              dataUpdatePosition={this.state.dataUpdatePosition}
            />
          )}
          {this.state.currentView === '3d' && (
            <ThreeDeeTest
              addedModules={this.state.addedModules}
              legsType={this.state.legsType}
            />
          )}
          {this.state.addModuleActive ? (
            <SideMenuAddModule
              addedModules={this.state.configurationSetup}
              updateConfigurationDataFunction={this.updateData}
              dataUpdatePosition={this.state.dataUpdatePosition}
              replaceModule={this.state.replaceModule}
              totalModulesInCart={this.state.totalModulesInCart}
              totalModulesInConfigurator={this.state.totalModulesInConfigurator}
              disableAddModuleMenuFunction={this.disableAddModuleMenu}
              lastMaterialAdded={this.state.lastMaterialAdded}
              lastColorAdded={this.state.lastColorAdded}
              lastOrientationAdded={this.state.lastOrientationAdded}
              setLastMaterialAdded={this.setLastMaterialAdded}
            />
          ) : (
            <SideMenu
              configurationSetup={this.state.configurationSetup}
              configurationItems={this.state.configurationItems}
              currentView={this.state.currentView}
              viewChangeFunction={this.switchView}
              updateConfigurationDataFunction={this.updateConfigurationData}
              clearDataFunction={this.props.clearConfiguration}
              totalModulesInCart={this.state.totalModulesInCart}
              totalModulesInConfigurator={this.state.totalModulesInConfigurator}
              totalModulesPrice={this.state.totalModulesPrice}
              totalLegsInConfigurator={this.state.totalLegsInConfigurator}
              legsType={this.state.legsType}
              legsTypeUpdateFunction={this.props.setConfigurationLegsType}
              updateLegsPriceInConfiguratorFunction={
                this.props.updateLegsPriceInConfigurator
              }
              legsPrice={this.props.priceOfLegs}
              addGroupToCartFunction={this.props.addGroupToCart}
              cartGroups={this.props.cartGroups}
              updateNumberOfModulesInCartFunction={
                this.props.updateNumberOfModulesInCart
              }
              updateCartTotal={this.props.updateCartTotal}
              history={this.props.history}
              cartGroupEditingID={this.props.cartGroupEditingID}
              updateGroupInCart={this.props.updateGroupInCart}
              editGroupInCart={this.props.editGroupInCart}
            />
          )}
          {this.state.addModuleActive && (
            <span
              className={styles['add-module-backdrop']}
              onClick={() => this.disableAddModuleMenu()}
            />
          )}
        </div>
      </main>
    );
  }
}

ConfiguratorView.defaultProps = {};

const mapStateToProps = (state, ownProps) => ({
  configurationSetup: state.configuration.configurationSetup,
  configurationItems: state.configuration.configurationItems,
  configurationLegsType: state.configuration.legsType,
  cartGroups: state.cart.cartGroups,
  cartNumberOfModules: state.cart.cartNumberOfModules,
  numberOfModules: state.configuration.numberOfModules,
  numberOfLegs: state.configuration.numberOfLegs,
  priceOfModules: state.configuration.priceOfModules,
  priceOfLegs: state.configuration.priceOfLegs,
  cartGroupEditingID: state.cart.cartGroupEditingID,
});

const mapDispatchToProps = dispatch => ({
  updateConfigurationSetup: setup => dispatch(updateConfigurationSetup(setup)),
  clearConfiguration: setup => dispatch(clearConfiguration(setup)),
  setConfigurationLegsType: legsType =>
    dispatch(setConfigurationLegsType(legsType)),
  updateConfigurationItems: items => dispatch(updateConfigurationItems(items)),
  addGroupToCart: group => dispatch(addGroupToCart(group)),
  updateNumberOfModulesInCart: numberOfModules =>
    dispatch(updateNumberOfModulesInCart(numberOfModules)),
  updateCartTotal: addToTotal => dispatch(updateCartTotal(addToTotal)),
  updateNumberOfModulesInConfigurator: numberOfModules =>
    dispatch(updateNumberOfModulesInConfigurator(numberOfModules)),
  updateNumberOfLegsInConfigurator: numberOfLegs =>
    dispatch(updateNumberOfLegsInConfigurator(numberOfLegs)),
  updateModulesPriceInConfigurator: modulesPrice =>
    dispatch(updateModulesPriceInConfigurator(modulesPrice)),
  updateLegsPriceInConfigurator: legsPrice =>
    dispatch(updateLegsPriceInConfigurator(legsPrice)),
  updateGroupInCart: (groupID, group) =>
    dispatch(updateGroupInCart(groupID, group)),
  editGroupInCart: groupEditingID => dispatch(editGroupInCart(groupEditingID)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(ConfiguratorView);

// WEBPACK FOOTER //
// ./src/views/ConfiguratorView.js
