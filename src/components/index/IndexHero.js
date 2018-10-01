import React, { Component } from 'react';
import styles from './_indexHero.scss';
// import heroImage from '../../../static/images/index/hero-new-desk--cut.png';
// import heroBgImage from '../../../static/images/index/modulos-web-hero-bg-flip.jpg';
import classNames from 'classnames/bind';
import DoubleCta from '../../components/common-elements/DoubleCta';
import LazyLoad from 'react-image-lazy-load';

let cx = classNames.bind(styles);

class IndexHero extends Component {
  constructor(props) {
    super(props);

    this.state = {
      imageLoaded: false,
    };

    this.imageLoadedSet = this.imageLoadedSet.bind(this);
  }

  imageLoadedSet = () => {
    this.setState({
      imageLoaded: true,
    });
  }

  render() {

    return (
      <section className={styles['index-hero']} style={{backgroundImage: 'url(' + heroBgImage + ')'}}>
        <div className={cx({ 'container': true, 'index-hero__container': true})}>
          <div className={styles['index-hero__content']}>
            <h1>The first truly modular desk system</h1>
            <p>We combine utility, craftsmanship and perfectionism to create the only desk that gives you absolute freedom in organizing, upgrading and changing your workspace.</p>
            <div className={styles['cta-container']}>
              <DoubleCta
                isLarge
                primaryCtaText='Configure yours!'
                primaryCtaTarget='/configurator'
                secondaryCtaText='Learn more'
                secondaryCtaTarget='/about-modulos'
              />
            </div>
          </div>
          <div className={cx({'index-hero__image-container': true, 'image-loaded': this.state.imageLoaded})}>
            <LazyLoad
              imageProps={{
                src: '',//heroImage,
                alt: 'Modulos Desk',
                ref: 'image',
                className: styles['index-hero__image'],
              }}
              onContentVisible= {() => this.imageLoadedSet()}
            />
          </div>
        </div>
      </section>
    );
  }
}

IndexHero.defaultProps = {
  isNegative: false,
  cartNumber: 3,
}

export default IndexHero;



// WEBPACK FOOTER //
// ./src/components/index/IndexHero.js
