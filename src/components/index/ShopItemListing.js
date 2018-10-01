import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { addGroupToCart, updateNumberOfModulesInCart, updateCartTotal } from '../../actions/Actions';
import styles from './_shopItemListing.scss';
import DoubleCta from '../../components/common-elements/DoubleCta';

class ShopItemListing extends Component {
  constructor(props) {
    super(props);

    this.addToCart = this.addToCart.bind(this);
  }

  addToCart = () => {
    let newCartGroup;
    if (this.props.itemType === 'module') {
      newCartGroup = {
        ID: this.props.itemSku,
        sku: this.props.itemSku,
        index: this.props.cartGroups.size,
        itemId: this.props.itemId,
        itemName: this.props.itemName,
        quantity: 1,
        image: this.props.itemImage,
        type: this.props.itemType,
        price: this.props.price,
        weight: this.props.weight,
        moduleMaterial: this.props.moduleMaterial,
        moduleColor: this.props.moduleColor,
        moduleOrientation: this.props.moduleOrientation
      }
      this.props.updateNumberOfModulesInCart(1);
    } else {
      newCartGroup = {
        ID: this.props.itemSku,
        sku: this.props.itemSku,
        index: this.props.cartGroups.size,
        itemId: this.props.itemId,
        itemName: this.props.itemName,
        quantity: 1,
        image: this.props.itemImage,
        type: this.props.itemType,
        price: this.props.price,
        weight: this.props.weight
      }
    }
    this.props.addGroupToCart(newCartGroup);
    this.props.updateCartTotal(this.props.price);
  }

  render() {
    const availability = this.props.availability ? (
      <span className={styles['availability']}>
        Available in: {this.props.availability.map((item, index) => {return (<span className={styles['availability-item']}>{item}</span>)})}
      </span>
    ) : '';
    const description = this.props.description ? (
      <span className={styles['description']}>
        {this.props.description}
      </span>
    ) : '';
    const priceSubtitle = this.props.priceSubtitle ? (
      <span className={styles['price-subtitle']}>
        {this.props.priceSubtitle}
      </span>
    ) : '';

    return (
      <article className={styles['shop-item-listing']}>
        <Link
          to={this.props.itemPage}
          className={styles['image-container']}
        >
          <img src={this.props.itemImage} alt={this.props.itemName} role='presentation' />
          <span className={styles['image-shadow']} />
        </Link>
        <div className={styles['info-container']}>
          <h3 className={styles['item-name']}>
            {this.props.itemName}
          </h3>
          {availability}
          {description}
        </div>
        <div className={styles['price-container']}>
          {priceSubtitle}
          <span className={styles['price-amount']}>
            ${this.props.price.toFixed(2)}
          </span>
        </div>
        <div className={styles['cta-container']}>
          <DoubleCta
            isSmall
            primaryIsBuy
            primaryCtaText='Add to cart'
            primaryCtaOnClick={() => this.addToCart()}
            secondaryCtaText='More info'
            secondaryCtaTarget={this.props.itemPage}
          />
        </div>
      </article>
    );
  }
}

ShopItemListing.defaultProps = {
  itemId: '',
  itemName: '',
  availability: [],
  description: '',
  price: '',
  priceSubtitle: '',
  itemImage: '',
  addToCartEnabled: false,
}

const mapStateToProps = (state, ownProps) => ({
  cartGroups: state.cart.cartGroups,
})

const mapDispatchToProps = dispatch => ({
  addGroupToCart: group => dispatch(addGroupToCart(group)),
  updateNumberOfModulesInCart: numberOfModules => dispatch(updateNumberOfModulesInCart(numberOfModules)),
  updateCartTotal: addToTotal => dispatch(updateCartTotal(addToTotal)),
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ShopItemListing)



// WEBPACK FOOTER //
// ./src/components/index/ShopItemListing.js
