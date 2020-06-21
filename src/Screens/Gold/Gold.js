import React, { Component } from 'react';
import './Gold.css';
import { GrMoney } from 'react-icons/gr';


class Gold extends Component {
  constructor(props) {
    super(props)
    this.state = {
      gold: 80,
      goldInput: 0    }
  }
  plusGold(variables) {
    const { gold } = this.state
    if (variables === 'mnoj') {
      this.setState({gold: gold * 5})
    } else

    this.setState({gold: gold+5})
  }
  setGold(variable){
    const { goldInput, gold } = this.state
    let plusGold = parseInt(goldInput)
    if (variable === 'Plus') {
      this.setState({gold: gold + plusGold})
    } else if ( variable === 'Minus') { 
      this.setState({gold: gold - plusGold})
    }
  }
  render() {
    const { gold } = this.state
    return (
    <div className="gold-container">
      <GrMoney onClick={() => this.plusGold('mnoj')} style={{height: 50, width: 50}} />
      <p onMouseEnter={() => this.plusGold()}>{gold}</p>
      <input onChange={e => this.setState({goldInput: e.target.value})} placeholder="number" type="text"/>
      <div onClick={() => this.setGold('Plus')} className="plusButton">
        PLUS
      </div>
      <div onClick={() => this.setGold('Minus')} className="plusButton">
        Minus
      </div>
    </div>
    );
  }
}

export default Gold;
