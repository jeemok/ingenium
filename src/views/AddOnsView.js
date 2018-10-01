import React, { Component } from 'react';
import MetaTags from 'react-meta-tags';
import styles from './_legsView.scss';
import classNames from 'classnames/bind';
import LazyLoad from 'react-image-lazy-load';
import ConfiguratorPromoElement from '../components/index/ConfiguratorPromoElement';
import ShopItemListing from '../components/index/ShopItemListing';

// import imageHero from '../../static/images/addons/addons-hero.jpg';

import { AddOnsList, AddOnsData } from '../data/AddOnsData';

let cx = classNames.bind(styles);

class AddOnsView extends Component {
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
    const addOnsListView = AddOnsList.map((addOnId, index) => {
      return (
        <ShopItemListing
          key={AddOnsData[addOnId].id}
          itemId={AddOnsData[addOnId].id}
          itemName={AddOnsData[addOnId].name}
          description={AddOnsData[addOnId].shortDescription}
          price={AddOnsData[addOnId].price}
          weight={AddOnsData[addOnId].weight}
          priceSubtitle="Per piece:"
          itemImage={AddOnsData[addOnId].images.perspectiveImage}
          addToCartEnabled={true}
          itemPage={'addons/' + AddOnsData[addOnId].id}
          itemSku={AddOnsData[addOnId].sku}
          itemType="addon"
          availability={false}
        />
      );
    });

    return (
      <main className={cx(styles['static-page-content'], styles['legs'])}>
        <MetaTags>
          <title>Add Ons | Modulos</title>
          <meta name="title" content="Add Ons | Modulos" />
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
          <link
            rel="canonical"
            href="https://www.modulosdesk.com/store/addons"
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
            <h1>Available addons</h1>
            <p>
              Given the unprecedented modularity and extensibility of Modulos,
              it is reasonable to take it one step further with practical
              add-ons that make your life even easier. We have just started to
              populate the list of add-ons we offer, so expect more add-ons to
              arrive soon!
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
                  alt: 'Our addons help you improve your desk even further!',
                  ref: 'image',
                }}
                onContentVisible={() => this.imageLoadedSet('image-01')}
              />
            </div>
          </div>
        </div>
        <div className={cx(styles['container'], styles['legs-items'])}>
          {addOnsListView}
        </div>
        <ConfiguratorPromoElement />
      </main>
    );
  }
}

AddOnsView.defaultProps = {};

export default AddOnsView;

// WEBPACK FOOTER //
// ./src/views/AddOnsView.js
