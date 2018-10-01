import React, { Component } from 'react';
import styles from './_threeDeeTest.scss';
import { connect } from 'react-redux';
import * as THREE from 'three';
import OrbitControls from 'three-orbitcontrols';
import React3 from 'react-three-renderer';
import { ModulesData } from '../../data/ModulesData';
import { LegsData } from '../../data/LegsData';
// import moduleSide01 from '../../../static/images/3d-models/test-textures/module-side-texture-01.jpg';
// import moduleSide02 from '../../../static/images/3d-models/test-textures/module-side-texture-02.jpg';
// import moduleBottom from '../../../static/images/3d-models/test-textures/basic-bottom.jpg';
// import aeonDarkModuleBottom from '../../../static/images/3d-models/test-textures/basic-aeon-dark-bottom.jpg';
// import aeonDarkModuleSide from '../../../static/images/3d-models/test-textures/aeon-dark-module-side-texture.jpg';
// import legOak from '../../../static/images/3d-models/test-textures/leg-oak.jpg';

class ModuleRender extends Component {

  render() {
    const materialTextures = {
      'Heritage': {
        'oak': {
          sideOne: '',// moduleSide02,
          sideTwo: '',//moduleSide01,
          bottom: '',//moduleBottom,
        }
      },
      'Aeon': {
        'dark': {
          sideOne: '',//aeonDarkModuleSide,
          sideTwo: '',//aeonDarkModuleSide,
          bottom: '',//aeonDarkModuleBottom,
        },
        'light': {
          sideOne: '',//aeonDarkModuleSide,
          sideTwo: '',//aeonDarkModuleSide,
          bottom: '',//aeonDarkModuleBottom,
        }
      }
    }

    let topLeftLeg, topRightLeg, bottomRightLeg, bottomLeftLeg, middleLeg;
    if (this.props.legsSettings.legShape === "square") {
      topLeftLeg = <SquareLeg
        positionX = {-145}
        positionY = {-115}
        rotation = {-90}
        legHeight = {this.props.legsSettings.legHeight}
        texture = {this.props.legsSettings.texture}
        color = {this.props.legsSettings.color}
      />
      topRightLeg = <SquareLeg
        positionX = {115}
        positionY = {-145}
        rotation = {0}
        legHeight = {this.props.legsSettings.legHeight}
        texture = {this.props.legsSettings.texture}
        color = {this.props.legsSettings.color}
      />
      bottomRightLeg = <SquareLeg
        positionX = {145}
        positionY = {115}
        rotation = {90}
        legHeight = {this.props.legsSettings.legHeight}
        texture = {this.props.legsSettings.texture}
        color = {this.props.legsSettings.color}
      />
      bottomLeftLeg = <SquareLeg
        positionX = {-115}
        positionY = {145}
        rotation = {180}
        legHeight = {this.props.legsSettings.legHeight}
        texture = {this.props.legsSettings.texture}
        color = {this.props.legsSettings.color}
      />
      middleLeg = <SquareLeg
        positionX = {0}
        positionY = {0}
        rotation = {90}
        legHeight = {this.props.legsSettings.legHeight}
        texture = {this.props.legsSettings.texture}
        color = {this.props.legsSettings.color}
      />
    } else if (this.props.legsSettings.legShape === "round") {
      topLeftLeg = <RoundLeg
        positionX = {-145}
        positionY = {-115}
        rotation = {-90}
        legHeight = {this.props.legsSettings.legHeight}
        texture = {this.props.legsSettings.texture}
        color = {this.props.legsSettings.color}
      />
      topRightLeg = <RoundLeg
        positionX = {115}
        positionY = {-145}
        rotation = {0}
        legHeight = {this.props.legsSettings.legHeight}
        texture = {this.props.legsSettings.texture}
        color = {this.props.legsSettings.color}
      />
      bottomRightLeg = <RoundLeg
        positionX = {145}
        positionY = {115}
        rotation = {90}
        legHeight = {this.props.legsSettings.legHeight}
        texture = {this.props.legsSettings.texture}
        color = {this.props.legsSettings.color}
      />
      bottomLeftLeg = <RoundLeg
        positionX = {-115}
        positionY = {145}
        rotation = {180}
        legHeight = {this.props.legsSettings.legHeight}
        texture = {this.props.legsSettings.texture}
        color = {this.props.legsSettings.color}
      />
      middleLeg = <RoundLeg
        positionX = {0}
        positionY = {0}
        rotation = {90}
        legHeight = {this.props.legsSettings.legHeight}
        texture = {this.props.legsSettings.texture}
        color = {this.props.legsSettings.color}
      />
    } else if (this.props.legsSettings.legShape === "cone") {
      topLeftLeg = <ConeLeg
        positionX = {-145}
        positionY = {-115}
        rotation = {-90}
        legHeight = {this.props.legsSettings.legHeight}
        texture = {this.props.legsSettings.texture}
        color = {this.props.legsSettings.color}
      />
      topRightLeg = <ConeLeg
        positionX = {115}
        positionY = {-145}
        rotation = {0}
        legHeight = {this.props.legsSettings.legHeight}
        texture = {this.props.legsSettings.texture}
        color = {this.props.legsSettings.color}
      />
      bottomRightLeg = <ConeLeg
        positionX = {145}
        positionY = {115}
        rotation = {90}
        legHeight = {this.props.legsSettings.legHeight}
        texture = {this.props.legsSettings.texture}
        color = {this.props.legsSettings.color}
      />
      bottomLeftLeg = <ConeLeg
        positionX = {-115}
        positionY = {145}
        rotation = {180}
        legHeight = {this.props.legsSettings.legHeight}
        texture = {this.props.legsSettings.texture}
        color = {this.props.legsSettings.color}
      />
      middleLeg = <ConeLeg
        positionX = {0}
        positionY = {0}
        rotation = {90}
        legHeight = {this.props.legsSettings.legHeight}
        texture = {this.props.legsSettings.texture}
        color = {this.props.legsSettings.color}
      />
    } else if (this.props.legsSettings.legShape === "round") {
      topLeftLeg = <RoundLeg
        positionX = {-145}
        positionY = {-115}
        rotation = {-90}
        legHeight = {this.props.legsSettings.legHeight}
        texture = {this.props.legsSettings.texture}
        color = {this.props.legsSettings.color}
      />
      topRightLeg = <RoundLeg
        positionX = {115}
        positionY = {-145}
        rotation = {0}
        legHeight = {this.props.legsSettings.legHeight}
        texture = {this.props.legsSettings.texture}
        color = {this.props.legsSettings.color}
      />
      bottomRightLeg = <RoundLeg
        positionX = {145}
        positionY = {115}
        rotation = {90}
        legHeight = {this.props.legsSettings.legHeight}
        texture = {this.props.legsSettings.texture}
        color = {this.props.legsSettings.color}
      />
      bottomLeftLeg = <RoundLeg
        positionX = {-115}
        positionY = {145}
        rotation = {180}
        legHeight = {this.props.legsSettings.legHeight}
        texture = {this.props.legsSettings.texture}
        color = {this.props.legsSettings.color}
      />
      middleLeg = <RoundLeg
        positionX = {0}
        positionY = {0}
        rotation = {90}
        legHeight = {this.props.legsSettings.legHeight}
        texture = {this.props.legsSettings.texture}
        color = {this.props.legsSettings.color}
      />
    } else if (this.props.legsSettings.legShape === "hairpin") {
      topLeftLeg = <HairpinLeg
        positionX = {-145}
        positionY = {-115}
        rotation = {-90}
        legHeight = {this.props.legsSettings.legHeight}
        texture = {this.props.legsSettings.texture}
        color = {this.props.legsSettings.color}
      />
      topRightLeg = <HairpinLeg
        positionX = {115}
        positionY = {-145}
        rotation = {0}
        legHeight = {this.props.legsSettings.legHeight}
        texture = {this.props.legsSettings.texture}
        color = {this.props.legsSettings.color}
      />
      bottomRightLeg = <HairpinLeg
        positionX = {145}
        positionY = {115}
        rotation = {90}
        legHeight = {this.props.legsSettings.legHeight}
        texture = {this.props.legsSettings.texture}
        color = {this.props.legsSettings.color}
      />
      bottomLeftLeg = <HairpinLeg
        positionX = {-115}
        positionY = {145}
        rotation = {180}
        legHeight = {this.props.legsSettings.legHeight}
        texture = {this.props.legsSettings.texture}
        color = {this.props.legsSettings.color}
      />
      middleLeg = <HairpinLeg
        positionX = {0}
        positionY = {0}
        rotation = {90}
        legHeight = {this.props.legsSettings.legHeight}
        texture = {this.props.legsSettings.texture}
        color = {this.props.legsSettings.color}
      />
    }

    return(
      <group
        position={new THREE.Vector3(this.props.positionX * 350, 0, this.props.positionY * 350)}
      >
        <group
          rotation={new THREE.Euler(0, this.props.rotation / 180 * -Math.PI, 0)}
        >
          <mesh position={new THREE.Vector3(0, 20, -175)} rotation={new THREE.Euler(0, Math.PI, 0)} >
            <planeGeometry width={350} height={40} />
            <meshLambertMaterial>
              <texture url={materialTextures[this.props.material][this.props.color].sideOne} />
            </meshLambertMaterial>
          </mesh>
          <mesh position={new THREE.Vector3(0, 20, 175)} rotation={new THREE.Euler(0, 0, 0)} >
            <planeGeometry width={350} height={40} />
            <meshLambertMaterial>
              <texture url={materialTextures[this.props.material][this.props.color].sideOne} />
            </meshLambertMaterial>
          </mesh>
          <mesh position={new THREE.Vector3(175, 20, 0)} rotation={new THREE.Euler(0, Math.PI/2, 0)} >
            <planeGeometry width={350} height={40} />
            <meshLambertMaterial>
              <texture url={materialTextures[this.props.material][this.props.color].sideTwo} />
            </meshLambertMaterial>
          </mesh>
          <mesh position={new THREE.Vector3(-175, 20, 0)} rotation={new THREE.Euler(0, Math.PI/2*3, 0)} >
            <planeGeometry width={350} height={40} />
            <meshLambertMaterial>
              <texture url={materialTextures[this.props.material][this.props.color].sideTwo} />
            </meshLambertMaterial>
          </mesh>
          <mesh position={new THREE.Vector3(0, 0, 0)} rotation={new THREE.Euler(Math.PI/2, 0, 0)} >
            <planeGeometry width={350} height={350} />
            <meshLambertMaterial>
              <texture url={materialTextures[this.props.material][this.props.color].bottom} />
            </meshLambertMaterial>
          </mesh>
          <mesh position={new THREE.Vector3(0, 40, 0)} rotation={new THREE.Euler(Math.PI/2*3, 0, 0)} >
            <planeGeometry width={350} height={350} />
            <meshLambertMaterial>
              <texture url={this.props.moduleTopTexture} />
            </meshLambertMaterial>
          </mesh>
        </group>
        {(this.props.topLeftLeg) && topLeftLeg}
        {(this.props.topRightLeg) && topRightLeg}
        {(this.props.bottomRightLeg) && bottomRightLeg}
        {(this.props.bottomLeftLeg) && bottomLeftLeg}
        {(this.props.middleLeg) && middleLeg}
      </group>
    )
  }
}

