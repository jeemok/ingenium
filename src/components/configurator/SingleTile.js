import React, { Component } from 'react';
import styles from './_singleTile.scss';
import classNames from 'classnames/bind';
// import FontAwesomeIcon from '@fortawesome/react-fontawesome';
// import { faCheck } from '@fortawesome/pro-solid-svg-icons';
// import replaceModuleIcon from '../../../static/images/configurator/replace-module-icon.svg';
// import removeModuleIcon from '../../../static/images/configurator/remove-module-icon.svg';
// import rotateModuleIcon from '../../../static/images/configurator/rotate-module-icon.svg';
// reference data
import { ModulesData } from '../../data/ModulesData';

let cx = classNames.bind(styles);



class SingleTile extends Component {
  constructor(props) {
    super(props);

    this.state = {
      tileVisible: false,
    };

    this.updateLegData = this.updateLegData.bind(this);
  }

  updateLegData = ( leg ) => {
    let newValue = this.props.legPositions;
    newValue[leg] = !newValue[leg];
    const newCount = newValue[leg] ? this.props.legsCount + 1 : this.props.legsCount - 1;
    const newData = {
      moduleName: this.props.moduleName,
      material: this.props.material,
      color: this.props.color,
      orientation: this.props.orientation,
      rotation: this.props.rotation,
      legPositions: newValue,
      legsCount: newCount,
    }
    this.props.dataUpdateFunction(this.props.dataUpdatePosition[0], this.props.dataUpdatePosition[1], newData)
  }

  componentDidMount() {
    this.setState({
      tileVisible: true,
    });
  }


  render() {
    const rotationData = {
      moduleName: this.props.moduleName,
      material: this.props.material,
      color: this.props.color,
      orientation: this.props.orientation,
      rotation: (this.props.rotation + 90) % 360,
      legPositions: this.props.legPositions,
      legsCount: this.props.legsCount,
    }

    const removeData = undefined;

    const tileClasses = cx({
      'tile': true,
      'tile-populated': true,
      'tile-visible': this.state.tileVisible,
      'leg-placement-view': this.props.legPlacementView,
      'another-updating': (this.props.updatingToggled && !this.props.isUpdating),
      'this-updating': this.props.isUpdating
    })

    const surfaceImageClasses = cx({
      'surface-image': true,
      'rotate-90': (this.props.rotation === 90),
      'rotate-180': (this.props.rotation === 180),
      'rotate-270': (this.props.rotation === 270),
    })

    const moduleData = {
      moduleName: ModulesData[this.props.moduleName].moduleName,
      materialData: ModulesData[this.props.moduleName].materialData[this.props.material][this.props.color].orientation[this.props.orientation]
    };

    const legButtons = (this.props.moduleName !== 'radial') ? (
      <div className={styles['legs-container']}>
        <button onClick={() => this.updateLegData('topLeft')} className={cx({'leg-button': true, 'leg-top-left': true, 'leg-placed': this.props.legPositions.topLeft})}>
          Test Icon Mok{/* <FontAwesomeIcon icon={faCheck} className={styles['leg-button-icon']} /> */}
        </button>
        <button onClick={() => this.updateLegData('topRight')} className={cx({'leg-button': true, 'leg-top-right': true, 'leg-placed': this.props.legPositions.topRight})}>
          Test Icon Mok{/* <FontAwesomeIcon icon={faCheck} className={styles['leg-button-icon']} /> */}
        </button>
        <button onClick={() => this.updateLegData('bottomRight')} className={cx({'leg-button': true, 'leg-bottom-right': true, 'leg-placed': this.props.legPositions.bottomRight})}>
          Test Icon Mok{/* <FontAwesomeIcon icon={faCheck} className={styles['leg-button-icon']} /> */}
        </button>
        <button onClick={() => this.updateLegData('bottomLeft')} className={cx({'leg-button': true, 'leg-bottom-left': true, 'leg-placed': this.props.legPositions.bottomLeft})}>
          Test Icon Mok{/* <FontAwesomeIcon icon={faCheck} className={styles['leg-button-icon']} /> */}
        </button>
      </div>
    ) : (
      <div className={styles['legs-container']}>
        <button onClick={() => this.updateLegData('middle')} className={cx({'leg-button': true, 'leg-middle': true, 'leg-placed': this.props.legPositions.middle})}>
          Test Icon Mok{/* <FontAwesomeIcon icon={faCheck} className={styles['leg-button-icon']} /> */}
        </button>
      </div>
    )

    return (
      <div className={tileClasses} style={this.props.style}>
        <span className={surfaceImageClasses} style={{ backgroundImage: 'url(' + moduleData.materialData.configuratorImageSurface + ')' }} />
        {!this.props.updatingToggled && (
          <div className={styles['action-buttons-container']}>
            <button onClick={() => this.props.dataUpdateFunction(this.props.dataUpdatePosition[0], this.props.dataUpdatePosition[1], rotationData)} className={cx(styles['action-button'], styles['action-button-left'])}>
              {/* <img src={rotateModuleIcon} alt='Rotate module clockwise' role='presentation' /> */}
            </button>
            <button onClick={() => this.props.toggleAddModuleMenuFunction(this.props.dataUpdatePosition, true)} className={cx(styles['action-button'], styles['action-button-main'])}>
              {/* <img src={replaceModuleIcon} alt='Replace module' role='presentation' /> */}
            </button>
            <button onClick={() => this.props.dataUpdateFunction(this.props.dataUpdatePosition[0], this.props.dataUpdatePosition[1], removeData)} className={cx(styles['action-button'], styles['action-button-right'])}>
              {/* <img src={removeModuleIcon} alt='Remove module' role='presentation' /> */}
            </button>
          </div>
        )}
        {this.props.legPlacementView && (
          legButtons
        )}
      </div>
    );
  }
}

SingleTile.defaultProps = {
  material: '',
  color: '',
  orientation: '',
  isEmpty: false,
  rotation: 0,
}

export default SingleTile;



// WEBPACK FOOTER //
// ./src/components/configurator/SingleTile.js
