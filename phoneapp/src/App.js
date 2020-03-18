import React from 'react';
import logo from './logo.svg';
import './App.css';

import { ToastContainer, toast } from 'react-toastify';
import '../node_modules/react-toastify/dist/ReactToastify.css';
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
      <ToastContainer autoClose={4000} />
    </div>
  );
}

export default App;
