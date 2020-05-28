import React from 'react';
import logo from './logo.svg';
import IdCard from './IdCard/IdCard'
import './App.css';

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
        >
          Learn React
        </a>
      </header>
      <IdCard lastName='Doe' firstName='John' />
  

      {/* <Greetings lang="de" name="Ludwig"></Greetings>
      <Greetings lang="fr" name="François"></Greetings> */}
    </div>
  );
}

export default App;
