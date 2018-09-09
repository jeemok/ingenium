import React from 'react';
import { Image } from 'semantic-ui-react';
import styles from './BankPayments.css';

const BankPayments = () => (
  <div>
    <h2 className={styles.title}>Bank Payments</h2>
    <Image.Group>
      <Image
        src="static/images/bank_payments/maybank.png"
        className={styles.bankLogo}
      />
      <Image
        src="static/images/bank_payments/public.png"
        className={styles.bankLogo}
      />
      <Image
        src="static/images/bank_payments/cimb.png"
        className={styles.bankLogo}
      />
      <Image
        src="static/images/bank_payments/hongleong.png"
        className={styles.bankLogo}
      />
      <Image
        src="static/images/bank_payments/rhb.png"
        className={styles.bankLogo}
      />
      <Image
        src="static/images/bank_payments/bsn.png"
        className={styles.bankLogo}
      />
      <Image
        src="static/images/bank_payments/ambank.png"
        className={styles.bankLogo}
      />
    </Image.Group>
  </div>
);

export default BankPayments;
