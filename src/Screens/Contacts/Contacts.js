import React, { Component } from "react";
import "./Contacts.css";

class Contacts extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="Contacts">
        <div className="Text1">
          <h1>Корисна інформація </h1>
          <p>Cтарт продаж</p>
          <p> 0 Застройщик</p>
          <p>0 Комплекс</p>
          <p>Обслуговующа компанія "Resa"</p>
          <p>Звязатися з нами </p>
          <div className="picture">
            <img src={require("../../img/instagram.png")} />
            <img src={require("../../img/8.png")} />
            <img src={require("../../img/9.png")} />
          </div>
        </div>
        <div className="Text1">
          <h3>ОТДЕЛ ПРОДАЖ:</h3>
          
           
            <div className="icon-item">
             
              <p>г. Вишневое, ул. Ломоносова, 40 </p>
              <img src={require("../../img/placeholder.png")} />
           
          </div>

          <div className="icon-item">
            <p>Телефон:+38 (067) 829 45 89</p>
            <img src={require("../../img/Phone.png")} />
          </div>
          <div className="icon-item">
            <p>Графік роботи Пн-Сб 09:00 — 19:00 Вс 10:00 — 19:00</p>
            <img src={require("../../img/Clock.png")} />
          </div>
          
        </div>
        <div className="Text1">
          <h2>Будьте в курсі останіх події</h2>
          <input placeholder="Ваше імя" type="text"></input>
          <input placeholder="Ваш телефон" type="text"></input>
          <input placeholder="Ваша адреса" type="text"></input>
          <div className="but-input">
          <input value="Підписатися" className="but-input" type="button"></input>
          </div>
          
        </div>
       
      </div>
    );
  }
}

export default Contacts;
