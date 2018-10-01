import React, { Component } from 'react';
import MetaTags from 'react-meta-tags';
import { connect } from 'react-redux';
import { addGroupToCart, updateCartTotal } from '../actions/Actions';
import styles from './_singleLegView.scss';
import classNames from 'classnames/bind';
import ConfiguratorPromoElement from '../components/index/ConfiguratorPromoElement';
import DoubleCta from '../components/common-elements/DoubleCta';
import ProductStructuredData from '../components/google-structured-data/ProductStructuredData';

import { LegsData } from '../data/LegsData';

let cx = classNames.bind(styles);

class SingleModuleView extends Component {
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
      ID: LegsData[this.props.legId].legId,
      sku: LegsData[this.props.legId].sku,
      index: this.props.cartGroups.size,
      itemId: LegsData[this.props.legId].legId,
      itemName: LegsData[this.props.legId].legName,
      quantity: 1,
      image: LegsData[this.props.legId].images.perspectiveImage,
      type: 'leg',
      price: LegsData[this.props.legId].price,
      weight: LegsData[this.props.legId].weight,
    };
    this.props.addGroupToCart(newCartGroup);
    this.props.updateCartTotal(LegsData[this.props.legId].price);
  };

  componentDidMount() {
    window.scrollTo(0, 0);
  }

  render() {
    const legTechSpecs = LegsData[this.props.legId].techSpecs.map(
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
          <title>
            {LegsData[this.props.legId].legName + ' | Modulos desk'}
          </title>
          <meta
            name="title"
            content={LegsData[this.props.legId].legName + ' | Modulos desk'}
          />
          <meta
            name="description"
            content={LegsData[this.props.legId].longDescription}
          />
          <meta
            name="keywords"
            content={
              'modulos, desk, modular desk, modular, modular desk system, wooden desk, nano material desk, modular desk design, desk leg, modular desk leg' +
              LegsData[this.props.legId].legName
            }
          />
          <meta property="og:site_name" content="Modulos" />
          <meta
            property="og:description"
            content={LegsData[this.props.legId].longDescription}
          />
          <meta
            property="og:image"
            content={LegsData[this.props.legId].images.perspectiveImage}
          />
          <link
            rel="canonical"
            href={'https://www.modulosdesk.com/store/legs/' + this.props.legId}
          />
        </MetaTags>
        <ProductStructuredData
          name={LegsData[this.props.legId].legName + ' | Modulos desk'}
          image={LegsData[this.props.legId].images.perspectiveImage}
          additionalImage={LegsData[this.props.legId].images.inUseWide}
          description={LegsData[this.props.legId].longDescription}
          price={LegsData[this.props.legId].price.toFixed(2)}
          url={'https://www.modulosdesk.com/store/legs/' + this.props.legId}
        />
        <div
          className={cx(styles['container-wide'], styles['single-leg-hero'])}
        >
          <div className={styles['image-container']}>
            <img
              src={LegsData[this.props.legId].images.perspectiveImage}
              alt={
                LegsData[this.props.legId].legName +
                ' | ' +
                LegsData[this.props.legId].legHeight +
                'mm'
              }
            />
            <span className={styles['image-shadow']} />
          </div>
          <div className={styles['info-container']}>
            <h1 className={styles['leg-name']}>
              {LegsData[this.props.legId].legName}
            </h1>
            <p className={styles['leg-description']}>
              Height:{' '}
              <b>
                {LegsData[this.props.legId].legHeight}
                mm
              </b>
            </p>
            <p className={styles['leg-description']}>
              {LegsData[this.props.legId].longDescription}
            </p>
            <div className={styles['price-container']}>
              ${LegsData[this.props.legId].price.toFixed(2)}
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
              'url(' + LegsData[this.props.legId].images.inUseWide + ')',
          }}
        />
        <section
          className={cx(styles['container'], styles['leg-detailed-info'])}
        >
          <div className={styles['info-list']}>
            <h3 className={styles['info-list-title']}>
              Technical specifications
            </h3>
            <ul className={styles['leg-tech-specs']}>{legTechSpecs}</ul>
          </div>
        </section>
        <ConfiguratorPromoElement />
      </main>
    );
  }
}

SingleModuleView.defaultProps = {
  legId: '',
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
)(SingleModuleView);

// WEBPACK FOOTER //
// ./src/views/SingleLegView.js
