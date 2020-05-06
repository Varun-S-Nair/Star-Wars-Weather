import React, { useState } from 'react';
import Conditions from '../conditions/Conditions.js';
import 'bootstrap/dist/css/bootstrap.css'

const Forecast = () => {
    let [city, setCity] = useState('');
    let [unit, setUnit] = useState('imperial');
    let [responseObj, setResponseObj] = useState({});
    const uriEncodedCity = encodeURIComponent(city);
    
    var position = {
        padding: '10px',
        fontSize: '20px',
        textAlign: 'right',
        position: 'absolute',
        top: '0',
        right: '0',
        margin: '25px'
      };
    function getForecast(e) {
        e.preventDefault();
        fetch(`https://community-open-weather-map.p.rapidapi.com/weather?units=${unit}&q=${uriEncodedCity}`, {
        "method": "GET",
        "headers": {
            "x-rapidapi-host": "community-open-weather-map.p.rapidapi.com",
            "x-rapidapi-key": "98943d772cmshdb1fc1c51fed15fp1cc8b9jsnfce7aeb703fa"
        }
    })
    .then(response => response.json())
    .then(response => {
        setResponseObj(response)
        console.log(response)
    })
    .catch(err => {
        setResponseObj(err)
        console.log(err)
    });
   }    
   return (
        <div>
            <div style={position}>
            <form onSubmit={getForecast} className="form-group">
                <div className="form-check form-check-inline">
                <input
                    type="text"
                    className="form-control mb-2"
                    placeholder="Enter City"
                    maxLength="50"
                    value={city}
                    onChange={(e) => setCity(e.target.value)}
                    />
                </div>    
                <div className="form-check form-check-inline">
                <label>
                    <input
                        type="radio"
                        className="form-check-input"
                        name="units"
                        checked={unit === "imperial"}
                        value="imperial"
                        onChange={(e) => setUnit(e.target.value)}
                        />
                    Fahrenheit
                </label>
                </div>
                <div className="form-check form-check-inline">
                <label>
                    <input
                        type="radio"
                        className="form-check-input"
                        name="units"
                        checked={unit === "metric"}
                        value="metric"
                        onChange={(e) => setUnit(e.target.value)}
                        />
                    Celsius
                </label>
                </div>
                <button type="submit" className="btn btn-dark">Get Forecast</button>
            </form>
            </div>
            <Conditions
            responseObj={responseObj}
            />
        </div>
   )
}
export default Forecast;