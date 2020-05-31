import React, { Component } from "react";
import "./Heart.css";
import heart from "../../../../img/heart.png";

class Heart extends Component {
  constructor(props) {
    super(props);
    this.state = {
      rotateCounter: 0,
      heartStart: 0,
      heartAnd: 20,
      heartSize: 100
    };
  }
  counterHeart(variables) {
    const { heartStart, rotateCounter, heartSize } = this.state;
    if (variables == "plus" && heartStart < 20) {
      this.setState({
        heartStart: heartStart + 1,
        rotateCounter: rotateCounter + 10,
        heartSize: heartSize - 5
      });
    } else if (variables == "minus" && heartStart > 0) {
      this.setState({
        heartStart: heartStart - 1,
        rotateCounter: rotateCounter - 10,
        heartSize: heartSize + 5
      });
    }
  }

  render() {
    const { heartStart, heartAnd, rotateCounter, heartSize } = this.state;
    return (
      <div className="mainHeart">
        <img
          alt="heart"
          style={{
            transform: `rotate(${rotateCounter}deg)`,
            width: heartSize,
            height: heartSize
          }}
          src={heart}
          onClick={() => this.counterHeart("plus")}
        />
        <p
          onClick={() => this.counterHeart("minus")}
          className={heartStart == 20 ? "active" : ""}
        >
          {heartStart} / {heartAnd}
        </p>
      </div>
    );
  }
}

export default Heart;
