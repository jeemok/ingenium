import React, { Component } from 'react';
import styles from './_threeSixtyProductRotation.scss';
import Rotation from 'react-rotation';

class ThreeSixtyProductRotation extends Component {

  render() {
    const rotationImages = this.props.images.map((image, index) => {
      return (
        <img src={image} alt={'Item rotation - position ' + index} />
      )
    })

    return (
      <Rotation
        cycle={true}
        scroll={false}
        reverse={true}
        className={styles['item-rotation']}
      >
        {rotationImages}
      </Rotation>
    );
  }
}

ThreeSixtyProductRotation.defaultProps = {

}

export default ThreeSixtyProductRotation;



// WEBPACK FOOTER //
// ./src/components/index/ThreeSixtyProductRotation.js
