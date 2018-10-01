import React, { Component } from 'react';
import styles from './_cookieNotification.scss';
// import graphic from '../../../static/images/wood-cookie--modulos.svg';
import classNames from 'classnames/bind';
let cx = classNames.bind(styles);

class CookieNotification extends Component {
  constructor(props) {
    super(props);

    this.state = {
      showNotification: false,
    };

    this.dismissNotification = this.dismissNotification.bind(this);
  }

  dismissNotification = () => {
    this.setState({
      showNotification: false,
    });
  }

  componentDidMount() {
    this.setState({
      showNotification: this.props.showNotification && true,
    });
  }


  render() {

    return (
      <div className={cx({'cookie-notification': true, 'did-load': this.state.showNotification})}>
        {/* <img src={graphic} alt='We use cookies!' /> */}
        <p>Just wanted to let you know we use <a href="/cookies">cookies</a> to help us deliver our services. By using our services, you agree to our use of cookies.</p>
        <button className={styles['dismiss-button']} onClick={ () => this.dismissNotification() }>Got it, thanks!</button>
      </div>
    );
  }
}

CookieNotification.defaultProps = {
  showNotification: true,
}

export default CookieNotification;



// WEBPACK FOOTER //
// ./src/components/index/CookieNotification.js
