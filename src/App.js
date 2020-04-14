import React from 'react';
import './App.css';
import ColorBox from './components/ColorBox';
import CountDown from './components/CountDown';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <CountDown seconds={30} />

        <ColorBox color="deeppink" />
        <ColorBox color="green" />
      </header>
    </div>
  );
}

export default App;