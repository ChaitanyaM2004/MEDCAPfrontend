import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Homepage from './pages/Homepage'
import Footer from './components/Footer'

const App = () => {
  return (
    <>

     <Homepage /> 
    <Footer/>
    </>

  );
};

export default App;
