import React from 'react';
import './App.css';
import Nav from './Screens/Nav';
import Gallery from './Screens/Gallery';
import Hr from './Screens/components/HrLine';
import AboutUs from './Screens/AboutUs';
import Home from './Screens/Home';


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
    </div>
  );
}
export default App;
