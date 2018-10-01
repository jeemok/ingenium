import React, { Component } from 'react';
import MetaTags from 'react-meta-tags';
import styles from './_legsView.scss';
import classNames from 'classnames/bind';
import LazyLoad from 'react-image-lazy-load';
import ConfiguratorPromoElement from '../components/index/ConfiguratorPromoElement';
import ShopItemListing from '../components/index/ShopItemListing';

// import imageHero from '../../static/images/legs/legs-hero.jpg';

import { LegsList, LegsData } from '../data/LegsData';

let cx = classNames.bind(styles);

class LegsView extends Component {
  constructor(props) {
    super(props);

    this.state = {
      imageLoaded: {
        'image-01': false,
      },
    };

    this.imageLoadedSet = this.imageLoadedSet.bind(this);
  }

  imageLoadedSet = imageId => {
    const temp = this.state.imageLoaded;
    temp[imageId] = true;
    this.setState({
      imageLoaded: temp,
    });
  };

  componentDidMount() {
    window.scrollTo(0, 0);
  }

  render() {
    const legsListView = LegsList.map((legName, index) => {
      return (
        <ShopItemListing
          key={LegsData[legName].legId}
          itemId={LegsData[legName].legId}
          itemName={LegsData[legName].legName}
          availability={['Leg height: ' + LegsData[legName].legHeight]}
          description={LegsData[legName].shortDescription}
          price={LegsData[legName].price}
          weight={LegsData[legName].weight}
          priceSubtitle="One leg:"
          itemImage={LegsData[legName].images.perspectiveImage}
          addToCartEnabled={true}
          itemPage={'legs/' + LegsData[legName].legId}
          itemSku={LegsData[legName].sku}
          itemType="leg"
        />
      );
    });

    return (
      <main className={cx(styles['static-page-content'], styles['legs'])}>
        <MetaTags>
          <title>Available Legs | Modulos</title>
          <meta name="title" content="Available Legs | Modulos" />
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
          <link rel="canonical" href="https://www.modulosdesk.com/store/legs" />
        </MetaTags>
        <div
          className={cx(
            styles['container-wide'],
            styles['layout'],
            styles['one-third-hero'],
          )}
        >
          <div className={styles['column-left']}>
            <h1>Available legs</h1>
            <p>
              Along with the exact shape and functionality of the surface, with
              Modulos you can also choose the type of legs you want to use. All
              of the legs we offer have the same attachment plate, so each of
              them fits perfectly with pre-made bolt slots on our modules.
            </p>
          </div>
          <div className={styles['column-right']}>
            <div
              className={cx({
                'content-image': true,
                'image-right': true,
                'image-loaded': this.state.imageLoaded['image-01'],
              })}
            >
              <LazyLoad
                imageProps={{
                  src: '', //imageHero,
                  alt: 'A wide range of leg designs is available for you',
                  ref: 'image',
                }}
                onContentVisible={() => this.imageLoadedSet('image-01')}
              />
            </div>
          </div>
        </div>
        <div className={cx(styles['container'], styles['legs-items'])}>
          {legsListView}
        </div>
        <ConfiguratorPromoElement />
      </main>
    );
  }
}

LegsView.defaultProps = {};

export default LegsView;

// WEBPACK FOOTER //
// ./src/views/LegsView.js
