//import logo from './logo.svg';
import React from 'react';
import './App.css';
import ModelSlider from './components/carousel/modelSlider';
import ModelOne from './components/models3d/modelOne';
import ModelTwo from './components/models3d/modelTwo';

function App() {
  return (
    <div className="App">
      {/* <ModelSlider/> */}
      
      <header className="App-header">
      {/* <ModelOne/> */}
      <ModelTwo/>
      </header>
    </div>
  );
}

export default App;
