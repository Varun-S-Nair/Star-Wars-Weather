import React, { useState } from 'react';
import Conditions from '../conditions/Conditions.js';

const Forecast = () => {
    let [city, setCity] = useState('');
    let [unit, setUnit] = useState('imperial');
    let [responseObj, setResponseObj] = useState({});
    const uriEncodedCity = encodeURIComponent(city);
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
    })
    .catch(err => {
        console.log(err);
    });
   }
   return (
        <div>
            <div>
            <h2>Find Current Weather Conditions</h2>
            <form onSubmit={getForecast}>
                <input
                    type="text"
                    placeholder="Enter City"
                    maxLength="50"
                    value={city}
                    onChange={(e) => setCity(e.target.value)}
                    />
                <label>
                    <input
                        type="radio"
                        name="units"
                        checked={unit === "imperial"}
                        value="imperial"
                        onChange={(e) => setUnit(e.target.value)}
                        />
                    Fahrenheit
                </label>
                <label>
                    <input
                        type="radio"
                        name="units"
                        checked={unit === "metric"}
                        value="metric"
                        onChange={(e) => setUnit(e.target.value)}
                        />
                    Celsius
                </label>
                <button type="submit">Get Forecast</button>
            </form>
            <Conditions
               responseObj={responseObj}
               />
            </div>
        </div>
   )
}
export default Forecast;