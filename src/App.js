import React from 'react';
import './App.css';
import Home from './Screens/Home/Home';
import Monsters from './Screens/Monsters/Monstres';
import Towers from './Screens/Towers/Towers';



function App() {

  return (
    <div className="App">
      <Home />
      <Monsters />
      <Towers />
    </div>
  );
}
export default App;
