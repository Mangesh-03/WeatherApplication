import { useState } from "react";
import InfoBox from "./InfoBox";
import SearchBox from "./SearchBox";

export default function WeatherApp()
{
    const [weatherInfo,setWeatherInfo] = useState({
        city : "Pune",
        temp : 24,
        temp_min : 24,
        temp_max : 24,
        humidity : 45,
        feelsLike : 28,
        weather : "clear Sky",
    });

    let updateInfo = (newInfo)=>
    {
        setWeatherInfo(newInfo);
    }

    return(
        <div style={{textAlign : "center"}}>
            <h1>Weather By Marvellous</h1>
            <SearchBox updateInfo = {updateInfo}/>
            <InfoBox info={weatherInfo}/>
        </div>
    );
}