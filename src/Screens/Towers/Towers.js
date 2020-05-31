import React, { Component } from "react";
import "./Towers.css";
class Towers extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }
  render() {
    const { towers } = this.props

    return (
      <div className="statastika">
        {towers.map(item => {

          return (

        <div key={item} className="towers">

            <div className="towers-img">
              <p>{item.img}</p>
            </div>
            
            <div className="towers-text">
              <h2>{item.name}</h2>
              <p>damage : {item.dm}</p>
              <p>cost : {item.cost}</p>
            </div>

        </div>
          )
        })}
      </div>
    );
  }
}

export default Towers;
