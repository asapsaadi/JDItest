//import logo from './logo.svg';
import React from 'react';
import './App.css';
import ModelSlider from './components/carousel/modelSlider';
import ModelOne from './components/models3d/modelOne';

function App() {
  return (
    <div className="App">
      {/* <ModelSlider/> */}
      <ModelOne/>
      {/* <header className="App-header">
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
      </header> */}
    </div>
  );
}

export default App;
