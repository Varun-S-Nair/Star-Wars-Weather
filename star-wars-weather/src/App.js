import React from 'react';
import './App.css';
import Forecast from "./components/forecast/Forecast.js";

function App() {

  var weatherPrefix = {
    fontSize: '30px',
    textAlign: 'left',
    position: 'absolute',
    top: '0',
    left: '0',
    margin: '25px'
  };

  var prefix = {
    fontSize: '30px',
    position: 'absolute',
    textAlign: 'center',
    left: '30%',
    top: '30%'
  };

  var planet = {
    fontSize: '100px',
    position: 'absolute',
    textAlign: 'center',
    letterSpacing: '20px',
    left: '35%',
    top: '35%'
  };

  var suffix = {
    fontSize: '30px',
    position: 'absolute',
    textAlign: 'center',
    left: '55%',
    top: '55%'
  };

  var weatherSuffix = {
    fontSize: '30px',
    textAlign: 'right',
    position: 'absolute',
    bottom: '0',
    right: '0',
    margin: '25px'
  };

  var credits = {
    fontSize: '30px',
    textAlign: 'right',
    position: 'absolute',
    bottom: '0',
    left: '0',
    margin: '25px'
  };  

  return (
    <div className="App">
      <div className="weather-prefix" style={weatherPrefix}>
        -3°C, snow shower?
      </div>
      <Forecast />
      <div className="prefix" style={prefix}>
        it's like
      </div>
      <div className="planet" style={planet}>Hoth

      </div>
      <div className="suffix" style={suffix}>
        out there.
      </div>

      <div className="weather-suffix" style={weatherSuffix}>
        cold, ice, freezing
      </div>

      <div className="weather-suffix" style={credits}>
        thanks to tom scott for the idea
      </div>
    </div>
  );
}

export default App;
