import React, { Component } from 'react';
import MetaTags from 'react-meta-tags';
import { connect } from 'react-redux';
import { addGroupToCart, updateCartTotal } from '../actions/Actions';
import styles from './_singleAddOnView.scss';
import classNames from 'classnames/bind';
import ConfiguratorPromoElement from '../components/index/ConfiguratorPromoElement';
import DoubleCta from '../components/common-elements/DoubleCta';
import ProductStructuredData from '../components/google-structured-data/ProductStructuredData';

import { AddOnsData } from '../data/AddOnsData';

let cx = classNames.bind(styles);

class SingleAddOnView extends Component {
  constructor(props) {
    super(props);

    this.state = {
      imageLoaded: {
        'image-01': false,
      },
    };

    this.imageLoadedSet = this.imageLoadedSet.bind(this);
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
      ID: AddOnsData[this.props.addOnId].id,
      sku: AddOnsData[this.props.addOnId].sku,
      index: this.props.cartGroups.size,
      itemId: AddOnsData[this.props.addOnId].id,
      itemName: AddOnsData[this.props.addOnId].name,
      quantity: 1,
      image: AddOnsData[this.props.addOnId].images.perspectiveImage,
      type: 'leg',
      price: AddOnsData[this.props.addOnId].price,
      weight: AddOnsData[this.props.addOnId].weight,
    };
    this.props.addGroupToCart(newCartGroup);
    this.props.updateCartTotal(AddOnsData[this.props.addOnId].price);
  };

  componentDidMount() {
    window.scrollTo(0, 0);
  }

  render() {
    const addOnTechSpecs = AddOnsData[this.props.addOnId].techSpecs.map(
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
      <main className={cx(styles['single-leg'])}>
        <MetaTags>
          <title>{AddOnsData[this.props.addOnId].name + ' | Modulos'}</title>
          <meta
            name="title"
            content={AddOnsData[this.props.addOnId].name + ' | Modulos'}
          />
          <meta
            name="description"
            content={AddOnsData[this.props.addOnId].longDescription}
          />
          <meta
            name="keywords"
            content={
              'modulos, desk, modular desk, modular, modular desk system, wooden desk, nano material desk, modular desk design, add-on, add on' +
              AddOnsData[this.props.addOnId].name
            }
          />
          <meta property="og:site_name" content="Modulos" />
          <meta
            property="og:description"
            content={AddOnsData[this.props.addOnId].longDescription}
          />
          <meta
            property="og:image"
            content={AddOnsData[this.props.addOnId].images.perspectiveImage}
          />
          <link
            rel="canonical"
            href={
              'https://www.modulosdesk.com/store/legs/' + this.props.addOnId
            }
          />
        </MetaTags>
        <ProductStructuredData
          name={AddOnsData[this.props.addOnId].name + ' | Modulos desk add-ons'}
          image={AddOnsData[this.props.addOnId].images.perspectiveImage}
          additionalImage={AddOnsData[this.props.addOnId].images.inUseWide}
          description={AddOnsData[this.props.addOnId].longDescription}
          price={AddOnsData[this.props.addOnId].price.toFixed(2)}
          url={'https://www.modulosdesk.com/store/addons/' + this.props.addOnId}
        />
        <div
          className={cx(styles['container-wide'], styles['single-leg-hero'])}
        >
          <div className={styles['image-container']}>
            <img
              src={AddOnsData[this.props.addOnId].images.perspectiveImage}
              alt={AddOnsData[this.props.addOnId].name}
            />
            <span className={styles['image-shadow']} />
          </div>
          <div className={styles['info-container']}>
            <h1 className={styles['leg-name']}>
              {AddOnsData[this.props.addOnId].name}
            </h1>
            <p className={styles['leg-description']}>
              {AddOnsData[this.props.addOnId].longDescription}
            </p>
            <div className={styles['price-container']}>
              ${AddOnsData[this.props.addOnId].price.toFixed(2)}
            </div>
            <div className={styles['cta-container']}>
              <DoubleCta
                isLarge
                primaryIsBuy
                primaryCtaText="Add to cart"
                primaryCtaOnClick={() => this.addToCart()}
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
              'url(' + AddOnsData[this.props.addOnId].images.inUseWide + ')',
          }}
        />
        <section
          className={cx(styles['container'], styles['leg-detailed-info'])}
        >
          <div className={styles['info-list']}>
            <h3 className={styles['info-list-title']}>
              Technical specifications
            </h3>
            <ul className={styles['leg-tech-specs']}>{addOnTechSpecs}</ul>
          </div>
        </section>
        <ConfiguratorPromoElement />
      </main>
    );
  }
}

SingleAddOnView.defaultProps = {
  addOnId: '',
};

const mapStateToProps = (state, ownProps) => ({
  cartGroups: state.cart.cartGroups,
});

const mapDispatchToProps = dispatch => ({
  addGroupToCart: group => dispatch(addGroupToCart(group)),
  updateCartTotal: addToTotal => dispatch(updateCartTotal(addToTotal)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(SingleAddOnView);

// WEBPACK FOOTER //
// ./src/views/SingleAddOnView.js
