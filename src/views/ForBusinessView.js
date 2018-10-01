import React, { Component } from 'react';
import MetaTags from 'react-meta-tags';
import styles from './_forBusinessView.scss';
import classNames from 'classnames/bind';
import LazyLoad from 'react-image-lazy-load';
import ContactPromoElement from '../components/index/ContactPromoElement';

// import imageOffice1 from '../../static/images/for-business/modulos--office-top--1.jpg';
// import imageOffice2 from '../../static/images/for-business/modulos--office-top--2.jpg';
// import imageHero from '../../static/images/for-business/for-business-hero.jpg';

let cx = classNames.bind(styles);

class ForBusinessView extends Component {
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
          <title>Modulos for Business | Modulos</title>
          <meta name="title" content="Modulos for Business | Modulos" />
          <meta
            name="description"
            content="With its unparalelled versatility and adaptability, Modulos is the perfect choice when it comes to furnishing your office. Whether you want the luxurious feeling of wood, or the modern beauty and superior endurance of modern materials, Modulos covers all your needs."
          />
          <meta
            name="keywords"
            content="modulos, desk, modular desk, modular, modular desk system, wooden desk, nano material desk, modular desk design, add-on, add on, office desks, office design, sustainable office, business contact, business offer"
          />
          <meta property="og:site_name" content="Modulos" />
          <meta
            property="og:description"
            content="With its unparalelled versatility and adaptability, Modulos is the perfect choice when it comes to furnishing your office. Whether you want the luxurious feeling of wood, or the modern beauty and superior endurance of modern materials, Modulos covers all your needs."
          />
          {/* <meta property="og:image" content={imageHero} /> */}
          <link
            rel="canonical"
            href="https://www.modulosdesk.com/for-business"
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
            <h1>Looking to furnish your office?</h1>
            <p>
              With its unparalelled versatility and adaptability, Modulos is the
              perfect choice when it comes to furnishing your office. Whether
              you want the luxurious feeling of wood, or the modern beauty and
              superior endurance of modern materials, Modulos covers all your
              needs.
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
                  alt: 'Modulos is the ultimate solution for offices.',
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
          <div className={styles['column']}>
            <div
              className={cx({
                'content-image': true,
                'image-left': true,
                'image-loaded': this.state.imageLoaded['image-02'],
              })}
            >
              <LazyLoad
                imageProps={{
                  src: '', //imageOffice1,
                  alt:
                    'You can create different combinations using the same amount of modules.',
                  ref: 'image',
                }}
                onContentVisible={() => this.imageLoadedSet('image-02')}
              />
              <span className={styles['content-image__image-description']}>
                You can create different combinations using the same amount of
                modules.
              </span>
            </div>
          </div>
          <div classNam={styles['column']}>
            <div className={styles['right-column-text']}>
              <h2>Beautifully fits your office space</h2>
              <p>
                We know - hunting for office furniture can be a very tedious
                task. You have a number of employees you need to accommodate,
                and a specific space where you need to fit in. Modulos really
                stands out under those circumstances. It is{' '}
                <b>super adaptable</b>, so you can easily get the{' '}
                <b>best value</b> out of your (more or less) limited office
                space. Simply imagine your entire office floorplan as a 35x35cm
                grid and start configuring and creating the most efficient and
                interesting desks layout that works{' '}
                <b>specifically for your space</b>!
              </p>
              <h2>
                Cost-effectiveness at its best when renovating or redecorating
              </h2>
              <p>
                Office redecorating or moving to another space can be an
                expensive feat. If you're looking to change the layout of your
                office, there is a good chance your old desks either won't fit
                at all, or they just won't be optimal for what you're trying to
                achieve.
              </p>
              <p>
                With Modulos, you can simply{' '}
                <b>rearrange all your existing modules</b>. If necessary, you
                can add more modules, but you most certainly won't have to throw
                away or store (and pay for that storage) your existing office
                desks. No need to continue with that wasteful practice!
              </p>
              <h2>Upgrade or reconfigure as you hire</h2>
              <p>
                Hired a new employee but don't have a desk for that person?
                Simply <b>reconfigure</b> a couple of other desks and create
                that new workstation with <b>zero or minimal cost</b>!
              </p>
            </div>
          </div>
          <div classNam={styles['column']}>
            <div className={styles['left-column-text']}>
              <h2>Desk as an employee perk</h2>
              <p>
                Imagine coming to work and having an <b>anti-bacterial</b> desk
                surface. And/or a <b>tablet dock</b>, <b>wireless charger</b>,{' '}
                <b>power outlets</b> right in your surface. Wouldn't that be
                nice? Your employees would most certainly think so.
              </p>
              <h2>Make your furniture last longer</h2>
              <p>
                Since we use high-quality materials, you are sure to get a{' '}
                <b>great value</b> for your money. But if you count in the
                properties of Aeon such as a resistance to scratches,
                self-healing, no color change under sunlight and other great
                properties - you are bound to use your Modulos desks for a long
                time!
              </p>
              <p>
                And even if your desk somehow ends up damaged, there is no need
                to throw away the entire desk. Simply{' '}
                <b>replace the part that's damaged</b> - be it a module or a
                leg. Just imagine how much money you can save that way over the
                years!
              </p>
              <h2>Give your office a "wow" factor</h2>
              <p>
                And finally - every office benefits of its "wow" factor, and
                Modulos certainly gives one. Its surface materials are
                astonishing, the features are amazing, and after all - it is a
                very interesting and unique product. We can testify from our own
                experience - you will be amazed at how many people will ask you
                about it when they come to visit your office!
              </p>
            </div>
          </div>
          <div className={styles['column']}>
            <div
              className={cx({
                'content-image': true,
                'image-right': true,
                'image-loaded': this.state.imageLoaded['image-03'],
              })}
            >
              <LazyLoad
                imageProps={{
                  src: '', //imageOffice2,
                  alt: 'VERY different combinations.',
                  ref: 'image',
                }}
                onContentVisible={() => this.imageLoadedSet('image-03')}
              />
              <span className={styles['content-image__image-description']}>
                VERY different combinations - super cost effective!
              </span>
            </div>
          </div>
        </div>
        <ContactPromoElement />
      </main>
    );
  }
}

ForBusinessView.defaultProps = {};

export default ForBusinessView;

// WEBPACK FOOTER //
// ./src/views/ForBusinessView.js
