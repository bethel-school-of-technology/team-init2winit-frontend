import logo from './logo.svg';
import './App.css';
import React, { Component } from 'react';



function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
          
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
       //  <Cofee uri="http://localhost:3001/JavaShare" />
       // intended link for Cofee static app server
       >
               
        
          Learn React
          
     
        </a>
      </header>
    </div>
  );
}

export default App;
