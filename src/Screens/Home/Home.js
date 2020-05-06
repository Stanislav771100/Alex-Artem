import React, { Component } from 'react';
import './Home.css';
import Monsters from '../Monsters/Monstres'
import Towers from '../Towers/Towers'
// import earthImg from "../../img/earth_tower.png";
// import earth2Img from "../../img/earth_tower2.png";
// import flyTowerImg from "../../img/flyTower.png";

class Home extends Component {
  constructor(props) {
    super(props)
    this.state = {
      monster: [
        {
        hp : 100,
        goldAfterDeath : 15,
        name : 'elf'
       },
       {
        hp : 200,
        goldAfterDeath : 25,
        name : 'spider',
       },
      {
        hp : 50,
        goldAfterDeath : 10,
        name : 'wasp'
       },
      ],
      tower: [
        {
          dm: 75,
          cost: 75,
          name: 'earthTower',
          img: `{require('../../img/earth_tower.png')}`
        },
  
        {
          dm : 100,
          cost : 200,
          name : 'earthTower2',
          img: `{require('../../img/earth_tower2.png')}`
        },
  
        {
          dm : 50,
          cost : 100,
          name : 'flyTower',
          img: `{require('../../img/flyTower.png')}`
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
    </div>
    );
  }
}

export default Home;
