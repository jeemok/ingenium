import React, { Component } from 'react';
import MetaTags from 'react-meta-tags';
import styles from './_materialsView.scss';
import classNames from 'classnames/bind';
import LazyLoad from 'react-image-lazy-load';
import ConfiguratorPromoElement from '../components/index/ConfiguratorPromoElement';

// import imageAeon from '../../static/images/materials/materials-aeon.jpg';
// import imageHeritage from '../../static/images/materials/materials-heritage.jpg';
// import imageHero from '../../static/images/materials/materials-hero.jpg';
//
// import materialHeritageOak from '../../static/images/materials/materials-oak.jpg';
// import materialHeritageWalnut from '../../static/images/materials/materials-walnut.jpg';
// import materialAeonBlack from '../../static/images/materials/materials-aeon-black.jpg';
// import materialAeonSilver from '../../static/images/materials/materials-aeon-silver.jpg';
//
// import aeonIconAntiBacteria from '../../static/images/materials/aeon-icon--anti-bacteria.svg';
// import aeonIconAntiFingerprint from '../../static/images/materials/aeon-icon--anti-fingerprint.svg';
// import aeonIconAntiHeat from '../../static/images/materials/aeon-icon--anti-heat.svg';
// import aeonIconAntiScratch from '../../static/images/materials/aeon-icon--anti-scratch.svg';
// import aeonIconSelfHealing from '../../static/images/materials/aeon-icon--self-healing.svg';

let cx = classNames.bind(styles);

