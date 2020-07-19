import React, { Component } from "react";
import "./Towers.css";
class Towers extends Component {
  constructor(props) {
    super(props);
    this.state = {
      first: 0,
      second: 0,
      third: 0,
      fours: 0
    };
  }
  componentDidMount(){
    let i = 16
      if (i % 4 == 0) {
        this.setState({ first : this.state.first+1})
      }
      if (i % 4 == 1) {
        this.setState({ second : this.state.second+1})
      }
      if (i % 4 == 2) {
        this.setState({ third : this.state.third+1})
      }
      if (i % 4 == 3) {
        this.setState({ fours : this.state.fours+1})
      }
    
  }

  render() {
    const { towers } = this.props
    console.log(this.state)

    return (
      <div className="statastika">
        {towers.map(item => {

          return (

        <div key={item} className="towers">

            <div className="towers-img">
              <p>{item.img}</p>
            </div>
            
            <div className="towers-text">
              <h2>{item.name}</h2>
              <p>damage : {item.dm}</p>
              <p>cost : {item.cost}</p>
            </div>

        </div>
          )
        })}
      </div>
    );
  }
}

export default Towers;
