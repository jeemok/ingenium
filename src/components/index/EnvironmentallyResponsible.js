import React, { Component } from 'react';
import styles from './_environmentallyResponsible.scss';
// import graphic from '../../../static/images/index/environmentally-responsible.png';
import classNames from 'classnames/bind';

let cx = classNames.bind(styles);

class EnvironmentallyResponsible extends Component {

  render() {

    return (
      <section className={cx(styles['container-wide'], styles['environmentally-responsible'])}>
        <div className={cx(styles['container'], styles['environmentally-responsible-content'])}>
          <div className={styles['content-wrapper']}>
            <h2>Environmentally responsible by reducing waste</h2>
            <p>Currently there's a lot of material being just thrown away because the old desk got scratched in one place of the surface, it's leg broke, it's become too small or too big. The Modulos idea of owning a desk battles this wasteful practice. Why throw away good material and then cut down a bunch of trees for the new one, when you can replace only the part that you don't need or upgrade the whole thing?</p>
          </div>
          {/* <img className={styles['environmentally-responsible-graphic']} src={graphic} alt='Modulos is environmentally responsible in its core' role='presentation' /> */}
        </div>
      </section>
    );
  }
}

EnvironmentallyResponsible.defaultProps = {

}

export default EnvironmentallyResponsible;



// WEBPACK FOOTER //
// ./src/components/index/EnvironmentallyResponsible.js
