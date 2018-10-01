import React, { Component } from 'react';
import { connect } from 'react-redux';
import styles from './_orderSuccessView.scss';
import classNames from 'classnames/bind';
import LazyLoad from 'react-image-lazy-load';
// import imageHero from '../../static/images/our-story/our-story-1-crop.jpg';
import DoubleCta from '../components/common-elements/DoubleCta';

let cx = classNames.bind(styles);

class OrderSuccessView extends Component {
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
    return (
      <main
        className={cx(
          styles['static-page-content'],
          styles['order-success-page'],
        )}
      >
        <div
          className={cx(
            styles['container-wide'],
            styles['layout'],
            styles['one-one-hero'],
          )}
        >
          <div className={styles['column-left']}>
            <h1>Your order was successfully placed!</h1>
            <p>
              Thank you for your order! We will contact you with invoice and
              shipping information.
            </p>
            <p>
              Your order ID is: <b>{this.props.latestOrderId}</b>
            </p>
            <div className={styles['cta-container']}>
              <DoubleCta
                primaryCtaText="Back to homepage"
                primaryCtaTarget="/"
              />
            </div>
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
                  alt: 'We choose only the best materials available',
                  ref: 'image',
                }}
                onContentVisible={() => this.imageLoadedSet('image-01')}
              />
            </div>
          </div>
        </div>
      </main>
    );
  }
}

OrderSuccessView.defaultProps = {};

const mapStateToProps = (state, ownProps) => ({
  latestOrderId: state.user.latestOrderId,
});

export default connect(mapStateToProps)(OrderSuccessView);

// WEBPACK FOOTER //
// ./src/views/OrderSuccessView.js
