import React, { Component } from 'react';
import {List} from 'immutable';
import { connect } from 'react-redux';
import styles from './_editingCanvas.scss';
import SingleTile from '../../components/configurator/SingleTile';
import EmptyTile from '../../components/configurator/EmptyTile';
import classNames from 'classnames/bind';

let cx = classNames.bind(styles);

class EditingCanvas extends Component {
  constructor(props) {
    super(props);

    this.state = {
      editingEnabled: this.props.editingEnabled,
      dataUpdatePosition: this.props.dataUpdatePosition,
      currentView: this.props.currentView,
      configurationSetup: this.props.configurationSetup,
      viewData: [],
      rows: 0,
      columns: 0,
    };

    this.parseConfigurationView = this.parseConfigurationView.bind(this);
  }

  parseConfigurationView = () => {
    let configurationView = List();
    let tempRow;
    if (this.state.configurationSetup.get(0).size) {
      // add a frame of undefined items around existing data
      configurationView = List(this.state.configurationSetup.map((row, y) => {
        tempRow = row;
        tempRow = tempRow.unshift(undefined);
        tempRow = tempRow.push(undefined);
        return tempRow;
      }));
      tempRow = List();
      tempRow = tempRow.set(configurationView.get(0).size - 1, undefined);
      configurationView = configurationView.unshift(tempRow);
      configurationView = configurationView.push(tempRow);
      // transform undefined items to placeholder items where necessary
      configurationView = List(configurationView.map((row, y) => {
        const configurationViewRow = List(row.map((item, x) => {
          if (!item) {
            let connectedModule = false;
            // check if there's a module somewhere around
            // 1 - check above
            if (configurationView.get(y-1)) {
              if ((configurationView.get(y-1).get(x) !== undefined) && (configurationView.get(y-1).get(x) !== 'modulePlaceholder')) {
                connectedModule = true;
              }
            }
            // 2 - check below
            if (configurationView.get(y+1)) {
              if ((configurationView.get(y+1).get(x) !== undefined) && (configurationView.get(y+1).get(x) !== 'modulePlaceholder')) {
                connectedModule = true;
              }
            }
            // 3 - check left
            if (configurationView.get(x-1)) {
              if ((configurationView.get(y).get(x-1) !== undefined) && (configurationView.get(y).get(x-1) !== 'modulePlaceholder')) {
                connectedModule = true;
              }
            }
            // 4 - check right
            if (configurationView.get(x+1)) {
              if ((configurationView.get(y).get(x+1) !== undefined) && (configurationView.get(y).get(x+1) !== 'modulePlaceholder')) {
                connectedModule = true;
              }
            }
            if (connectedModule) {
              return 'modulePlaceholder'
            } else {
              return undefined
            }
          } else {
            // if it's a module, just return it to the grid
            return item
          }
        }))
        return configurationViewRow
      }))
    } else {
      configurationView = List();
      configurationView = configurationView.push(List(['modulePlaceholder']));
    }
    const rows = configurationView.size;
    const columns = configurationView.get(0).size;
    this.setState({
      viewData: configurationView,
      columns: columns,
      rows: rows,
    });
  }

  componentDidMount() {
    this.parseConfigurationView();
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.currentView !== this.props.currentView) {
      this.setState({
        currentView: nextProps.currentView
      })
    }
    if (nextProps.configurationSetup !== this.props.configurationSetup) {
      this.setState({
        configurationSetup: nextProps.configurationSetup
      }, () => this.parseConfigurationView())
    }
    if (nextProps.editingEnabled !== this.props.editingEnabled) {
      this.setState({
        editingEnabled: nextProps.editingEnabled,
        dataUpdatePosition: nextProps.dataUpdatePosition,
      })
    }
  }


  render() {

    const tilesRender = this.state.viewData.map((row, index) => {

      return row.map((item, position) => {
        switch (item) {
          case 'modulePlaceholder':
            return (
              <EmptyTile
                disabled = {this.state.currentView === 'legs'}
                key={position + '-' + index}
                style = {{ gridColumn: position + 1, gridRow: index + 1 }}
                dataUpdatePosition = {[position, index]}
                toggleAddModuleMenuFunction = {this.props.toggleAddModuleMenuFunction}
                updatingToggled = {this.state.editingEnabled}
                isUpdating = {(this.state.dataUpdatePosition[0] === position) && (this.state.dataUpdatePosition[1] === index)}
              />
            )
          case null:
            break;
          case undefined:
            break;
          default:
            return (
              <SingleTile
                key={position + '-' + index}
                style = {{ gridColumnStart: position + 1, gridRowStart: index + 1 }}
                moduleName = {item.moduleName}
                material = {item.material}
                color = {item.color}
                orientation = {item.orientation}
                rotation = {item.rotation}
                legPositions = {item.legPositions}
                legsCount = {item.legsCount}
                legPlacementView = {this.state.currentView === 'legs'}
                toggleAddModuleMenuFunction = {this.props.toggleAddModuleMenuFunction}
                dataUpdatePosition = {[position, index]}
                dataUpdateFunction = {this.props.updateConfigurationDataFunction}
                updatingToggled = {this.state.editingEnabled}
                isUpdating = {(this.state.dataUpdatePosition[0] === position) && (this.state.dataUpdatePosition[1] === index)}
              />
            )
        }
      })
    });

    const renderStyle = {
      gridTemplateRows: 'repeat(' + this.state.rows + ', 120px)',
      gridTemplateColumns: 'repeat(' + this.state.columns + ', 120px)',
    }

    const measureXStyle = {
      gridRowStart: this.state.rows,
      gridRowEnd: this.state.rows,
      gridColumnStart: 2,
      gridColumnEnd: this.state.columns
    }

    const measureYStyle = {
      gridRowStart: 2,
      gridRowEnd: this.state.rows,
      gridColumnStart: this.state.columns,
      gridColumnEnd: this.state.columns
    }

    const measuresRender = [
      <div key='measurementX' style={measureXStyle} className={cx(['configuration-measurement'], ['measurement-x'])}>
        <span className={styles['measurement-line']}></span>
        <span className={styles['measurement-text']}>{((this.state.columns - 2) * 35)}cm // {((this.state.columns - 2) * 13.8).toFixed(2)}in</span>
      </div>,
      <div key='measurementY' style={measureYStyle} className={cx(['configuration-measurement'], ['measurement-y'])}>
        <span className={styles['measurement-line']}></span>
        <span className={styles['measurement-text']}>{((this.state.rows - 2) * 35)}cm // {((this.state.rows - 2) * 13.8).toFixed(2)}in</span>
      </div>
    ]

    return (
      <div className={styles['canvas']}>
        {(this.state.configurationSetup.get(0).size === 0) && (
          <div className={styles['beginning-instruction']}>
            Start creating by adding your first module - just click the "+" button on an empty module space below!
          </div>
        )}
        <div className={styles['rendered-content']} style={renderStyle}>
          {tilesRender}
          {(this.state.rows > 1) ? measuresRender : ''}
        </div>
      </div>
    );
  }
}

EditingCanvas.defaultProps = {
  addedModules: true,
}

const mapStateToProps = (state, ownProps) => ({
  configurationSetup: state.configuration.configurationSetup,
})

export default connect(
  mapStateToProps
)(EditingCanvas)



// WEBPACK FOOTER //
// ./src/components/configurator/EditingCanvas.js
