import React, { Component } from 'react';
import './Home.css';
import Monsters from '../Monsters/Monstres'
import Towers from '../Towers/Towers'
import InterContain from '../InterContain/InterContain'

class Home extends Component {
  constructor(props) {
    super(props)
    this.state = {
      monster: [
        {
        hp : 100,
        goldAfterDeath : 15,
        name : 'elf',
        img: '🏹'
       },
       {
        hp : 200,
        goldAfterDeath : 25,
        name : 'spider',
        img: '🕷️'
       },
      {
        hp : 50,
        goldAfterDeath : 10,
        name : 'wasp',
        img: '🐝'
       },
      ],
      tower: [
        {
          dm: 75,
          cost: 75,
          name: 'Cannon',
          img: '🗼'
        },
  
        {
          dm : 100,
          cost : 200,
          name : 'Earth Tower',
          img: '💣'
        },
  
        {
          dm : 50,
          cost : 100,
          name : 'Sky Tower',
          img: '🚀'
        },
      ]
    }
  }
  render() {
    const { monster, tower } = this.state

    return (
    <div className="container">
      <Towers towers={tower} />
      <Monsters monsters={monster}/>
      <InterContain />
    </div>
    );
  }
}

export default Home;
