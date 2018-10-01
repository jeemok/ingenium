import React, { Component } from 'react';
import styles from './_materialOptionsSelector.scss';
import classNames from 'classnames/bind';
import { MaterialsOptions } from '../../data/ModulesData';
let cx = classNames.bind(styles);

class MaterialOptionsSelector extends Component {
  constructor(props) {
    super(props);

    this.state = {
      selectedMaterial: 'Aeon',
      selectedColor: 'dark',
      selectedOrientation: 'universal',
    };

    this.setMaterial = this.setMaterial.bind(this);
    this.setOrientation = this.setOrientation.bind(this);
    this.updateView = this.updateView.bind(this);
  }

  setMaterial = (newMaterial, newColor, materialIndex) => {
    const newOrientation = (newMaterial !== this.state.selectedMaterial) ? MaterialsOptions[materialIndex].orientations[0].orientationId : this.state.selectedOrientation;
    this.setState({
      selectedMaterial: newMaterial,
      selectedColor: newColor,
      selectedOrientation: newOrientation,
    }, () => this.updateView());
  }

  setOrientation = (newOrientation) => {
    this.setState({
      selectedOrientation: newOrientation,
    }, () => this.updateView());
  }

  updateView = () => {
    this.props.updateViewSettingsFunction(this.state.selectedMaterial, this.state.selectedColor, this.state.selectedOrientation);
  }

  render() {
    const materialOptions = MaterialsOptions.map((material, index) => {
      return (
        <li key={material.materialName} className={styles['materials-group']}>
          <span className={styles['options-group-name']}>
            {material.materialName}
          </span>
          <div className={styles['options-group-options']}>
            {
              material.colors.map((color, position) => {
                return (
                  <button key={color.colorId} className={cx({'option-button': true, 'selected': (color.colorId === this.state.selectedColor)})} onClick={() => this.setMaterial(material.materialName, color.colorId, index)}>
                    <img src={color.colorImage} alt={color.colorName} role="presentation" />
                    <span>{color.colorName}</span>
                  </button>
                )
              })
            }
          </div>
        </li>
      )
    });

    const materialOrientationOptions = MaterialsOptions.filter((material) => {
      if (material.materialName === this.state.selectedMaterial) return material;
    })

    const orientationOptions =  materialOrientationOptions[0].orientations.map((orientation, position) => {
      return (
        <button key={orientation.orientationId} className={cx({'option-button': true, 'selected': (orientation.orientationId === this.state.selectedOrientation)})} onClick={() => this.setOrientation(orientation.orientationId)}>
          <img src={orientation.orientationImage} alt={orientation.orientationName} role="presentation" />
          <span>{orientation.orientationName}</span>
        </button>
      )
    })

    const orientationsWrapper = (orientationOptions.length > 1) ? (
      <div className={styles['orientations']}>
        <div className={styles['instruction-title']}>
          Wood lines orientation:
        </div>
        <div key="orientation-selector" className={styles['orientation-selector']}>
          <span className={cx(styles['options-group-name'], styles['lighter'])}>
            (heritage-only)
          </span>
          <div className={styles['orientations-list']}>
            {orientationOptions}
          </div>
        </div>
      </div>
    ) : '';

    return (
      <ul className={styles['material-options']}>
        <div className={styles['selector-group']}>
          <div className={styles['instruction-title']}>Select the material:</div>
          <ul className={styles['materials']}>
            {materialOptions}
          </ul>
        </div>
        {orientationsWrapper}
      </ul>
    );
  }
}

MaterialOptionsSelector.defaultProps = {

}

export default MaterialOptionsSelector;



// WEBPACK FOOTER //
// ./src/components/index/MaterialOptionsSelector.js
