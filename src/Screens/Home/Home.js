import React, { Component } from 'react';
import './Home.css';
import Monsters from '../Monsters/Monstres'
import Towers from '../Towers/Towers'

class Home extends Component {
  constructor(props) {
    super(props)
    this.state = {
      
    }
  }
  render() {
    return (
    <div className="container">
      <Towers />
      <Monsters />
    </div>
    );
  }
}

export default Home;
