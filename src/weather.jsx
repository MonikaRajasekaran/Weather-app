import { useState } from "react"
import axios from "axios";


function Weather(){

    const [city,setcity] = useState("")

    const [weather,setweather] = useState("")
    const [temp,settemp] = useState("")
    const [desc,setdesc] = useState("")
 
    function handleCity(evt){
        setcity(evt.target.value)
    }

    function getWeather(){
        var weatherData = axios(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=1585fa342b239c3275f8050690f098d1`)
    
        weatherData.then(function(success)
        {
            console.log(success.data)
            setweather(success.data.weather[0].main)
            settemp(success.data.weather[0].description)
            setdesc(success.data.main.temp)

        })
    }
    return(
                <>
               <div className="container-fluid bg-gradient-to-b from-indigo-500 p-5 font-serif">
              <div className="box bg-red-500">
              <h1 className="p-2 text-xl"><b>WEATHER APP</b></h1>
                <p>I give your weather report about your city :)</p>  
                <input  className="p-2 mt-2  focus:border-blue-500 w-full rounded-xl" onChange={handleCity} placeholder="Enter the city name"></input><br />
                <button onClick={getWeather} className=" bg-indigo-500 p-2 mt-3 rounded-xl font-bold">Get Report</button>
               
               <div className="mt-3">
               <p>Weather:{weather}</p>
                <p>Temperature:{desc}</p>
                <p>Report:{temp}</p>
               </div>
              </div>
               </div>
                </>       
         )
}

export default Weather