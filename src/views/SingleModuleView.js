import React, { Component } from 'react';
import MetaTags from 'react-meta-tags';
import { connect } from 'react-redux';
import {
  addGroupToCart,
  updateNumberOfModulesInCart,
  updateCartTotal,
} from '../actions/Actions';
import styles from './_singleModuleView.scss';
import classNames from 'classnames/bind';
import ConfiguratorPromoElement from '../components/index/ConfiguratorPromoElement';
import ThreeSixtyProductRotation from '../components/index/ThreeSixtyProductRotation';
import MaterialOptionsSelector from '../components/index/MaterialOptionsSelector';
import DoubleCta from '../components/common-elements/DoubleCta';
import ProductStructuredData from '../components/google-structured-data/ProductStructuredData';

import { ModulesData } from '../data/ModulesData';
import { Modules360Data } from '../data/Modules360Data';

let cx = classNames.bind(styles);

class SingleModuleView extends Component {
  constructor(props) {
    super(props);

    this.state = {
      imageLoaded: {
        'image-01': false,
      },
      selectedMaterial: 'Aeon',
      selectedColor: 'dark',
      selectedOrientation: 'universal',
    };

    this.imageLoadedSet = this.imageLoadedSet.bind(this);
    this.updateMaterialSettings = this.updateMaterialSettings.bind(this);
    this.addToCart = this.addToCart.bind(this);
  }

  imageLoadedSet = imageId => {
    const temp = this.state.imageLoaded;
    temp[imageId] = true;
    this.setState({
      imageLoaded: temp,
    });
  };

  addToCart = () => {
    let newCartGroup;
    newCartGroup = {
      ID:
        ModulesData[this.props.moduleId].materialData[
          this.state.selectedMaterial
        ][this.state.selectedColor].orientation[this.state.selectedOrientation]
          .sku,
      index: this.props.cartGroups.size,
      itemId: ModulesData[this.props.moduleId].moduleId,
      itemName: ModulesData[this.props.moduleId].moduleName,
      quantity: 1,
      image:
        ModulesData[this.props.moduleId].materialData[
          this.state.selectedMaterial
        ][this.state.selectedColor].perspectiveImage,
      type: 'module',
      price:
        ModulesData[this.props.moduleId].materialData[
          this.state.selectedMaterial
        ][this.state.selectedColor].orientation[this.state.selectedOrientation]
          .price,
      weight:
        ModulesData[this.props.moduleId].materialData[
          this.state.selectedMaterial
        ][this.state.selectedColor].orientation[this.state.selectedOrientation]
          .weight,
      moduleMaterial: this.state.selectedMaterial,
      moduleColor: this.state.selectedColor,
      moduleOrientation: this.state.selectedOrientation,
    };
    this.props.updateNumberOfModulesInCart(1);
    this.props.addGroupToCart(newCartGroup);
    this.props.updateCartTotal(
      ModulesData[this.props.moduleId].materialData[
        this.state.selectedMaterial
      ][this.state.selectedColor].orientation[this.state.selectedOrientation]
        .price,
    );
  };

  updateMaterialSettings = (newMaterial, newColor, newOrientation) => {
    this.setState({
      selectedMaterial: newMaterial,
      selectedColor: newColor,
      selectedOrientation: newOrientation,
    });
  };

  componentDidMount() {
    window.scrollTo(0, 0);
  }

