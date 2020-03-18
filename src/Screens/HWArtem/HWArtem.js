import React, { Component } from 'react';
import './HWArtem.css';

class HWArtem extends Component {
  constructor(props) {
    super(props)
    this.state = {
    }
  }
 

  render() {

    return (
      <div className="HWArtem">
          <div className="HWartem_img">
          <img src={require('../../img/e.png')}/>
          <img src={require('../../img/r.png')}/>
          <img src={require('../../img/m.png')}/>
          <img src={require('../../img/f.png')}/>
          </div>
          <div className="Main">
          <div className="HWartem_text">
            <div className="item">
            <p>Features</p>
            <p>Logo & Branding</p>
            <p>Roadmap</p>
            <p>Education</p>
            </div>
            <div className="item">
            <p>Academic Partners</p>
            <p>More Resources</p>
            <p>Awards</p>
            <p>Custom License Terms</p>
            </div>
            <div className="item">
            <p>Online Services</p>
            <p>Training Partners</p>
            <p>Community Rules</p>
            </div>
            </div>
            <div className="button">
            <input value="Sing up for unreal engine news" type="button" />
            </div>
          </div>
      </div>
    );
  }
}

export default HWArtem;
