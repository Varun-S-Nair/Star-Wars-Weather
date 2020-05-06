import React from 'react';
import {Helmet} from 'react-helmet';
const conditions = (props) => {
    var text = {
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        color: 'black',
        padding: '40px',
        fontFamily: 'Arial',
        maxWidth: '100%',
        overflowX: 'hidden',
        textAlign: 'center'
      };

      var weatherPrefix = {
        fontSize: '30px',
        textAlign: 'left',
        position: 'absolute',
        top: '0',
        left: '0',
        margin: '25px'
      };
    
      var planet = {
        fontSize: '100px',
        position: 'absolute',
        textAlign: 'center',
        letterSpacing: '20px',
        left: '35%',
        top: '35%'
      };

   return (
       <div>
           {props.responseObj.cod === 200 ?
            <div className="text" style={text}>
            <Helmet bodyAttributes={{style: "background-image: url('https://cutewallpaper.org/21/star-wars-hoth-wallpaper/Star-Wars-Battlefront-2015-HD-Wallpaper-Background-Image-.jpg'); background-repeat: no-repeat; background-size: cover;"}} />
            <div className="weather-prefix" style={weatherPrefix}>
                   <p>{Math.round(props.responseObj.main.temp)} degrees, {props.responseObj.weather[0].description}?</p>
            </div>
            <div className="planet" style={planet}>
                   <p>Hoth</p>
            </div>
            </div>
           : 
           <div className="text" style={text}>
           <div className="weather-prefix" style={weatherPrefix}>
                   <p>Huh? Try again, or try another city.</p>
            </div>
            <div className="planet" style={planet}>
                   <p>Alderaan</p>
            </div>
            </div>
           }    
       </div>
   )
}
export default conditions;