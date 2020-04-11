import React, { Component } from 'react';
import './Monsters.css';
import spider from "../../img/spider.png"
import archer from "../../img/archer.png"
import wasp from "../../img/wasp.png"

class Monsters extends Component {
  constructor(props) {
    super(props)
    this.state = {
     elf:{
      hp: 100,
      goldAfterDeath: 15
     },
     spaider:{
      hp: 200,
      goldAfterDeath: 25
     },
     wasp:{
      hp: 50,
      goldAfterDeath: 10
     },
     
   }
      
  }
  render() {
    return (
    <div className="monsters">
      <div className='monsters-item'>
      <div className='monsters-picture'><img alt="archer" src={archer}/></div> 
      <div className='monsters-text' >
        <h1>Elf</h1>
        <p> hp {this.state.elf.hp} </p>
        <p> goldAfterDeath {this.state.elf.goldAfterDeath}</p>
        </div>
        </div>

        
        <div className='monsters-item'>
          <div>
           <div className='monsters-picture'><img alt="spider" src={spider}/>
           </div> 
          </div>
        <div className='monsters-text' >
        <h1>Spaider</h1>
        <p> hp {this.state.spaider.hp} </p>
        <p> goldAfterDeath {this.state.spaider.goldAfterDeath}</p>
        </div>
        </div>

        <div className='monsters-item'>
       <div className='monsters-picture'><img alt="wasp" src={wasp}/></div> 
        <div className='monsters-text' >
        <h1>Wasp</h1>
        <p>hp {this.state.wasp.hp} </p>
        <p> goldAfterDeath{this.state.wasp.goldAfterDeath}</p>
        </div>
        </div>
      </div>
    );
  }
}

export default Monsters;
