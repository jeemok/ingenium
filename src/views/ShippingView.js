import React, { Component } from 'react';
import MetaTags from 'react-meta-tags';
import styles from './_shippingView.scss';
import classNames from 'classnames/bind';
import LazyLoad from 'react-image-lazy-load';
import ConfiguratorPromoElement from '../components/index/ConfiguratorPromoElement';

// import imageHero from '../../static/images/shipping/shipping-hero.jpg';

import { ShippingCountries } from '../data/ShippingData';

const countriesList = Object.keys(ShippingCountries).sort();

let cx = classNames.bind(styles);

class ShippingView extends Component {
  constructor(props) {
    super(props);

    this.state = {
      imageLoaded: {
        'image-01': false,
        'image-02': false,
        'image-03': false,
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
    return (
      <main
        className={cx(styles['static-page-content'], styles['materials-page'])}
      >
        <MetaTags>
          <title>Shipping locations | Modulos</title>
          <meta name="title" content="Shipping locations | Modulos" />
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
          {/* <meta property="og:image" content={imageHero} /> */}
          <meta property="og:image" content="" />
          <link
            rel="canonical"
            href="https://www.modulosdesk.com/shipping-locations"
          />
        </MetaTags>
        <div
          className={cx(
            styles['container-wide'],
            styles['layout'],
            styles['one-third-hero'],
          )}
        >
          <div className={styles['column-left']}>
            <h1>Shipping locations</h1>
            <p>
              We currently ship to most of the Europe and the United States, and
              once you add items to your shopping cart we instantly calculate
              the shipping cost for full transparency.
            </p>
            <p>
              The average time frame it takes for your product to be produced,
              shipped and delivered to your address is <b>4-6 weeks</b>.
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
                  src: imageHero,
                  alt: 'We choose only the best materials available',
                  ref: 'image',
                }}
                onContentVisible={() => this.imageLoadedSet('image-01')}
              />
            </div>
          </div>
        </div>
        <div
          className={cx(
            styles['container-wide'],
            styles['layout'],
            styles['two-columns-layout'],
            styles['single-material'],
          )}
        >
          <div className={styles['full-span']}>
            <div className={styles['countries-list-container']}>
              <h2 className={styles['material-title']}>
                List of countries we currently ship to:
              </h2>
              <ul className={styles['countries-list']}>
                {countriesList.map((item, index) => {
                  return <li>{item}</li>;
                })}
              </ul>
            </div>
          </div>
          <div classNam={styles['column']} />
          <div className={styles['full-span']}>
            <div
              className={cx(
                styles['container'],
                styles['material-options-specs'],
              )}
            />
          </div>
        </div>
        <ConfiguratorPromoElement />
      </main>
    );
  }
}

ShippingView.defaultProps = {};

export default ShippingView;

// WEBPACK FOOTER //
// ./src/views/ShippingView.js
