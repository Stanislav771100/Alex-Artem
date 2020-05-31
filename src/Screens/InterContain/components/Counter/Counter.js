import React, { Component } from "react";
import "./Counter.css";

class Counter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      WaveCounter: 0,
      EnemyStart: 0,
      EnemyEnd: 50
    };
  }
  setCount() {
    const { EnemyStart, WaveCounter } = this.state;
    if (EnemyStart !== 50) {
      this.setState({ EnemyStart: EnemyStart + 5 });
    } else {
      this.setState({ WaveCounter: WaveCounter + 1 });
    }
    
  }
  render() {
    const { WaveCounter, EnemyStart, EnemyEnd } = this.state;
    return (
      <div className="main">
        <div
          onClick={() => this.setCount()}
          className="Wave"
          style={WaveCounter % 5 ? { color: "green" } : { color: "red" }}
        >
          <p>{WaveCounter}</p>
        </div>

        <div className="Enemy">
          <p>
            {EnemyStart}/{EnemyEnd}
          </p>
        </div>
      </div>
    );
  }
}

export default Counter;
