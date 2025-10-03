import React, { use, useState } from "react";
import './index.css';
import axios from "axios";

const App = () => {

  const [city,setCity] = useState("");

  const [weather,setWeather] = useState("");
  const [temperature,setTemperature] = useState("");
  const [description,setDescription] = useState("");  



  function handleCity(evt){
    setCity(evt.target.value);
  }

  function getWeather(){
   var weatherData = axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=093135b7664a5ae38821bbb05aaf7c8a`);

      weatherData.then(function(success){
        console.log(success.data);''
        setWeather(success.data.weather[0].main);
        setTemperature(success.data.main.temp);
        setDescription(success.data.weather[0].description);
      })
  }

  return (
    <>
    <div className="min-h-screen bg-gradient-to-br from-blue-400 via-indigo-500 to-purple-600 flex items-center justify-center p-4">
      <div className="bg-white/20 backdrop-blur-md rounded-2xl shadow-lg p-8 w-full max-w-md text-white">
          <h1 className="text-3xl font-extrabold text-center mb-2 tracking-wide">🌤️ Weather Report</h1>
          <p className="font-semibold text-center">I can give you a weather report for any city you want! What city are you interested in?</p>
          <input onChange={handleCity} className="w-full px-4 py-3 rounded-xl bg-transparent p-3 text-white placeholder-white/80 focus:outline-none" type="text" placeholder="Enter city name" />
          <br />
          <button onClick={getWeather} className="px-6 py-3 w-full mb-3 bg-gradient-to-r from-blue-500 to-indigo-600 text-white font-semibold rounded-xl shadow-md hover:from-blue-600 hover:to-indigo-700 transition-all duration-200">Get Weather</button>
            <div className="text-center space-y-2">
          <p className="text-lg">
            <span className="font-semibold">Weather:</span> {weather}
          </p>
          <p className="text-lg">
            <span className="font-semibold">Temperature:</span> {temperature}°C
          </p>
          <p className="text-lg capitalize">
            <span className="font-semibold">Description:</span> {description}
          </p>
        </div>
        </div>
      </div>
    </>
  );
};

export default App;