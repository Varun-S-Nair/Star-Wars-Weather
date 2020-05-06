import React from 'react';
import './App.css';
import Forecast from "./components/forecast/Forecast.js";
import 'bootstrap/dist/css/bootstrap.css'

function App() {

  var text = {
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    padding: '40px',
    fontFamily: 'Arial',
    maxWidth: '100%',
    overflowX: 'hidden',
    textAlign: 'center'
  };

  var prefix = {
    fontSize: '30px',
    position: 'absolute',
    textAlign: 'center',
    left: '30%',
    top: '30%'
  };

  var suffix = {
    fontSize: '30px',
    position: 'absolute',
    textAlign: 'center',
    left: '55%',
    top: '55%'
  };

  var credits = {
    fontSize: '30px',
    textAlign: 'right',
    position: 'absolute',
    bottom: '0',
    right: '0',
    margin: '25px'
  };  

  return (
    <div className="App">
      <div className="text" style={text}>
        <Forecast />
        <div className="prefix" style={prefix}>
          It's like
        </div>
        
        <div className="suffix" style={suffix}>
          out there.
        </div>

        <div className="credits" style={credits}>
          Thanks to Tom Scott for the idea!
        </div>
      </div>
    </div>
  );
}

export default App;
