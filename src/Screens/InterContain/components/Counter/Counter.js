import React, { Component } from 'react';
import './Counter.css';



class Counter extends Component {
  constructor(props) {
    super(props)
    this.state = {
     WaveCounter : 0,
     EnemyStart : 0,
     EnemyEnd : 50
    }
  }
  render() {
const { WaveCounter, EnemyStart, EnemyEnd } = this.state
    return (
    <div className="main">

      <div className="Wave">
      <p>{WaveCounter}</p>
      </div>

      <div className="Enemy">
      <p>{EnemyStart}/{EnemyEnd}</p>
      </div>

    </div>
    );
  }
}

export default Counter;
