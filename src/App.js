import React from 'react';
import './App.css';
import './components/HeaderComponent';
import './components/NavComponent';
import'./components/ContentComponent';
import './components/FooterComponent';
import HeaderComponent from './components/HeaderComponent';
import NavComponent from './components/NavComponent';
import ContentComponent from './components/ContentComponent';
import FooterComponent from './components/FooterComponent';

function App() {
  return (
    <div className="App">
      <HeaderComponent></HeaderComponent>
      <NavComponent></NavComponent>
      <ContentComponent></ContentComponent>
      <FooterComponent></FooterComponent>
    </div>
  );
}

export default App;
