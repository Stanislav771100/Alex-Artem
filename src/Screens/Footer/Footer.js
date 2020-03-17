import React, { Component } from 'react';
import './Footer.css';

class Footer extends Component {
  constructor(props) {
    super(props)
    this.state = {
    }
  }
 

  render() {

    return (
      <div className="Footer">
        <div className="Top-Content">
          <div className="info">
            <h2>Recources</h2>
            <p>Facebook Open Source Community</p>
            <p>Facebook for Developers</p>
            <p>Facebook Developer Group</p>
            <p>Facebook Research</p>
            <p>Facebook Engineering Community</p>
            <p>Facebook Al</p>
            <p>Open Compute Project</p>
            </div>

          <div className="info">
            <h2>GitHub</h2>
            <p>Facebook Open Source</p>
            <p>Facebook Incubator</p>
            <p>Facebook Research</p>
            <p>Facebook Experimental</p>
            <p>Facebook Samples</p>
            <p>PyTorch</p>
            <p>HHVM</p>
            <p>Flow</p>
            <p>GraphQL</p>
            </div>
          </div>
          <div className="bottom-content">
            <div className="Follow-us">
              <h2>Follow us</h2>
            <img src={require('../../img/i.png')}/>
            <img src={require('../../img/f.png')}/>
            </div>
            <div className="bottom-navigation">
              <p>About</p>
              <p>Careers</p>
              <p>Privacy</p>
              <p>Cookies</p>
              <p>Terms</p>
              <p>Help</p>
              <p>Facebook © 2020</p>
            </div>
          </div>
      </div>

    );
  }
}

export default Footer;
