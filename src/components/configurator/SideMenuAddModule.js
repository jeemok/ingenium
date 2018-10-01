import React, { Component } from 'react';
import styles from './_sideMenuAddModule.scss';
import classNames from 'classnames/bind';
// import FontAwesomeIcon from '@fortawesome/react-fontawesome';
// import { faCaretRight } from '@fortawesome/pro-solid-svg-icons';

import { ModulesData, MaterialsOptions } from '../../data/ModulesData';

let cx = classNames.bind(styles);

class SideMenuAddModule extends Component {
  constructor(props) {
    super(props);

    this.state = {
      sideMenuVisible: this.props.addModuleVisible,
      selectedMaterial: this.props.lastMaterialAdded ? this.props.lastMaterialAdded : 'Aeon',
      selectedColor: this.props.lastColorAdded ? this.props.lastColorAdded : 'dark',
      selectedOrientation: this.props.lastOrientationAdded ? this.props.lastOrientationAdded : 'universal',
      selectedModule: 'basic',
      moduleListExpanded: false,
    };

    this.setMaterial = this.setMaterial.bind(this);
    this.setOrientation = this.setOrientation.bind(this);
    this.setModule = this.setModule.bind(this);
    this.setDataFunction = this.setDataFunction.bind(this);
    this.triggerModulesList = this.triggerModulesList.bind(this);
  }

  setMaterial = (newMaterial, newColor) => {
    const newOrientation = MaterialsOptions.map((material, index) => {
      if (material.materialName === newMaterial) {
        return material.orientations[0].orientationId
      }
    })
    this.setState({
      selectedColor: newColor,
      selectedMaterial: newMaterial,
      selectedOrientation: (newOrientation[0] ? newOrientation[0] : newOrientation[1]),
    })
  }

  triggerModulesList = () => {
    this.setState({
      moduleListExpanded: !this.state.moduleListExpanded,
    })
  }

  setOrientation = (orientation) => {
    this.setState({
      selectedOrientation: orientation,
    })
  }

  setModule = (module) => {
    this.setState({
      selectedModule: module,
    }, () => {
      this.triggerModulesList();
    })
  }

  setDataFunction = () => {
    const newData = {
      moduleName: this.state.selectedModule,
      material: this.state.selectedMaterial,
      orientation: this.state.selectedOrientation,
      color: this.state.selectedColor,
      rotation: this.props.replaceModule ? this.props.addedModules.get(this.props.dataUpdatePosition[1] - 1).get(this.props.dataUpdatePosition[0] - 1).rotation : 0,
      legPositions: this.props.replaceModule ? (
        this.props.addedModules.get(this.props.dataUpdatePosition[1] - 1).get(this.props.dataUpdatePosition[0] - 1).legPositions
      ) : (
        {
          topLeft: false,
          topRight: false,
          bottomRight: false,
          bottomLeft: false,
          middle: false
        }
      ),
      legsCount: 0,
    }
    this.props.setLastMaterialAdded(this.state.selectedMaterial, this.state.selectedColor, this.state.selectedOrientation);
    this.props.updateConfigurationDataFunction( this.props.dataUpdatePosition[0], this.props.dataUpdatePosition[1], newData );
  }

  triggerModuleList = () => {
    this.setState({
      moduleListExpanded: !this.state.moduleListExpanded,
    })
  }

  componentDidMount() {
    if (this.props.replaceModule) {
      const existingModuleData = this.props.addedModules.get(this.props.dataUpdatePosition[1] - 1).get(this.props.dataUpdatePosition[0] - 1);
      console.log(this.props.addedModules);
      const selectedModule = existingModuleData.moduleName;
      const selectedMaterial = existingModuleData.material;
      const selectedColor = existingModuleData.color;
      const selectedOrientation = existingModuleData.orientation;
      this.setState({
        selectedModule: selectedModule,
        selectedMaterial: selectedMaterial,
        selectedColor: selectedColor,
        selectedOrientation: selectedOrientation,
      })
    }
  }

