import React, { Component } from 'react';
import MetaTags from 'react-meta-tags';
import styles from './_modulesView.scss';
import classNames from 'classnames/bind';
import LazyLoad from 'react-image-lazy-load';
import ConfiguratorPromoElement from '../components/index/ConfiguratorPromoElement';
import ShopItemListing from '../components/index/ShopItemListing';
import MaterialOptionsSelector from '../components/index/MaterialOptionsSelector';

// import imageHero from '../../static/images/modules/modules-hero-3.jpg';

import { ModulesList, ModulesData } from '../data/ModulesData';

let cx = classNames.bind(styles);

class ModulesView extends Component {
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
  }

  imageLoadedSet = imageId => {
    const temp = this.state.imageLoaded;
    temp[imageId] = true;
    this.setState({
      imageLoaded: temp,
    });
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
    const modulesListView = ModulesList.map((moduleName, index) => {
      const materialData =
        ModulesData[moduleName].materialData[this.state.selectedMaterial][
          this.state.selectedColor
        ].orientation[this.state.selectedOrientation];
      return (
        <ShopItemListing
          key={ModulesData[moduleName].moduleId}
          itemId={ModulesData[moduleName].moduleId}
          itemName={ModulesData[moduleName].moduleName}
          availability={ModulesData[moduleName].availableMaterials}
          description={ModulesData[moduleName].shortDescription}
          price={materialData.price}
          weight={materialData.weight}
          priceSubtitle="From:"
          itemImage={
            ModulesData[moduleName].materialData[this.state.selectedMaterial][
              this.state.selectedColor
            ].perspectiveImage
          }
          addToCartEnabled={true}
          itemPage={'modules/' + ModulesData[moduleName].moduleId}
          itemSku={materialData.sku}
          itemType="module"
          moduleMaterial={this.state.selectedMaterial}
          moduleColor={this.state.selectedColor}
          moduleOrientation={this.state.selectedOrientation}
        />
      );
    });

    return (
      <main
        className={cx(styles['static-page-content'], styles['modules-page'])}
      >
        <MetaTags>
          <title>Available Modules | Modulos</title>
          <meta name="title" content="Available Modules | Modulos" />
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
          <meta property="og:image" content={imageHero} />
          <link
            rel="canonical"
            href="https://www.modulosdesk.com/store/modules"
          />
        </MetaTags>
        <div
          className={cx(
            styles['container-wide'],
            styles['layout'],
            styles['two-columns-layout'],
            styles['equal-columns-hero'],
          )}
        >
          <div className={styles['column-left']}>
            <h1>Available modules</h1>
            <p>
              One of the main advantages of our modular desk surface is that it
              enables us to create modules with different functionalities. That
              way you can have an USB hub or an iPad dock embedded right into
              your desk - and you can replace modules as time goes by!
            </p>
            <div className={styles['material-selector']}>
              <MaterialOptionsSelector
                updateViewSettingsFunction={this.updateMaterialSettings}
              />
            </div>
          </div>
          <div className={styles['column-right']}>
            <div
              className={cx({
                'content-image-hero': true,
                'image-right': true,
                'image-loaded': this.state.imageLoaded['image-01'],
              })}
            >
              <LazyLoad
                imageProps={{
                  src: '', //imageHero,
                  alt: 'We choose only the best materials available',
                  ref: 'image',
                }}
                onContentVisible={() => this.imageLoadedSet('image-01')}
              />
            </div>
          </div>
        </div>
        <div className={cx(styles['container'], styles['modules-list'])}>
          {modulesListView}
        </div>
        <ConfiguratorPromoElement />
      </main>
    );
  }
}

ModulesView.defaultProps = {};

export default ModulesView;

// WEBPACK FOOTER //
// ./src/views/ModulesView.js
