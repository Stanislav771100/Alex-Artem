import React, { Component } from "react";
import "./Monsters.css";

class Monsters extends Component {
  constructor(props) {
    super(props);
    this.state = {
      show: false
    };
  }
  handleColor() {
    this.setState({show: !this.state.show})
  }
  render() {
    const { monsters } = this.props;
    return (
      <div className="monsters">
        {monsters.map(item => {
          return (
            <div key={item} onClick={() => this.handleColor()} className={this.state.show ? "monsters-item-active" : 'monsters-item'}>
              <div className="monsters-picture">
                <p>{item.img}</p>
              </div>
              <div className="monsters-text">
                <h2>{item.name}</h2>
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
