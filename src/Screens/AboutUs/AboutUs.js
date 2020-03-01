import React, { Component } from 'react';
import './AboutUs.css';

class AboutUs extends Component {
  constructor(props) {
    super(props)
    this.state = {
    }
  }
 

  render() {

    return (
      <div className="AboutUs">
          <div className="info-container">
            <div className="info-text"> 
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita autem voluptates, facilis itaque eos atque quibusdam qui repellendus repellat magni quis, amet natus adipisci nemo architecto harum reiciendis possimus totam?Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita autem voluptates, facilis itaque eos atque quibusdam qui repellendus repellat magni quis, amet natus adipisci nemo architecto harum reiciendis possimus totam?Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita autem voluptates, facilis itaque eos atque quibusdam qui repellendus repellat magni quis, amet natus adipisci nemo architecto harum reiciendis possimus totam?Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita autem voluptates, facilis itaque eos atque quibusdam qui repellendus repellat magni quis, amet natus adipisci nemo architecto harum reiciendis possimus totam?Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita autem voluptates, facilis itaque eos atque quibusdam qui repellendus repellat magni quis, amet natus adipisci nemo architecto harum reiciendis possimus totam?Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita autem voluptates, facilis itaque eos atque quibusdam qui repellendus repellat magni quis, amet natus adipisci nemo architecto harum reiciendis possimus totam?Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita autem voluptates, facilis itaque eos atque quibusdam qui repellendus repellat magni quis, amet natus adipisci nemo architecto harum reiciendis possimus totam?Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita autem voluptates, facilis itaque eos atque quibusdam qui repellendus repellat magni quis, amet natus adipisci nemo architecto harum reiciendis possimus totam?Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita autem voluptates, facilis itaque eos atque quibusdam qui repellendus repellat magni quis, amet natus adipisci nemo architecto harum reiciendis possimus totam?Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita autem voluptates, facilis itaque eos atque quibusdam qui repellendus repellat magni quis, amet natus adipisci nemo architecto harum reiciendis possimus totam?Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita autem voluptates, facilis itaque eos atque quibusdam qui repellendus repellat magni quis, amet natus adipisci nemo architecto harum reiciendis possimus totam?Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita autem voluptates, facilis itaque eos atque quibusdam qui repellendus repellat magni quis, amet natus adipisci nemo architecto harum reiciendis possimus totam?</p>
            </div>
            <div className="info-image">
            <img src={require('../../img/1.png')}/>
            </div>
          </div>
          <div className="button">
            <input type="text" className="input-content"></input>
            <input type="text" className="input-content"></input>
            <input type="text" className="input-content"></input>
            <input type="text" className="input-content"></input>
            <input type="button" value="sumbit" className="sumbit">
            </input>
          </div>
      </div>
    );
  }
}

export default AboutUs;
