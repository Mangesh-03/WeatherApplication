import { useState } from "react"
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import "./SearchBox.css";



export default function SearchBox({updateInfo})
{
    let API_KEY = "63335af931cb383d23243*********";
    let API_URL = "https://api.openweathermap.org/data/2.5/weather";

    let [city,setCity] = useState("");
    let [error,setError] = useState(false);

    let getWeatherInfo = async()=>
    {
        try
        {   let response =  await fetch(`${API_URL}?q=${city}&appid=${API_KEY}&units=metric`);

            let jsonResponse = await response.json();
            
            let result = {
                    city : city,
                    temp : jsonResponse.main.temp,
                    temp_min : jsonResponse.main.temp_min,
                    temp_max : jsonResponse.main.temp_max,
                    humidity : jsonResponse.main.humidity,
                    feelsLike : jsonResponse.main.feels_like,
                    weather : jsonResponse.weather[0].description,
            }

            console.log(result);
            return result;
        }
        catch(err)
        {
           throw err;
        }
    }

    let handleChange = (event)=>
    {
        setCity(event.target.value);
    }

    let handleSubmit = async (event)=>
    {
        try{
            event.preventDefault();
            console.log(city);

            setCity("");
            let info = await getWeatherInfo();

            updateInfo(info);
        }catch(err)
        {
            setError(true);
        }

    }

    return(
        <div className="SearchBox">
            <form onSubmit={handleSubmit}>
                <TextField 
                    label="City Name" 
                    variant="outlined" 
                    id="city"
                    value={city}
                    onChange={handleChange} 
                    required
                /> 
                <br/><br/>
                <Button variant="contained" type="submit">Submit</Button>   
                {error && <p style={{color:"red" }}> No such place exists in API</p>}   
            </form>
        </div>
    )
}
