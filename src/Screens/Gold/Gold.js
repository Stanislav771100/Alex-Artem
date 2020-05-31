import React, { Component } from 'react';
import './Gold.css';
import { GrMoney } from 'react-icons/gr';


class Gold extends Component {
  constructor(props) {
    super(props)
    this.state = {
      gold: 80
    }
  }
  render() {
    const { gold } = this.state
    return (
    <div className="gold-container">
      <GrMoney style={{height: 50, width: 50}} />
      <p>{gold}</p>
    </div>
    );
  }
}

export default Gold;
