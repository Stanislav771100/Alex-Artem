import React, { Component } from "react";
import "./HWlosha.css";

class HWlosha extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="HWlosha">
        <div className="Photo">
          <img src={require("../../img/Subnautica.jpg")}></img>
        </div>
        <di className="second-block"><div className="Text">
          <h1>The help you need to succeed </h1>
          <p>
            From your first steps with Unreal Engine to completing your most
            challenging real-time project, we’re here to help. With
            comprehensive reference documentation, instructional guides,
            community-based support, and options for dedicated professional
            support, we have what you need to succeed.{" "}
          </p>
        </div>
        <div className="but-input">
          <input
            value="Support & Resources"
            className="but-input"
            type="button"
          ></input>
        </div></di>
        
      </div>
    );
  }
}

export default HWlosha;
