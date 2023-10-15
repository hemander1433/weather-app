import React, { useState } from 'react';
import './WeatherApp.css'

import search_icon from "../assets/search.png";
import clear_icon from "../assets/clear.png";
import cloud_icon from "../assets/cloud.png";
import drizzle_icon from "../assets/drizzle.png";
import rain_icon from "../assets/rain.png";
import snow_icon from "../assets/snow.png";
import wind_icon from "../assets/wind.png";
import humidity_icon from "../assets/humidity.png";
const  Weather = () => {
    const [wiscon,setWiscon] = useState(cloud_icon)

    const search = async () => {
    const element=document.getElementsByClassName("cityInput");
    if(element[0].value===""){
        return 0;
    }
    let url=`https://api.openweathermap.org/data/2.5/weather?q=${element[0].value}&units=Metric&appid=dd94f859a0e52d6e4767fddf735f04a7`;
     
    let response = await fetch(url);
    let data = await response.json();
  const humidity = document.getElementsByClassName("humidity-percent");
  const wind = document.getElementsByClassName("wind-rate");
  const temprature = document.getElementsByClassName("weather-temp");
  const location =document.getElementsByClassName("weather-location");
       humidity[0].innerHTML = data.main.humidity +"%";
       wind[0].innerHTML = Math.floor(data.wind.speed)+"km/hr";
       temprature[0].innerHTML = Math.floor(data.main.temp)+"°C";
       location[0].innerHTML = data.name;

    }
  return (
    <div className='container'>
      <div className="top-bar">
        <input type="text" className="cityInput" placeholder='search'></input>
      <div className="search_icon" onClick={()=>{search()}}>
          <img src={search_icon} alt=" "/>
      </div>
      
      </div>
       
       <div className="weather-image">
        <img src={cloud_icon} alt=" " />
       </div>
       <div className="weather-temp" >24°C</div>
       <div className="weather-location">London</div>
       <div className="data-container">
        <div className="element">
            <img src={humidity_icon} alt="" className="icon" />
            <div className="data">
                <div className="humidity-percent">64% </div>
                <div className="text">Humidity</div>
            </div>
        </div>
        <div className="element">
            <img src={wind_icon} alt="" className="icon" />
            <div className="data">
                <div className="wind-rate">18km/hr </div>
                <div className="text">Wind Speed</div>
            </div>
        </div>
       </div>
    </div>
  );
};

export default Weather;
