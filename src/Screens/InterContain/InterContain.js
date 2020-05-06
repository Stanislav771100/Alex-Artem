import React, { Component } from 'react';
import './InterContain.css';
import Counter from './components/Counter/Counter'
import Heart from './components/Heart/Heart'


class InterContain extends Component {
  constructor(props) {
    super(props)
    this.state = {
     
    }
  }
  render() {
    const { monster, tower } = this.state

    return (
    <div className="mainCont">
        <Counter />
        <Heart />
    </div>
    );
  }
}

export default InterContain;
