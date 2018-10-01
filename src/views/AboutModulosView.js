import React, { Component } from 'react';
import MetaTags from 'react-meta-tags';
import styles from './_aboutModulosView.scss';
import classNames from 'classnames/bind';
import LazyLoad from 'react-image-lazy-load';
import IndexSuperPractical from '../components/index/IndexSuperPractical';
import ConfiguratorPromoElement from '../components/index/ConfiguratorPromoElement';

// import image01 from '../../static/images/about/modulos-about-1.jpg';
// import image02 from '../../static/images/about/modulos-about-2.jpg';
// import image03 from '../../static/images/about/modulos-about-3.jpg';

let cx = classNames.bind(styles);

class AboutModulosView extends Component {
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
      <main className={styles['static-page-content']}>
        <MetaTags>
          <title>About Modulos | Modulos</title>
          <meta name="title" content="About Modulos | Modulos" />
          <meta
            name="description"
            content="With Modulos, you can customize your work surface to your own individual needs, then customize it again... and again... Get yours now!"
          />
          <meta
            name="keywords"
            content="modulos, desk, modular desk, modular, modular desk system, wooden desk, nano material desk, modular desk design, add-on, add on"
          />
          <meta property="og:site_name" content="Modulos" />
          <meta
            property="og:description"
            content="With Modulos, you can customize your work surface to your own individual needs, then customize it again... and again... Get yours now!"
          />
          {/* <meta property="og:image" content={image02} /> */}
          <link
            rel="canonical"
            href="https://www.modulosdesk.com/about-modulos"
          />
        </MetaTags>
        <div
          className={cx(
            styles['container-wide'],
            styles['layout'],
            styles['two-columns-layout'],
          )}
        >
          <div className={styles['column']}>
            <div className={styles['left-column-text']}>
              <h1>About Modulos</h1>
              <p className={styles['paragraph-accent']}>
                What is Modulos? Why should you get one for yourself? Here's a
                short story about why Modulos was called revolutionary and a
                desk for a new day and age by world media.
              </p>
              <h2>A desk for the new day and age</h2>
              <p>
                Say hello to the first ever desk that will adapt to your life
                and work space and needs, and will never cease to do so! Its
                modular approach to the work surface itself allows you to fully
                utilize your floorplan and have the features that its modules
                offer placed exactly where you need them. And the best thing is
                that it can change along with your needs! The base elements of
                Modulos are its modules, wooden interconnectable tiles that form
                your own custom desk surface. With a variety of modules
                available (and new ones always in the works) you can be sure
                you’ll always be able to have exactly the desk surface that’s
                ideal for you, even if you decide to change your floorplan, move
                to a different flat, or get a new device that just won’t fit the
                desk dock you currently have.
              </p>
            </div>
            <div
              className={cx({
                'content-image': true,
                'image-left': true,
                'image-loaded': this.state.imageLoaded['image-02'],
              })}
            >
              <LazyLoad
                imageProps={{
                  src: '', //image02,
                  alt: 'Modulos easily becomes a centerpiece of your space',
                  ref: 'image',
                }}
                onContentVisible={() => this.imageLoadedSet('image-02')}
              />
            </div>
          </div>
          <div classNam={styles['column']}>
            <div
              className={cx({
                'content-image': true,
                'image-right': true,
                'image-loaded': this.state.imageLoaded['image-01'],
              })}
            >
              <LazyLoad
                imageProps={{
                  src: '', //image01,
                  alt: 'Modulos easily becomes a centerpiece of your space',
                  ref: 'image',
                }}
                onContentVisible={() => this.imageLoadedSet('image-01')}
              />
            </div>
            <div className={styles['right-column-text']}>
              <p>
                Our modules system design also has one other cool aspect – we
                can produce modules with different functions. Need an iPad dock?
                We have a module for that! Need a hole that your cabling can go
                through? There’s a Module for that as well! And the
                possibilities for future modules are endless – modules with
                integrated USB hubs, modules that act as wireless charging pads
                for your devices, holes and grooves for your pencils, monitor
                risers… We could expand the offer of Modules to fit all the
                demands that our customers put in front of us!
              </p>
              <p>
                And you can also place your iPad dock or cabling hole where it
                suits you best! You prefer to have your iPad on the left? No
                worries – Modulos gives you an opportunity to create the perfect
                combination of Modules for you. And if you change your mind?
                Just disassemble and rearrange!
              </p>
              <h2>So is it an office desk?</h2>
              <p>
                Of course it is. We know that a flexible workspace can help you
                do your job better and in a more crative manner - and what
                better can you have than a desk perfectly adapted to your
                personal preferences? Of course, Modulos isn't <i>just</i> an
                office desk. But it sure excels at that role!
              </p>
              <p>
                Because of its completely modular nature, it provides absolute
                flexibility and upgradeability - making it perfect for any
                office space. The fact that it offers infinite possibilities
                when it comes to configuring it enables you to create exactly
                the office you wanted. However, its true power comes into play
                when you decide to redecorate your office or move to a different
                space. With Modulos you no longer need to throw away old
                furniture - you reconfigure, upgrade and reuse! It will always
                fit your new space and needs, whether you decide to create a
                conference desk, or divide a few desks into smaller ones to
                accomodate more people in the office.
              </p>
              <p>
                Modulos brings in a breath of fresh air into the experience of
                purchasing new furniture. You can play around in the
                configurator until you get your perfect desk, and can even share
                the unique URL of your configuration in the configurator to show
                it to your colleagues! Simply, now you can create your very own
                custom workspace straight from the confort of your home.
              </p>
            </div>
          </div>
          <div className={styles['full-span']}>
            <div
              className={cx({
                'content-image': true,
                'image-left': true,
                'image-loaded': this.state.imageLoaded['image-03'],
              })}
            >
              <LazyLoad
                imageProps={{
                  src: '', //image03,
                  alt: 'Modulos easily becomes a centerpiece of your space',
                  ref: 'image',
                }}
                onContentVisible={() => this.imageLoadedSet('image-03')}
              />
            </div>
          </div>
        </div>
        <IndexSuperPractical />
        <ConfiguratorPromoElement />
      </main>
    );
  }
}

AboutModulosView.defaultProps = {};

export default AboutModulosView;

// WEBPACK FOOTER //
// ./src/views/AboutModulosView.js
