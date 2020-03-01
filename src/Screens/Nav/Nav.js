import React, { Component } from 'react';
import './Nav.css';

class Nav extends Component {
  constructor(props) {
    super(props)
    this.state = {
    }
  }
 

  render() {

    return (
      <div className="navigation">
        <p>home</p>
        <p>gallery</p>
        <p>about as</p>
      </div>
    );
  }
}

export default Nav;
