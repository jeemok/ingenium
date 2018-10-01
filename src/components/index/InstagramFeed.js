import React, { Component } from 'react';
import styles from './_instagramFeed.scss';
import classNames from 'classnames/bind';
import Instafeed from 'react-instafeed';

let cx = classNames.bind(styles);

class InstagramFeed extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isMobile: (window.innerWidth < 800),
    };
  }

  shouldComponentUpdate() {
    return false;
  }

  render() {

    return (
      <section className={cx(styles['container'], styles['instagram-feed'])}>
        <ul className={styles['feed-container']} id='instafeed'>

        </ul>
        <Instafeed
          limit={this.state.isMobile ? '3' : '5'}
          ref='instafeed'
          resolution='standard_resolution'
          sortBy='most-recent'
          template='<li><img src="{{image}}" alt="{{model.short_caption}}" /><a href="{{link}}" target="_blank"><span>View on<br>Instagram</a></span></li>'
          userId={this.props.userIdInstagramApiString}
          clientId={this.props.clientIdInstagramApiString}
          accessToken={this.props.accessToken}
        />
      </section>
    );
  }
}

InstagramFeed.defaultProps = {
  userIdInstagramApiString: '2294129900',
  clientIdInstagramApiString: 'b2f37cdd416743e08f52dfa28c54f42e',
  accessToken: '2294129900.1677ed0.a294f12f7dff4e4c935c710890998b56',
}

export default InstagramFeed;



// WEBPACK FOOTER //
// ./src/components/index/InstagramFeed.js