  render() {
    const moduleMaterialSpecificData =
      ModulesData[this.props.moduleId].materialData[
        this.state.selectedMaterial
      ][this.state.selectedColor].orientation[this.state.selectedOrientation];
    const module360Images =
      Modules360Data[this.props.moduleId].materialData[
        this.state.selectedMaterial
      ][this.state.selectedColor].orientation[this.state.selectedOrientation]
        .images;

    const moduleTechSpecs = ModulesData[this.props.moduleId].techSpecs.map(
      (spec, index) => {
        return (
          <li className={styles['single-item']}>
            <div className={styles['list-item-title']}>
              <span>{spec.title}</span>
            </div>
            <div className={styles['list-item-content']}>
              {spec.values.map((value, x) => {
                return <span>{value}</span>;
              })}
            </div>
          </li>
        );
      },
    );

    return (
      <main className={cx(styles['single-module'])}>
        <MetaTags>
          <title>
            {ModulesData[this.props.moduleId].moduleName + ' | Modulos desk'}
          </title>
          <meta
            name="title"
            content={ModulesData[this.props.moduleId].moduleName + ' | Modulos'}
          />
          <meta
            name="description"
            content={ModulesData[this.props.moduleId].longDescription}
          />
          <meta
            name="keywords"
            content={
              'modulos, desk, modular desk, modular, modular desk system, wooden desk, nano material desk, modular desk design, desk module, desk expansion, desk upgrade' +
              ModulesData[this.props.moduleId].moduleName
            }
          />
          <meta property="og:site_name" content="Modulos" />
          <meta
            property="og:title"
            content={
              ModulesData[this.props.moduleId].moduleName + ' | Modulos desk'
            }
          />
          <meta
            property="og:description"
            content={ModulesData[this.props.moduleId].longDescription}
          />
          <meta
            property="og:image"
            content={
              ModulesData[this.props.moduleId].materialData[
                this.state.selectedMaterial
              ][this.state.selectedColor].perspectiveImage
            }
          />
          <link
            rel="canonical"
            href={
              'https://www.modulosdesk.com/store/modules/' + this.props.moduleId
            }
          />
        </MetaTags>
        <ProductStructuredData
          name={ModulesData[this.props.moduleId].moduleName + ' | Modulos desk'}
          image={
            ModulesData[this.props.moduleId].materialData[
              this.state.selectedMaterial
            ][this.state.selectedColor].perspectiveImage
          }
          additionalImage={ModulesData[this.props.moduleId].images.inUseWide}
          description={ModulesData[this.props.moduleId].longDescription}
          price={moduleMaterialSpecificData.price.toFixed(2)}
          url={
            'https://www.modulosdesk.com/store/modules/' + this.props.moduleId
          }
        />
        <div
          className={cx(styles['container-wide'], styles['single-module-hero'])}
        >
          <div className={styles['image-container']}>
            <ThreeSixtyProductRotation images={module360Images} />
          </div>
          <div className={styles['info-container']}>
            <h1 className={styles['module-name']}>
              {ModulesData[this.props.moduleId].moduleName}
            </h1>
            <p className={styles['module-description']}>
              {ModulesData[this.props.moduleId].longDescription}
            </p>
            <div className={styles['material-selector']}>
              <MaterialOptionsSelector
                updateViewSettingsFunction={this.updateMaterialSettings}
              />
            </div>
            <div className={styles['price-container']}>
              ${moduleMaterialSpecificData.price.toFixed(2)}
            </div>
            <div className={styles['cta-container']}>
              <DoubleCta
                isLarge
                secondaryIsBuy
                primaryCtaText="Start a new configuration"
                primaryCtaTarget="/configurator"
                secondaryCtaText="Add to cart"
                secondaryCtaOnClick={() => this.addToCart()}
              />
            </div>
          </div>
        </div>
        <span
          className={cx(
            styles['container-wide'],
            styles['in-use-image-container'],
          )}
          style={{
            backgroundImage:
              'url(' + ModulesData[this.props.moduleId].images.inUseWide + ')',
          }}
        />
        <section
          className={cx(styles['container'], styles['module-detailed-info'])}
        >
          <div className={styles['info-list']}>
            <h3 className={styles['info-list-title']}>
              Technical specifications
            </h3>
            <ul className={styles['module-tech-specs']}>{moduleTechSpecs}</ul>
          </div>
        </section>
        <ConfiguratorPromoElement />
      </main>
    );
  }
}

SingleModuleView.defaultProps = {
  moduleId: '',
};

const mapStateToProps = (state, ownProps) => ({
  cartGroups: state.cart.cartGroups,
});

const mapDispatchToProps = dispatch => ({
  addGroupToCart: group => dispatch(addGroupToCart(group)),
  updateNumberOfModulesInCart: numberOfModules =>
    dispatch(updateNumberOfModulesInCart(numberOfModules)),
  updateCartTotal: addToTotal => dispatch(updateCartTotal(addToTotal)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(SingleModuleView);

// WEBPACK FOOTER //
// ./src/views/SingleModuleView.js
