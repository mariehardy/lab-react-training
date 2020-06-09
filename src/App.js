import React from 'react';
import logo from './logo.svg';
import IdCard from './Components/IdCard';
import Greetings from './Components/Greetings';
import Random from './Components/Random'
import BoxColor from './Components/BoxColor'

import './App.css';

function App() {
  return (
    <div className="App">
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header> */}
      <IdCard
        lastName="Doe"
        firstName="John"
        gender="male"
        height={178}
        birth={new Date('1992-07-14')}
        picture="https://randomuser.me/api/portraits/men/44.jpg" 
      />

      <Greetings lang="de">Ludwig</Greetings>
      <Greetings lang="fr">François</Greetings>
      <Greetings lang="ch">Vu</Greetings>

      <Random min={1} max={6}/>
      <Random min={10} max={100}/>

      <BoxColor r={255} g={0} b={0} />
      <BoxColor r={128} g={255} b={0} />

    </div>
  );
}

export default App;
