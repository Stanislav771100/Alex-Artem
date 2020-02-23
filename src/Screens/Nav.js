import React, { Component } from 'react';
import './Nav.css';

class Nav extends Component {
  constructor(props) {
    super(props)
    this.state = {
      numberFist : null,
      numberSecond : null,
      ev : null,
      result : null,
      showResult : false
    }
  }
  handleFirstInput = (e) =>{
    const value = e.target.value;
    this.setState({numberFist: value})
  }
  handleEventInput = (e) =>{
    const value = e.target.value;
    this.setState({ev: value})
  }
  handleSecondInput = (e) =>{
    const value = e.target.value;
    this.setState({numberSecond: value})

  }
  showResultHandle = () => {
    const {ev, numberFist, numberSecond} = this.state
    if (ev == '+'){
      this.setState({result: numberFist + numberSecond, showResult : !this.state.showResult})
    } else if (ev == '-'){
    this.setState({result: numberFist - numberSecond, showResult : !this.state.showResult})

  }
  else if (ev == '*'){
    this.setState({result: numberFist * numberSecond, showResult : !this.state.showResult})

  }
  else if (ev == '/'){
    this.setState({result: numberFist / numberSecond, showResult : !this.state.showResult})

  }
}
clearResult = () => {
  const {ev, numberFist, numberSecond, showResult, result} = this.state
  this.setState({ev: null, numberFist: null, numberSecond: null, showResult: false, result: null})
}


  render() {

    return (
      <div className="App">
        <input type='text' placeholder='first' value={this.state.numberFist} onChange={this.handleFirstInput}/>
        <input type='text' placeholder='event' value={this.state.ev} onChange={this.handleEventInput}/>
        <input type='text' placeholder='second' value={this.state.numberSecond} onChange={this.handleSecondInput}/>
        <button onClick={this.showResultHandle}>result</button>
        <button onClick={this.clearResult}>clear</button>
        <p>{this.state.result}</p>
      </div>
    );
  }
}

export default Nav;