class SquareLeg extends Component {

  render() {
    const materialTextures = {
      'oak': legOak,
      'none': '',
    }

    const materialColors = {
      'metal-standard': 0xC0C0C0,
    }
    return(
      <group
        rotation={new THREE.Euler(0, this.props.rotation / 180 * -Math.PI, 0)}
        position={new THREE.Vector3(this.props.positionX, 0, this.props.positionY)}
      >
        <mesh position={new THREE.Vector3(0,-3,0)}>
          <boxGeometry width={108} height={5} depth={54} />
          <meshStandardMaterial color={materialColors['metal-standard']}>
          </meshStandardMaterial>
        </mesh>
        <mesh position={new THREE.Vector3(27,-3,54)}>
          <boxGeometry width={54} height={5} depth={54} />
          <meshStandardMaterial color={materialColors['metal-standard']}>
          </meshStandardMaterial>
        </mesh>
        <mesh position={new THREE.Vector3(27,-(this.props.legHeight-5) / 2 - 5,0)}>
          <boxGeometry width={50} height={this.props.legHeight-5} depth={50} />
          {this.props.texture ? (
            <meshLambertMaterial color={materialColors['metal-standard']}>
              <texture url={materialTextures[this.props.texture]} />
            </meshLambertMaterial>
          ) : (
            <meshLambertMaterial color={materialColors[this.props.color]}>
            </meshLambertMaterial>
          )}
        </mesh>
      </group>
    )
  }
}

