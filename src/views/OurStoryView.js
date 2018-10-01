import React, { Component } from 'react';
import MetaTags from 'react-meta-tags';
import styles from './_ourStoryView.scss';
import classNames from 'classnames/bind';
import LazyLoad from 'react-image-lazy-load';
import ConfiguratorPromoElement from '../components/index/ConfiguratorPromoElement';

// import image01 from '../../static/images/our-story/our-story-1.jpg';
// import image02 from '../../static/images/our-story/our-story-engraving-optim.gif';
// import image03 from '../../static/images/our-story/our-story-3.jpg';

let cx = classNames.bind(styles);

class OurStoryView extends Component {
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
          <title>Our story | Modulos</title>
          <meta name="title" content="Our story | Modulos" />
          <meta
            name="description"
            content="The story of how a crazy idea, combined with generations-spanning carpentry heritage, turned into a beautiful product that got its first funding through Kickstarter."
          />
          <meta
            name="keywords"
            content="modulos, desk, modular desk, modular, modular desk system, wooden desk, nano material desk, modular desk design, add-on, add on, kickstarter, crowdfunded, family tradition, carpentry, carpenter"
          />
          <meta property="og:site_name" content="Modulos" />
          <meta
            property="og:description"
            content="The story of how a crazy idea, combined with generations-spanning carpentry heritage, turned into a beautiful product that got its first funding through Kickstarter."
          />
          {/* <meta property="og:image" content={image01} /> */}
          <link rel="canonical" href="https://www.modulosdesk.com/our-story" />
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
                The story of how a crazy idea, combined with
                generations-spanning carpentry heritage, turned into a beautiful
                product that got its first funding through Kickstarter.
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
                Like most of young people here in Croatia, our founder Matej
                doesn’t own his own apartment, but rather rents one. He was in
                need of a desk, and wanted a good, quality desk that would hold
                his computer, but also his gadgets like iPad and iPhone, and
                would also have some kind of cabling solution. The problem is
                that quality desks, like everything else of quality, have a
                price tag attached to them.
              </p>
              <p>
                He had an option to have his father, who is a carpenter, to make
                one for him – but the real problem wasn’t the pricetag. What
                would happen with the desk when he unavoidably moves to another
                apartment? Would it fit that new space? Also, the current
                apartment didn’t really have space for a normally sized desk, so
                he would need to shell out a lot of money for a desk that could
                potentially be unsuitable for his future apartment. And just
                like that – the idea behind Modulos was born.
              </p>
              <h2>The idea.</h2>
              <p>
                So, the idea that came to mind was so simple that Matej
                immediately tried to find who makes something like that to buy
                it. But there was no one. And the idea? Simple - make the work
                surface modular. A work surface made of interchangeable square
                tiles allows you to change your desk surface's width, depth and
                shape - essentially solving the problem Matej had, and a problem
                that so many people and businesses have.
              </p>
              <p>
                Then we just gradually upped the stakes. We created "special"
                tiles which can have a hole for cables, an iPad or iPhone dock,
                pens holding grooves, an USB hub. Then we called our tiles
                Modules. And so - Modulos was born.
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
              <span className={styles['image-overlay-text']}>
                So we actually built it. And it's awesome.
              </span>
            </div>
          </div>
          <div className={styles['column']}>
            <div className={styles['left-column-text']}>
              <h2>Evolution of the product</h2>
              <p>
                When we started building the first prototype, the ideas just
                started pouring in. We put in the cabling hole first, then
                grooved pen holders, then the iPad and iPhone docks, then
                finally the USB hub. We have lots more where that came from, and
                plan to implement cool new ones as Modulos steams along!
              </p>
              <p>
                Of course, there already are desks out there that have iPad
                docks and other cool features in their surface - but what if you
                decide you don't want your iPad to be docked to your right any
                more, but would rather have it on your left? Modulos gives you
                that option.
              </p>
              <h2>Backed by worldwide community</h2>
              <p>
                Having an idea and building prototypes is one thing. Turning it
                into a full product is another, and we couldn't have done it
                without the backing we got on Kickstarter from our backers. It
                also gave us strength and courage to go further, and gave us
                even more confidence regarding Modulos as a product!
              </p>
            </div>
          </div>
          <div classNam={styles['column']}>
            <div className={styles['right-column-text']}>
              <h2>Tradition in family produces perfect woodwork</h2>
              <p>
                It's not a coincidence we decided to do a wooden product - our
                CEO's father, grandfather and grand grandfather were carpenters,
                and just as them he worked with them since he was very young.
                His father Dražen, the chief of production in Modulos, stands
                behind this product with his expertise based in 30 years of
                experience, and he checks each module we produce to make sure
                the wood and work quality are absolutely top class.
              </p>
              <p>
                The desk functionality is definitely as in touch with the modern
                times as it gets, but it still gives out the warmth and quality
                feeling of the old top quality made wooden furniture. The
                croatian wood, well known for its quality and beauty, is one to
                blame for this - it just looks georgeous.
              </p>
            </div>
          </div>
        </div>
        <ConfiguratorPromoElement />
      </main>
    );
  }
}

OurStoryView.defaultProps = {};

export default OurStoryView;

// WEBPACK FOOTER //
// ./src/views/OurStoryView.js