class MaterialsView extends Component {
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
          <title>About the materials we use | Modulos</title>
          <meta name="title" content="About the materials we use | Modulos" />
          <meta
            name="description"
            content="We pride ourselves in the quality and craftsmanship that we have embedded deep into the heart and soul of what Modulos represents. However, all of that would be futile if the materials aren't right - so we put a lot of effort into making sure we use only the best for both our product lines."
          />
          <meta
            name="keywords"
            content="modulos, desk, modular desk, modular, modular desk system, wooden desk, nano material desk, modular desk design, add-on, add on, nano material, nano desk surface, desk surface, oak, natural wood, high quality wood"
          />
          <meta property="og:site_name" content="Modulos" />
          <meta
            property="og:description"
            content="We pride ourselves in the quality and craftsmanship that we have embedded deep into the heart and soul of what Modulos represents. However, all of that would be futile if the materials aren't right - so we put a lot of effort into making sure we use only the best for both our product lines."
          />
          {/* <meta property="og:image" content={imageHero} /> */}
          <link rel="canonical" href="https://www.modulosdesk.com/materials" />
        </MetaTags>
        <div
          className={cx(
            styles['container-wide'],
            styles['layout'],
            styles['one-third-hero'],
          )}
        >
          <div className={styles['column-left']}>
            <h1>Available materials</h1>
            <p>
              We pride ourselves in the quality and craftsmanship that we have
              embedded deep into the heart and soul of what Modulos represents.
              However, all of that would be futile if the materials aren't right
              - so we put a lot of effort into making sure we use only the best
              for both our product lines.
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
                  alt: 'We choose only the best materials available',
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
                  src: '', //imageHeritage,
                  alt: 'Let the beautiful luxurious wood liven your space',
                  ref: 'image',
                }}
                onContentVisible={() => this.imageLoadedSet('image-02')}
              />
            </div>
          </div>
          <div id="heritage" className={styles['column']}>
            <div className={styles['right-column-text']}>
              <h2 className={styles['material-title']}>Heritage</h2>
              <p>
                Croatian wood is well know for its high quality and endurance!
                As far in history as Roman times it was highly valued and
                exploited, and has retained its value ever since. You can find
                Croatian wood everywhere thorught the world, and it is proven to
                retain its strength and beauty for years and years. Just look at
                Venice - it's still standing and it's built on Croatian wood!
              </p>
              <h2>A material with a (hi)story</h2>
              <p>
                Slavonic oak is widely known as extraordinary quaality wood. Its
                significant structure and colour refines furniture design,
                weather it's about classic or modern minimalistic design.
                Historically, it has allways been a symbol of strength and
                endurance, thanks to its quality, massive and beauty.
              </p>
              <p>
                It has been exploited since the Roman Empire, and well known
                „Floating City“ of Venice has been standing on Croatian oak for
                centuries. It can be found in Parliament Houses, and the most
                esquisit barique vines can thank for their distinguished taste
                to Croatian oak made barrels they've been held in.
              </p>
              <h2>The centerpiece of your interior</h2>
              <p>
                We put a lot of effort to make sure that our build quality meets
                top norms and even exceeds them. This means that your desk
                surface will have a special look and feel - as one of our
                customers told us: "I just can't stop going over the surface
                with my hands".
              </p>
              <p>
                While the design style is universal and modern, the luxurious
                wood still makes it stand out in a way that makes it the
                centerpiece of your interior, essentially giving a whole new
                dimension of luxury to your space.
              </p>
            </div>
          </div>
          <div className={styles['full-span']}>
            <div
              className={cx(
                styles['container'],
                styles['material-options-specs'],
              )}
            >
              <h2 className={styles['material-options-specs__title']}>
                Heritage - material options and specifications
              </h2>
              <span
                className={
                  styles['material-options-specs__separator-horizontal']
                }
              />
              <span
                className={cx(
                  styles['material-options-specs__subtitle'],
                  styles['subtitle-first'],
                )}
              >
                Available types of wood
              </span>
              <span className={cx(styles['dummy-placeholder'])} />
              <span
                className={cx(
                  styles['material-options-specs__subtitle'],
                  styles['subtitle-second'],
                )}
              >
                Finish
              </span>
              <div
                className={cx(
                  styles['material-options-specs__section'],
                  styles['section-first'],
                )}
              >
                <div className={styles['material-options-specs__option']}>
                  {/* <img src={materialHeritageOak} alt='Heritage Oak wood' role='presentation' /> */}
                  <div>
                    <h4 className={styles['option-name']}>Natural oak</h4>
                    <p>
                      Full oak wood, sourced only from controlled forest cutting
                    </p>
                  </div>
                </div>
                {/* <div className={cx(styles['material-options-specs__option'], styles['coming-soon'])}>
                  <img src={materialHeritageWalnut} alt='Heritage Oak wood' role='presentation' />
                  <div>
                    <h4 className={styles['option-name']}>
                      Luxurious walnut
                    </h4>
                    <p>
                      Full walnut wood, sourced only from controlled forest cutting
                    </p>
                  </div>
                </div> */}
                <div
                  className={cx(
                    styles['material-options-specs__option'],
                    styles['coming-soon'],
                  )}
                >
                  {/* <img src={materialHeritageWalnut} alt='Coming soon...' role='presentation' /> */}
                  <div>
                    <h4 className={styles['option-name']}>Coming soon...</h4>
                    <p>A new material is in the works...</p>
                  </div>
                </div>
              </div>
              <span class={styles['material-options-specs__separator']} />
              <div
                className={cx(
                  styles['material-options-specs__section'],
                  styles['section-second'],
                )}
              >
                <p>
                  Full wood material, 40mm in thickness. Milled using a 5-axle
                  CNC machine, controlled randomly using a 3D scanner. Sanded
                  and calibrated finish, then varnished using high-quality and
                  resistant Acrylic PU varnish.
                </p>
              </div>
            </div>
          </div>
          <div className={styles['column']}>
            <div
              className={cx({
                'content-image': true,
                'image-left': true,
                'image-loaded': this.state.imageLoaded['image-03'],
              })}
            >
              <LazyLoad
                imageProps={{
                  src: '', //imageAeon,
                  alt:
                    'Have all the features of advanced nano-coatings right at your fingertips',
                  ref: 'image',
                }}
                onContentVisible={() => this.imageLoadedSet('image-03')}
              />
            </div>
          </div>
          <div id="aeon" className={styles['column']}>
            <div className={styles['right-column-text']}>
              <h2 className={styles['material-title']}>Aeon</h2>
              <p>
                With its name coming from the latin word word for “eon”, but
                also for “eternity” - our Aeon series represents the longevity
                and resilience that modern technologies and materials can bring
                to the table.
              </p>
              <h2>
                High-quality plywood as a base, ultra-modern nano laminate as
                the finish
              </h2>
              <p>
                Modulos started with using only full wood as material, however
                we found that there's a need for more modern materials,
                especially for using in modern interiors or offices where heavy
                usage of desks is expected. Since quality was always our
                priority, we set out to find a material that would bring those
                qualities to the table, but also keep the quality level. Our
                Aeon line is the result of those efforts.
              </p>
              <p>
                The base of Aeon modules is plywood, but what gives them that
                special edge is the laminate we use on their surface and their
                sides. It is an ultra-modern material, provided by an innovative
                producer from Italy who distributes it under the name{' '}
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="http://www.fenixforinteriors.com/en/fenixntm"
                >
                  Fenix NTM
                </a>{' '}
                and used in high-end kitchen surfaces and furniture. What drove
                us to it first is its look - it is ultra-matte, has a very
                specific reflection to the light, and is very enjoyable to touch
                - feeling almost soft. However, its technical specifications are
                definitely something to brag about too!
              </p>
              <h2>Modern tech brings incredible capabilities to the table</h2>
              <p>
                Because of the laminate used for our Aeon modules, they are very
                suitable for usage in environments like offices or coworking
                spaces. Their surface has improved resistance to scratches, and
                if light scratching manages to appear - it can actually heal!
                All you need to do is spray a bit of water on the surface, cover
                it with cloth and then use a hot iron over the cloth for 5-10
                seconds (then repeat if necessary).
              </p>
              <p>
                Its surface also has improved resistance to fingerprints, but
                what some will definitely find most appealing is the fact that
                it has high resistance to bacteria and fungus - making it
                perfect for environments where people share desks!
              </p>
            </div>
          </div>
          <div className={styles['full-span']}>
            <div
              className={cx(
                styles['container'],
                styles['material-specs-icons'],
              )}
            >
              <h2 className={styles['material-specs-icons__title']}>
                Aeon - extraordinary performance
              </h2>
              <div className={styles['specs-container']}>
                <div className={styles['specs-item']}>
                  <div className={styles['specs-item__image-container']}>
                    {/* <img src={aeonIconAntiFingerprint} alt="Resistant to fingerprint stains" /> */}
                  </div>
                  <span>Less fingerprint stains</span>
                </div>
                <div className={styles['specs-item']}>
                  <div className={styles['specs-item__image-container']}>
                    {/* <img src={aeonIconAntiBacteria} alt="Augmented resistance to bacteria" /> */}
                  </div>
                  <span>Augmented resistance to bacteria</span>
                </div>
                <div className={styles['specs-item']}>
                  <div className={styles['specs-item__image-container']}>
                    {/* <img src={aeonIconAntiScratch} alt="Increased resistance to scratches" /> */}
                  </div>
                  <span>Increased resistance to scratches</span>
                </div>
                <div className={styles['specs-item']}>
                  <div className={styles['specs-item__image-container']}>
                    {/* <img src={aeonIconAntiHeat} alt="Increased heat resistance of the surfacea" /> */}
                  </div>
                  <span>Increased heat resistance of the surface</span>
                </div>
                <div className={styles['specs-item']}>
                  <div className={styles['specs-item__image-container']}>
                    {/* <img src={aeonIconSelfHealing} alt="Surface self-healing technique" /> */}
                  </div>
                  <span>Surface self-healing technique</span>
                </div>
              </div>
            </div>
          </div>
          <div className={styles['full-span']}>
            <div
              className={cx(
                styles['container'],
                styles['material-options-specs'],
              )}
            >
              <h2 className={styles['material-options-specs__title']}>
                Aeon - material colors and specifications
              </h2>
              <span
                className={
                  styles['material-options-specs__separator-horizontal']
                }
              />
              <span
                className={cx(
                  styles['material-options-specs__subtitle'],
                  styles['subtitle-first'],
                )}
              >
                Available colors
              </span>
              <span className={cx(styles['dummy-placeholder'])} />
              <span
                className={cx(
                  styles['material-options-specs__subtitle'],
                  styles['subtitle-second'],
                )}
              >
                Finish
              </span>
              <div
                className={cx(
                  styles['material-options-specs__section'],
                  styles['section-first'],
                )}
              >
                <div className={styles['material-options-specs__option']}>
                  {/* <img src={materialAeonBlack} alt='Aeon Soft Dark' role='presentation' /> */}
                  <div>
                    <h4 className={styles['option-name']}>Soft Dark</h4>
                    <p>
                      High-quality plywood core, high-quality nano laminate,
                      laser finished side laminate
                    </p>
                  </div>
                </div>
                {/* <div className={styles['material-options-specs__option']}>
                  <img src={materialAeonSilver} alt='Aeon Gentle Silver' role='presentation' />
                  <div>
                    <h4 className={styles['option-name']}>
                      Gentle Silver
                    </h4>
                    <p>
                      High-quality plywood core, high-quality nano laminate, laser finished side laminate
                    </p>
                  </div>
                </div> */}
                <div
                  className={cx(
                    styles['material-options-specs__option'],
                    styles['coming-soon'],
                  )}
                >
                  {/* <img src={materialAeonSilver} alt='Coming soon...' role='presentation' /> */}
                  <div>
                    <h4 className={styles['option-name']}>Coming soon...</h4>
                    <p>A new material is in the works...</p>
                  </div>
                </div>
              </div>
              <span class={styles['material-options-specs__separator']} />
              <div
                className={cx(
                  styles['material-options-specs__section'],
                  styles['section-second'],
                )}
              >
                <p>
                  Modules are based in quality plywood, then laminated with an
                  ultra-high quality nano-based laminate from a bespoke supplier
                  in Italy. The surface finising is ultra matte, and offers
                  increased resistance to the elements and physical damage.
                </p>
              </div>
            </div>
          </div>
        </div>
        <ConfiguratorPromoElement />
      </main>
    );
  }
}

MaterialsView.defaultProps = {};

export default MaterialsView;

// WEBPACK FOOTER //
// ./src/views/MaterialsView.js