class RoundLeg extends Component {

  render() {
    const materialTextures = {
      'oak': '',//legOak,
      'none': '',
    }

    const materialColors = {
      'metal-standard': 0xC0C0C0,
    }
    return(
      <group
        rotation={new THREE.Euler(0, this.props.rotation / 180 * -Math.PI, 0)}
        position={new THREE.Vector3(this.props.positionX, 0, this.props.positionY)}
      >
        <mesh position={new THREE.Vector3(0,-3,0)}>
          <boxGeometry width={108} height={5} depth={54} />
          <meshStandardMaterial color={materialColors['metal-standard']}>
          </meshStandardMaterial>
        </mesh>
        <mesh position={new THREE.Vector3(27,-3,54)}>
          <boxGeometry width={54} height={5} depth={54} />
          <meshStandardMaterial color={materialColors['metal-standard']}>
          </meshStandardMaterial>
        </mesh>
        <mesh position={new THREE.Vector3(27,-(this.props.legHeight-5) / 2 - 5,0)}>
          <cylinderGeometry radiusTop={25} radiusBottom={25} radialSegments={128} height={this.props.legHeight-5} />
          {this.props.texture ? (
            <meshLambertMaterial color={materialColors['metal-standard']}>
              <texture url={materialTextures[this.props.texture]} />
            </meshLambertMaterial>
          ) : (
            <meshLambertMaterial color={materialColors[this.props.color]}>
            </meshLambertMaterial>
          )}
        </mesh>
      </group>
    )
  }
}

