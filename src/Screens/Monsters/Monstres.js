import React, { Component } from "react";
import "./Monsters.css";
import spider from "../../img/spider.png";
import archer from "../../img/archer.png";
import waspImg from "../../img/wasp.png";

class Monsters extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    const { monsters } = this.props;
    return (
      <div className="monsters">
        {monsters.map(item => {
          return (
            <div key={item} className="monsters-item">
              <div className="monsters-picture">
                <img alt="archer" src={archer} />
              </div>
              <div className="monsters-text">
                <h2>Elf</h2>
                <p> hp {item.hp} </p>
                <p> goldAfterDeath {item.goldAfterDeath}</p>
              </div>
            </div>
          );
        })}
      </div>
    );
  }
}

export default Monsters;
