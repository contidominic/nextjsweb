import React, { Component, useEffect } from "react";

import "../node_modules/react-dat-gui/build/react-dat-gui.css";
 
import FluidAnimation from "./react-fluid-animation";
import random from "random";

const defaultConfig = {
  textureDownsample: 1,
  densityDissipation: 0.98,
  velocityDissipation: 0.99,
  pressureDissipation: 0.8,
  pressureIterations: 25,
  curl: 30,
  splatRadius: 0.005
};

export default class Splash extends Component {
  state = {
    config: {
      ...defaultConfig
    }
  };

  useEffect () {
    this._reset();
  }

  render() {
    const { config } = this.state;

    return (

      <div className="turn" id ="turn"
        style={{
          height: "80vh",
          zindex: "-1"
        }}
      ><div> Hey </div>
        <FluidAnimation config={config} animationRef={this._animationRef} />

        <div className="turnoff1"
          style={{
            position: "relative",
            zindex: "-1",
           
            padding: "1em",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            color: "#fff",
            fontFamily: 'Quicksand, "Helvetica Neue", sans-serif',
            pointerEvents: "none"
          }}
        >

          <div classname="midd" style={{position: "absolute",
         top: "-350px",
         left: "20%",
         right: 0,
         bottom: 0,}}>
          <h1
            style={{
              fontSize: "3em",
              textShadow: "2px 2px 8px rgba(0, 0, 0, 0.6)"
            }}
          >
           r4 4r3ewr r443
          </h1>
          </div>
        </div>

        
      </div>
    );
  }

  _animationRef = ref => {
    this._animation = ref;
    this._reset();
  };

  _onUpdate = config => {
    this.setState({ config });
  };

  _onClickRandomSplats = () => {
    this._animation.addSplats((5 + Math.random() * 20) | 0);
  };

  _onReset = () => {
    this.setState({ config: { ...defaultConfig } });
  };

  _reset() {
    if (this._animation) {
      this._animation.addRandomSplats(random.int(100, 180));
    }
  }
}
