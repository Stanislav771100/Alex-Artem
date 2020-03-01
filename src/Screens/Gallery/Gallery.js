import React, { Component } from 'react';
import './Gallery.css';

class Gallery extends Component {
  constructor(props) {
    super(props)
    this.state = {
    }
  }
 

  render() {

    return (
      <div className="gallery">

<img src={require('../../img/1.jpg')}/>
<img src={require('../../img/2.jpg')}/>
<img src={require('../../img/3.jpg')}/>
<img src={require('../../img/4.jpg')}/>
<img src={require('../../img/5.jpg')}/>
<img src={require('../../img/6.jpg')}/>
<img src={require('../../img/7.jpg')}/>
<img src={require('../../img/8.jpg')}/>
      </div>
    );
  }
}

export default Gallery;
