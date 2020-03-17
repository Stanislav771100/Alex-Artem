import React from 'react';
import './App.css';
import Nav from './Screens/Nav/Nav';
import Gallery from './Screens/Gallery/Gallery';
import Hr from './Screens/components/HrLine';
import AboutUs from './Screens/AboutUs/AboutUs';
import Home from './Screens/Home/Home';
import Contacts from './Screens/Contacts/Contacts';
import Footer from './Screens/Footer/Footer';


function App() {

  return (
    <div className="App">
      <Nav />
      <Home />
      <Hr />
      <Gallery />
      <Hr />
      <AboutUs />
      <Hr />
      <Contacts />
      <Hr />
      <Footer />
    </div>
  );
}
export default App;
