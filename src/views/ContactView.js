import React, { Component } from 'react';
import MetaTags from 'react-meta-tags';
import styles from './_contactView.scss';
import classNames from 'classnames/bind';
import LazyLoad from 'react-image-lazy-load';
import InstagramFeed from '../components/index/InstagramFeed';
// import imageHero from '../../static/images/contact/contact-hero.jpg';

let cx = classNames.bind(styles);

class ContactView extends Component {
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
          <title>Contact us | Modulos</title>
          <meta name="title" content="Contact us | Modulos" />
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
          {/* <meta property="og:image" content={imageHero} /> */}
          <link rel="canonical" href="https://www.modulosdesk.com/contact" />
        </MetaTags>
        <div
          className={cx(
            styles['container-wide'],
            styles['layout'],
            styles['one-third-hero'],
          )}
        >
          <div className={styles['column-left']}>
            <h1>Contact us</h1>
            <p>
              Are you interested in buying our awesome desk? Have any questions?
              Or you'd like to feature our cool product in your media? Feel free
              to ping us!
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
            styles['container'],
            styles['layout'],
            styles['two-columns-layout'],
          )}
        >
          <div className={styles['column']}>
            <div className={styles['contact-info']}>
              <h2 className={styles['contact-title']}>Croatia (HQ)</h2>
              <ul>
                <li>
                  <div className={styles['title']}>Contact person:</div>
                  <div className={styles['content']}>Matej Grozdanović</div>
                </li>
                <li>
                  <div className={styles['title']}>Email:</div>
                  <div className={styles['content']}>
                    <a href="mailto:hello@modulosdesk.com">
                      hello@modulosdesk.com
                    </a>
                  </div>
                </li>
                <li>
                  <div className={styles['title']}>Phone number:</div>
                  <div className={styles['content']}>+385 91 6183 233</div>
                </li>
                <li>
                  <div className={styles['title']}>Address:</div>
                  <div className={styles['content']}>
                    <span>Avenija Dubrovnik 15/12</span>
                    <span> 10020, Zagreb </span>
                    <span>Croatia</span>
                  </div>
                </li>
              </ul>
            </div>
          </div>
          <div className={styles['column']}>
            <div className={styles['contact-info']}>
              <h2 className={styles['contact-title']}>United States</h2>
              <ul>
                <li>
                  <div className={styles['title']}>Contact person:</div>
                  <div className={styles['content']}>Ezra Nazareth</div>
                </li>
                <li>
                  <div className={styles['title']}>Email:</div>
                  <div className={styles['content']}>
                    <a href="mailto:ezra@modulosdesk.com">
                      ezra@modulosdesk.com
                    </a>
                  </div>
                </li>
                <li>
                  <div className={styles['title']}>Phone number:</div>
                  <div className={styles['content']}>+1 813 442 1610</div>
                </li>
                <li>
                  <div className={styles['title']}>Address:</div>
                  <div className={styles['content']}>
                    <span>2000 East 12th Avenue, Suite 5016</span>
                    <span>Tampa, FL, 33605</span>
                    <span>United States of America</span>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className={cx(styles['container'], styles['social-media'])}>
          <h2 className={styles['contact-title']}>Find us on social media!</h2>
          <a
            href="https://www.facebook.com/modulosdesk"
            target="_blank"
            rel="noopener noreferrer"
          >
            Facebook
          </a>
          <a
            href="https://www.instagram.com/modulosdesk"
            target="_blank"
            rel="noopener noreferrer"
          >
            Instagram
          </a>
          <a
            href="https://www.twitter.com/modulosdesk"
            target="_blank"
            rel="noopener noreferrer"
          >
            Twitter
          </a>
        </div>
        <InstagramFeed />
      </main>
    );
  }
}

ContactView.defaultProps = {};

export default ContactView;

// WEBPACK FOOTER //
// ./src/views/ContactView.js
