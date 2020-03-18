import React, { Component } from 'react';
import './Home.css';
import Cube from 'react-3d-cube';

class Home extends Component {
  constructor(props) {
    super(props)
    this.state = {
    }
  }
 
  
  render() {
    const arr = ['yellow', 'red', 'blue', 'green', 'aqua', 'grey']
    const arrSide = ['front', 'right', 'back', 'left', 'top', 'bottom']
    return (
      <div className="container">
      <div
        style={{
          width: 400,
          height: 400
        }}
      >
        <Cube size={400} >
        {arr.map((side, i) => {
        return <div className='side' key={i} style={{backgroundColor: side}}>{arrSide[i]}</div>
        })}
        </Cube>
      </div>
    </div>
    );
  }
}

export default Home;