  render() {
    const materialOptions = MaterialsOptions.map((material, index) => {
      return (
        <li key={material.materialName} className={styles['materials-group']}>
          <span className={styles['materials-group-name']}>
            {material.materialName}
          </span>
          <div className={styles['materials-group-options']}>
            {
              material.colors.map((color, position) => {
                return (
                  <button key={color.colorId} className={cx({'material-option': true, 'selected': (color.colorId === this.state.selectedColor)})} onClick={() => this.setMaterial(material.materialName, color.colorId)}>
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

    const orientationOptions = MaterialsOptions.map((material, index) => {
      if (material.materialName === this.state.selectedMaterial) {
        return (
          <div key="orientation-selector" className={styles['orientation-selector']}>
            <h3 className={styles['section-subtitle']}>
              Woodlines orientation:
            </h3>
            <div className={styles['orientations-list']}>
              {
                material.orientations.map((orientation, position) => {
                  return (
                    <button key={orientation.orientationId} className={cx({'orientation-button': true, 'active': (orientation.orientationId === this.state.selectedOrientation)})} onClick={() => this.setOrientation(orientation.orientationId)}>{orientation.orientationName}</button>
                  )
                })
              }
            </div>
          </div>
        )
      }
    });

    const currentlySelectedModule = (
      <li key='selected-module' onClick={() => this.triggerModulesList()} className={cx({'module-item': true, 'selected-module': this.state.moduleListExpanded})}>
        <div className={styles['module-image-container']}>
          <img src={ModulesData[this.state.selectedModule].materialData[this.state.selectedMaterial][this.state.selectedColor].orientation[this.state.selectedOrientation].configuratorImageSurface} alt={ModulesData[this.state.selectedModule].moduleName} />
          <span className={styles['module-image-shadow']} />
        </div>
        <div className={styles['module-info-container']}>
          {ModulesData[this.state.selectedModule].moduleName}
          <span className={styles['module-dimensions']}>
            35x35cm | 13.8x13.8in
          </span>
          <span className={styles['module-short-description']}>
            {ModulesData[this.state.selectedModule].shortDescription}
          </span>
        </div>
        <div className={styles['module-price-container']}>
          ${ModulesData[this.state.selectedModule].materialData[this.state.selectedMaterial][this.state.selectedColor].orientation[this.state.selectedOrientation].price.toFixed(2)}
        </div>
        Expand Icon
        {/* <FontAwesomeIcon
          className={styles['module-list-expand-icon']}
          icon={faCaretRight}
        /> */}
      </li>
    )

    let modulesSelectList = []

    for (const [key, data] of Object.entries(ModulesData)) {
      if (key !== this.state.selectedModule) {
        modulesSelectList.push(
          <li key={key} onClick={() => this.setModule(key)} className={cx(styles['module-item'])}>
            <div className={styles['module-image-container']}>
              <img src={data.materialData[this.state.selectedMaterial][this.state.selectedColor].orientation[this.state.selectedOrientation].configuratorImageSurface} alt={data.moduleName} />
              <span className={styles['module-image-shadow']} />
            </div>
            <div className={styles['module-info-container']}>
              {data.moduleName}
              <span className={styles['module-dimensions']}>
                35x35cm | 13.8x13.8in
              </span>
              <span className={styles['module-short-description']}>
                {data.shortDescription}
              </span>
            </div>
            <div className={styles['module-price-container']}>
              ${data.materialData[this.state.selectedMaterial][this.state.selectedColor].orientation[this.state.selectedOrientation].price.toFixed(2)}
            </div>
            <span className={styles['module-list-expand-icon']} />
          </li>
        )
      }
    }

    return (
      <div className={styles['side-menu']}>
        {this.state.moduleListExpanded ? (
          <h2 className={styles['menu-title']}>
            Select the module
          </h2>
        ) : (
          <h2 className={styles['menu-title']}>
            {this.props.replaceModule ? 'Replace module' : 'Add a module'}
          </h2>
        )}
        {!this.state.moduleListExpanded && (
          <div className={styles['material-selector']}>
            <h3 className={styles['section-subtitle']}>
              Material:
            </h3>
            <ul className={styles['materials']}>
              {materialOptions}
            </ul>
          </div>
        )}
        {((this.state.selectedMaterial === 'Heritage') && !this.state.moduleListExpanded) && orientationOptions}
        <h3 className={styles['section-subtitle']}>
          Select your module below:
        </h3>
        {currentlySelectedModule}
        {this.state.moduleListExpanded && modulesSelectList}
        <div className={styles['main-controls-container']}>
          <div className={styles['dual-cta-container']}>
            <button className={styles['primary-cta']} onClick={() => this.setDataFunction()}>{this.props.replaceModule ? 'Replace' : 'Add'}</button>
            <button className={styles['secondary-cta']} onClick={() => this.props.disableAddModuleMenuFunction()}>Cancel</button>
          </div>
        </div>
      </div>
    );
  }
}

SideMenuAddModule.defaultProps = {

}

export default SideMenuAddModule;



// WEBPACK FOOTER //
// ./src/components/configurator/SideMenuAddModule.js
