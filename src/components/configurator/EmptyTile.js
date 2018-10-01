import React, { Component } from 'react';
import styles from './_emptyTile.scss';
import classNames from 'classnames/bind';
// import FontAwesomeIcon from '@fortawesome/react-fontawesome';
// import { faPlus } from '@fortawesome/pro-light-svg-icons';

let cx = classNames.bind(styles);


class EmptyTile extends Component {
  constructor(props) {
    super(props);

    this.state = {
      tileVisible: false,
    };
  }

  componentDidMount() {
    this.setState({
      tileVisible: true,
    });
  }


  render() {

    const tileClasses = cx({
      'tile': true,
      'tile-empty': true,
      'tile-visible': this.state.tileVisible,
      'disabled': this.props.disabled,
      'another-updating': (this.props.updatingToggled && !this.props.isUpdating),
      'this-updating': this.props.isUpdating
    })

    return (
      <div className={tileClasses} style={this.props.style}>
        <button onClick={() => this.props.toggleAddModuleMenuFunction(this.props.dataUpdatePosition, false)} className={styles['add-button']} disabled={this.props.disabled}>
          Add Icon{/* <FontAwesomeIcon icon={faPlus} className={styles['add-button__icon']} /> */}
        </button>
      </div>
    );
  }
}

EmptyTile.defaultProps = {

}

export default EmptyTile;



// WEBPACK FOOTER //
// ./src/components/configurator/EmptyTile.js