class ConeLeg extends Component {

  render() {
    const materialTextures = {
      'oak': '',//legOak,
      'none': '',
    }

    const materialColors = {
      'metal-standard': 0xC0C0C0,
    }
    return(
      <group
        rotation={new THREE.Euler(0, this.props.rotation / 180 * -Math.PI, 0)}
        position={new THREE.Vector3(this.props.positionX, 0, this.props.positionY)}
      >
        <mesh position={new THREE.Vector3(0,-3,0)}>
          <boxGeometry width={108} height={5} depth={54} />
          <meshStandardMaterial color={materialColors['metal-standard']}>
          </meshStandardMaterial>
        </mesh>
        <mesh position={new THREE.Vector3(27,-3,54)}>
          <boxGeometry width={54} height={5} depth={54} />
          <meshStandardMaterial color={materialColors['metal-standard']}>
          </meshStandardMaterial>
        </mesh>
        <mesh position={new THREE.Vector3(27,-(this.props.legHeight-5) / 2 - 5,0)}>
          <cylinderGeometry radiusTop={25} radiusBottom={13} radialSegments={128} height={this.props.legHeight-5} />
          {this.props.texture ? (
            <meshLambertMaterial color={materialColors['metal-standard']}>
              <texture url={materialTextures[this.props.texture]} />
            </meshLambertMaterial>
          ) : (
            <meshLambertMaterial color={materialColors[this.props.color]}>
            </meshLambertMaterial>
          )}
        </mesh>
      </group>
    )
  }
}

class HairpinLeg extends Component {

  render() {
    const materialColors = {
      'metal-standard': 0xC0C0C0,
      'anthracite': 0x3B3B3B,
    }

    return(
      <group
        rotation={new THREE.Euler(0, this.props.rotation / 180 * -Math.PI, 0)}
        position={new THREE.Vector3(this.props.positionX, 0, this.props.positionY)}
      >
        <mesh position={new THREE.Vector3(0,-3,0)}>
          <boxGeometry width={108} height={5} depth={54} />
          <meshStandardMaterial color={materialColors['anthracite']}>
          </meshStandardMaterial>
        </mesh>
        <mesh position={new THREE.Vector3(27,-3,54)}>
          <boxGeometry width={54} height={5} depth={54} />
          <meshStandardMaterial color={materialColors['anthracite']}>
          </meshStandardMaterial>
        </mesh>
        <mesh
          position={new THREE.Vector3(37,-(this.props.legHeight-5) / 2 +10,40)}
          rotation={new THREE.Euler(Math.PI/55, 0, 0)}
        >
          <cylinderGeometry radiusTop={6} radiusBottom={6} radialSegments={128} height={this.props.legHeight-30} />
          <meshLambertMaterial color={materialColors['anthracite']} />
        </mesh>
        <mesh
          position={new THREE.Vector3(-25,-(this.props.legHeight-5) / 2 +10,0)}
          rotation={new THREE.Euler(0, 0, Math.PI/55)}
        >
          <cylinderGeometry radiusTop={6} radiusBottom={6} radialSegments={128} height={this.props.legHeight-30} />
          <meshLambertMaterial color={materialColors['anthracite']} />
        </mesh>
        <mesh
          position={new THREE.Vector3(25,-(this.props.legHeight-5) / 2 +10,0)}
          rotation={new THREE.Euler(-Math.PI/120, 0, -Math.PI/120)}
        >
          <cylinderGeometry radiusTop={6} radiusBottom={6} radialSegments={128} height={this.props.legHeight-5} />
          <meshLambertMaterial color={materialColors['anthracite']} />
        </mesh>
        <mesh
          position={new THREE.Vector3(15,-(this.props.legHeight-5) + 25,12)}
          rotation={new THREE.Euler(Math.PI, Math.PI/6, 0)}
        >
          <torusGeometry radius={23} tube={6} arc={1 * Math.PI} radialSegments={32} tubularSegments={32} />
          <meshStandardMaterial color={materialColors['anthracite']} />
        </mesh>
      </group>
    )
  }
}

