import React from 'react';
import {Helmet} from 'react-helmet';
const conditions = (props) => {
    var text = {
        backgroundRepeat: "no-repeat",
        fontFamily: "DeeDee",
        backgroundSize: "cover",
        padding: '40px',
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

      var weatherSuffix = {
       fontSize: '30px',
       textAlign: 'right',
       position: 'absolute',
       bottom: '0',
       right: '0',
       margin: '25px'
     };  

   return (
       <div>
           {props.responseObj.cod === 200 && props.responseObj.main.temp > 80?
            <div className="text" style={text}>
            <Helmet bodyAttributes={{style: "background-image: url('https://wallpapercave.com/wp/094s4Iu.jpg'); background-repeat: no-repeat; background-size: cover; color: black;"}} />
            <div className="weather-prefix" style={weatherPrefix}>
                   <p>Whew. {Math.round(props.responseObj.main.temp)}°F, {props.responseObj.weather[0].description}?</p>
            </div>
            <div className="planet" style={planet}>
                   <p>TATOOINE</p>
            </div>
            <div className="weatherSuffix" style={weatherSuffix}>
                   <p>Hot, dry, occasional sarlacc.</p>
            </div>  
            </div>
            :
            props.responseObj.cod === 200 && props.responseObj.weather[0].description.indexOf("rain") !== -1 && props.responseObj.main.temp > 70?
            <div className="text" style={text}>
            <Helmet bodyAttributes={{style: "background-image: url('https://cdn.hipwallpaper.com/i/26/80/LPbBIq.jpg'); background-repeat: no-repeat; background-size: cover; color: white;"}} />
            <div className="weather-prefix" style={weatherPrefix}>
                   <p>Ugh. {Math.round(props.responseObj.main.temp)}°F, {props.responseObj.weather[0].description}?</p>
            </div>
            <div className="planet" style={planet}>
                   <p>DAGOBAH</p>
            </div>
            <div className="weatherSuffix" style={weatherSuffix}>
                   <p>Hot and wet.</p>
            </div>  
            </div>
            :
            props.responseObj.cod === 200 && props.responseObj.weather[0].description.indexOf("rain") !== -1?
            <div className="text" style={text}>
            <Helmet bodyAttributes={{style: "background-image: url('https://i.pinimg.com/originals/4c/1d/78/4c1d78228b1f5875d423b6fd3f3bd33d.jpg'); background-repeat: no-repeat; background-size: cover; color: white;"}} />
            <div className="weather-prefix" style={weatherPrefix}>
                   <p>Wow. {Math.round(props.responseObj.main.temp)}°F, {props.responseObj.weather[0].description}?</p>
            </div>
            <div className="planet" style={planet}>
                   <p>KAMINO</p>
            </div>
            <div className="weatherSuffix" style={weatherSuffix}>
                   <p>Wet.</p>
            </div>  
            </div>
            :
           props.responseObj.cod === 200 && props.responseObj.weather[0].description.indexOf("cloud") !== -1 && props.responseObj.main.temp > 80?
            <div className="text" style={text}>
            <Helmet bodyAttributes={{style: "background-image: url('https://giantbomb1.cbsistatic.com/uploads/original/4/41342/1087587-yavin_iv.jpg'); background-repeat: no-repeat; background-size: cover; color: black;"}} />
            <div className="weather-prefix" style={weatherPrefix}>
                   <p>Ahh. {Math.round(props.responseObj.main.temp)}°F, {props.responseObj.weather[0].description}?</p>
            </div>
            <div className="planet" style={planet}>
                   <p>YAVIN 4</p>
            </div>
            <div className="weatherSuffix" style={weatherSuffix}>
                   <p>Hot, but some clouds in the sky.</p>
            </div> 
            </div>
            :
           props.responseObj.cod === 200 && props.responseObj.main.temp < 32?
            <div className="text" style={text}>
            <Helmet bodyAttributes={{style: "background-image: url('https://cutewallpaper.org/21/star-wars-hoth-wallpaper/Star-Wars-Battlefront-2015-HD-Wallpaper-Background-Image-.jpg'); background-repeat: no-repeat; background-size: cover; color: black;"}} />
            <div className="weather-prefix" style={weatherPrefix}>
                   <p>Brrr. {Math.round(props.responseObj.main.temp)}°F, {props.responseObj.weather[0].description}?</p>
            </div>
            <div className="planet" style={planet}>
                   <p>HOTH</p>
            </div>
            <div className="weatherSuffix" style={weatherSuffix}>
                   <p>Cold, ice, freezing desolation.</p>
            </div> 
            </div>
            :
            props.responseObj.cod === 200 && props.responseObj.weather[0].description.indexOf("cloudy") !== -1?
             <div className="text" style={text}>
             <Helmet bodyAttributes={{style: "background-image: url('https://c4.wallpaperflare.com/wallpaper/43/342/356/star-wars-battlefront-star-wars-stormtrooper-endor-wallpaper-preview.jpg'); background-repeat: no-repeat; background-size: cover; color: white;"}} />
             <div className="weather-prefix" style={weatherPrefix}>
                    <p>Hmm. {Math.round(props.responseObj.main.temp)}°F, {props.responseObj.weather[0].description}?</p>
             </div>
             <div className="planet" style={planet}>
                    <p>ENDOR</p>
             </div>
             <div className="weatherSuffix" style={weatherSuffix}>
                    <p>Temperate, grey, and cloudy.</p>
             </div> 
             </div>
             :
            props.responseObj.cod === 200 ?
           <div className="text" style={text}>
            <Helmet bodyAttributes={{style: "background-image: url('https://wallpapercave.com/wp/wp3724188.jpg'); background-repeat: no-repeat; background-size: cover; color: white;"}} />
            <div className="weather-prefix" style={weatherPrefix}>
                   <p>Oh. {Math.round(props.responseObj.main.temp)}°F, {props.responseObj.weather[0].description}?</p>
            </div>
            <div className="planet" style={planet}>
                   <p>NABOO</p>
            </div>
            <div className="weatherSuffix" style={weatherSuffix}>
                   <p>Temperate, dry, and pleasant.</p>
            </div> 
            </div>
           :
           <div className="text" style={text}>
            <Helmet bodyAttributes={{style: "background-image: url('https://wallpapertag.com/wallpaper/full/7/f/e/409705-stars-in-space-background-1920x1080-for-android-40.jpg'); background-repeat: no-repeat; background-size: cover; color: white;"}} />
           <div className="weather-prefix" style={weatherPrefix}>
                   <p>Huh? Try again later, or try another city.</p>
            </div>
            <div className="planet" style={planet}>
                   <p>ALDERAAN</p>
            </div>
            <div className="weatherSuffix" style={weatherSuffix}>
                   <p>Try again later, or try another city.</p>
            </div>  
            </div>
           }    
       </div>
   )
}
export default conditions;