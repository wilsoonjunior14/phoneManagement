import React from 'react';
import logo from './logo.svg';
import './App.css';

import FooterApp from "./components/FooterApp";
import HeaderApp from './components/HeaderApp';

function App() {

  const style = {
    navbar:{
      backgroundColor: "blue"
    }
  };

  return (
    <div>
      <HeaderApp></HeaderApp>
      <FooterApp></FooterApp>
    </div>
  );
}

export default App;