class ThreeDeeTest extends Component {
  constructor(props) {
    super(props)

    this.state = {
      size: [100, 100],
    };
  }

  componentDidMount() {
    this.setState({
      size: [this.threeDeeCanvas.offsetWidth, this.threeDeeCanvas.offsetHeight]
    }, () => console.log(this.state.size));
    const controls = new OrbitControls(this.refs.camera, this.threeDeeCanvas);
    this.controls = controls;
  }

  componentWillUnmount() {
    this.controls.dispose();
    delete this.controls;
  }

  render() {
    const legsSettings = LegsData[this.props.configurationLegsType];

    var aspectratio = this.state.size[0] / this.state.size[1];
    var cameraprops = {
      fov: 75,
      aspect: aspectratio,
      near: 0.1,
      far: 3000,
      position : new THREE.Vector3(800,1200,800),
      lookAt : new THREE.Vector3(0,0,0),
    }

    const deskGroup = [];
    this.props.configurationSetup.map((row, index) => {
      row.map((item, position) => {
        if (item) {
          deskGroup.push(
            <ModuleRender
              positionX = {position}
              positionY = {index}
              rotation = {item.rotation}
              material = {item.material}
              color = {item.color}
              legsSettings = {legsSettings}
              topLeftLeg = {item.legPositions.topLeft}
              topRightLeg = {item.legPositions.topRight}
              bottomRightLeg = {item.legPositions.bottomRight}
              bottomLeftLeg = {item.legPositions.bottomLeft}
              middleLeg = {item.legPositions.middle}
              moduleTopTexture = {ModulesData[item.moduleName].materialData[item.material][item.color].orientation[item.orientation].surfaceTexture}
            />
          )
        }
      });
    })
    const deskWrapperGroup = (
      <group position={new THREE.Vector3((this.props.configurationSetup.size / 2 * -350), 350, (this.props.configurationSetup.get(0).size / 2 * -350))}>
        {deskGroup}
      </group>
    )

    const canvas = (
      <React3
        mainCamera="maincamera"
        width={this.state.size[0]}
        height={this.state.size[1]}
        alpha={true}
        clearAlpha={0}
        clearColor={0xf5f9ff}
        antialias={true}
      >
        <scene>
          <perspectiveCamera ref="camera" name="maincamera" {...cameraprops} />
          <spotLight lookAt={new THREE.Vector3(0, 360, 0)} castShadow={true} position={new THREE.Vector3(-1600, 1800, -1600)} intensity={0.5} />
          <spotLight lookAt={new THREE.Vector3(0, 360, 0)} castShadow={true} position={new THREE.Vector3(1600, 1800, 1600)} intensity={2} />
          <pointLight castShadow={true} onCompositionEnd={new THREE.Vector3(0, 2000, 0)} />
          {deskWrapperGroup}
        </scene>
      </React3>
    )


    return (
      <div ref={canvas => {this.threeDeeCanvas = canvas}} className={styles['canvas3d']}>
        {canvas}
      </div>
    )
  }
}

ThreeDeeTest.defaultProps = {

}

const mapStateToProps = (state, ownProps) => ({
  configurationSetup: state.configuration.configurationSetup,
  configurationLegsType: state.configuration.legsType,
})

export default connect(
  mapStateToProps,
)(ThreeDeeTest)



// WEBPACK FOOTER //
// ./src/components/configurator/ThreeDeeTest.js
