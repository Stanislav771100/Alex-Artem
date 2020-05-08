import React, { Component } from 'react';
import './Heart.css';
import heart from "../../../../img/heart.png";



class Heart extends Component {
  constructor(props) {
    super(props)
    this.state = {

      heartStart: 0,
      heartAnd: 20
    }
  }
  render() {
    const { heartStart, heartAnd } = this.state;
    return (
      <div className="mainHeart">
        
          <img alt="heart" src={heart} />
          <p>{heartStart} / {heartAnd}</p>
        
        
      </div>
    );
  }
}

export default Heart;
