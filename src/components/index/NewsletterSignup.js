import React, { Component } from 'react';
import styles from './_newsletterSignup.scss';
import classNames from 'classnames/bind';
import MailchimpSubscribe from 'react-mailchimp-subscribe';

const mailChimpUrl = 'https://modulosdesk.us12.list-manage.com/subscribe/post?u=4a2513f2cb1f23396e8ba5497&amp;id=ec26bf4127';

let cx = classNames.bind(styles);

const SubscribeForm = ({ status, message, onValidated }) => {
  let email;

  const submit= () => email && email.value.indexOf('@') > -1 && onValidated({
    EMAIL: email.value,
  });

  return (
    <div className={styles['signup-form']}>
      {status === 'sending' && (
        <div className={cx(styles['form-feedback'], styles['feedback-sending'])}>
          Sending...
        </div>
      )}
      {status === 'error' && (
        <div className={cx(styles['form-feedback'], styles['feedback-error'])} dangerouslySetInnerHTML={{__html: message}}>
        </div>
      )}
      {status === 'success' && (
        <div className={cx(styles['form-feedback'], styles['feedback-success'])} dangerouslySetInnerHTML={{__html: message}}>
        </div>
      )}
      {status === null && (
        <div className={styles['input-container']}>
          <input
            className={styles['input-field']}
            ref={node => (email = node)}
            type="email"
            placeholder="Your email address"
          />
          <button className={styles['submit-button']} onClick={submit}>Sign me up!</button>
        </div>
      )}
    </div>
  )
}

class NewsletterSignup extends Component {

  render() {

    return (
      <section className={cx({ 'container': true, 'newsletter-signup': true})}>
        <div className={styles['intro-text']}>
          <h2>Sign up for our newsletter and follow us on social media</h2>
          <p>We are constantly working on expanding our product line, creating cool new modules and introducing new materials. We also use our newsletter to announce important updates and special offers. If you're interested, you can simply sign up by entering your email address below. You can also follow us on our social media channels: <a href="https://www.facebook.com/modulosdesk">Facebook</a>, <a href="https://www.instagram.com/modulosdesk">Instagram</a> and <a href="https://www.twitter.com/modulosdesk">Twitter</a>!</p>
          <h4>Sign up for our newsletter below and be among the first ones to know about our special offers, discounts and exciting new announcements!</h4>
        </div>
        <MailchimpSubscribe
          url={mailChimpUrl}
          render={({ subscribe, status, message }) => (
            <SubscribeForm
              status={status}
              message={message}
              onValidated={formData => subscribe(formData)}
            />
          )}
        />
      </section>
    );
  }
}

NewsletterSignup.defaultProps = {

}

export default NewsletterSignup;



// WEBPACK FOOTER //
// ./src/components/index/NewsletterSignup.js
