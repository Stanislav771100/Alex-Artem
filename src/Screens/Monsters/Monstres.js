import React, { Component } from 'react';
import './Monsters.css';
import spider from "../../img/spider.png"
import archer from "../../img/archer.png"
import waspImg from "../../img/wasp.png"

class Monsters extends Component {
  constructor(props) {
    super(props)
    this.state = {

   }
      
  }
  render() {
    const {elf, spaider, wasp} = this.props.monsters
    return (
    <div className="monsters">
      <div className='monsters-item'>
      <div className='monsters-picture'>
        <img alt="archer" src={archer}/></div> 
      <div className='monsters-text' >
        <h2>Elf</h2>
        <p> hp {elf.hp} </p>
        <p> goldAfterDeath {elf.goldAfterDeath}</p>
        </div>
        </div>

        
        <div className='monsters-item'>
          <div>
           <div className='monsters-picture'>
             <img alt="spider" src={spider}/>
           </div> 
          </div>
        <div className='monsters-text' >
        <h2>Spaider</h2>
        <p> hp {spaider.hp} </p>
        <p> goldAfterDeath {spaider.goldAfterDeath}</p>
        </div>
        </div>

        <div className='monsters-item'>
       <div className='monsters-picture'>
         <img alt="wasp" src={waspImg}/></div> 
        <div className='monsters-text' >
        <h2>Wasp</h2>
        <p>hp {wasp.hp} </p>
        <p> goldAfterDeath{wasp.goldAfterDeath}</p>
        </div>
        </div>
      </div>
    );
  }
}

export default Monsters;
