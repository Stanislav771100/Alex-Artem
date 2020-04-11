import React, { Component } from "react";
import "./Towers.css";
import earth_tower from "../../img/earth_tower.png";
import earth_tower2 from "../../img/earth_tower2.png";
import fly_tower from "../../img/fly_tower.png";
class Towers extends Component {
  constructor(props) {
    super(props);
    this.state = {
      earthTower: {
        dm: 75,
        cost: 75,
      },

      earthTower2: {
        dm: 100,
        cost: 200,
      },

      flyTower: {
        dm: 50,
        cost: 100,
      },
    };
  }
  render() {
    return (
      <div className="statastika">
        <div className="towers">
          <div className="towers-img">
            <img alt="earth_tower" src={earth_tower} />
          </div>
          <div className="towers-text">
            <h2>earthTower</h2>
            <p>damage : {this.state.earthTower.dm}</p>
            <p>cost : {this.state.earthTower.cost}</p>
          </div>
        </div>

        <div className="towers">
          <div className="towers-img">
            <img alt="earth_tower2" src={earth_tower2} />
          </div>
          <div className="towers-text">
            <h2>earthTower2</h2>
            <p>damage : {this.state.earthTower2.dm}</p>
            <p>cost : {this.state.earthTower2.cost}</p>
          </div>
        </div>

        <div className="towers">
          <div className="towers-img">
            <img alt="fly_tower" src={fly_tower} />
          </div>
          <div className="towers-text">
            <h2>flyTower</h2>
            <p>damage : {this.state.flyTower.dm}</p>
            <p>cost : {this.state.flyTower.cost}</p>
          </div>
        </div>
      </div>
    );
  }
}

export default Towers;
