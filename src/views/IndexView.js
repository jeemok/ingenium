import React, { Component } from 'react';
import MetaTags from 'react-meta-tags';
import styles from './_indexView.scss';
import IndexHero from '../components/index/IndexHero';
import IndexHeroOverlayBox from '../components/index/IndexHeroOverlayBox';
import IndexSuperPractical from '../components/index/IndexSuperPractical';
import IndexMaterials from '../components/index/IndexMaterials';
import IndexImageConfiguration from '../components/index/IndexImageConfiguration';
import IndexConfiguratorPromo from '../components/index/IndexConfiguratorPromo';
import NewsletterSignup from '../components/index/NewsletterSignup';
import InstagramFeed from '../components/index/InstagramFeed';
import EnvironmentallyResponsible from '../components/index/EnvironmentallyResponsible';
// import shareImage from '../../static/images/index/modulos-4x2conf.jpg';

class IndexView extends Component {
  componentDidMount() {
    window.scrollTo(0, 0);
  }

  render() {
    return (
      <main className={styles['index-content']}>
        <MetaTags>
          <title>Modulos | The first fully modular desk system</title>
          <meta
            name="title"
            content="Modulos | The first fully modular desk system"
          />
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
          {/* <meta property="og:image" content={shareImage} /> */}
          <link rel="canonical" href="https://www.modulosdesk.com/" />
        </MetaTags>
        <IndexHero />
        <IndexHeroOverlayBox />
        <IndexSuperPractical />
        <IndexImageConfiguration />
        <IndexMaterials />
        <IndexConfiguratorPromo />
        <NewsletterSignup />
        <InstagramFeed />
        <EnvironmentallyResponsible />
      </main>
    );
  }
}

IndexView.defaultProps = {
  isNegative: false,
  cartNumber: 3,
};

export default IndexView;

// WEBPACK FOOTER //
// ./src/views/IndexView.js
