import { useState } from "react";
import InfoBox from "./InfoBox";
import SearchBox from "./SearchBox";

function WeatherApp(){
    const [weatherInfo , setWeatherInfo] = useState({
               city: "Mumbai",
        feels_like: 285.7,
        humidity: 82,
        temp: 286.2,
        tempMax: 286.2,
        tempMin: 286.2,
        weather: "mist",
    })
    let updateInfo = (newinfo) =>{
         setWeatherInfo(newinfo);
    }
    return(<>
<div>
    <h2 style={{textAlign:"center"}}>Weather App</h2>
    <SearchBox updateInfo = {updateInfo}/>
    <InfoBox info = {weatherInfo}/>
</div>
    </>)
}
export default WeatherApp;