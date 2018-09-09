import React, { Component } from 'react';
import BankPayments from '../BankPayments';
import './Footer.css';

class Footer extends Component {
  // eslint-disable-next-line class-methods-use-this
  get year() {
    return new Date().getFullYear();
  }

  render() {
    return (
      <footer>
        <BankPayments />
        <h2>Copyright © {this.year} AVG 88</h2>
      </footer>
    );
  }
}

export default Footer;
