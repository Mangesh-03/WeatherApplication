import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import AcUnitIcon from '@mui/icons-material/AcUnit';
import ThunderstormIcon from '@mui/icons-material/Thunderstorm';
import SunnyIcon from '@mui/icons-material/Sunny';

import "./InfoBox.css"


export default function InfoBox({info})
{
    const COLD_IMG = "https://images.unsplash.com/photo-1528191710846-99b8717a2830?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzB8fGNvbGR8ZW58MHx8MHx8fDA%3D"
    const RAIN_IMG = "https://media.istockphoto.com/id/2183276741/photo/dark-overcast-sky-with-heavy-rain-and-lightning-intense-weather-phenomenon.webp?a=1&b=1&s=612x612&w=0&k=20&c=Hzdnwem_ill_Xemxi-BWChq0pTotJ_Ahn-N_F-28bls=";
    const HOT_IMG = "https://plus.unsplash.com/premium_photo-1663100808180-6248dd9cdaa7?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8c3VuJTIwZGF5fGVufDB8fDB8fHww";
    
    return(
        <div className="InfoBox">
            <h1>Weather Info</h1>
            <div className='cardContainer'>
                <Card sx={{ maxWidth: 345 }}>
                    <CardMedia
                        sx={{ height: 140 }}              
                        image={
                                info.humidity > 80 ? 
                                RAIN_IMG : info.temp > 15 ? 
                                HOT_IMG : COLD_IMG
                            }
                        title="green iguana"
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                        {info.city}&nbsp;{
                                info.humidity > 80 ? 
                                <ThunderstormIcon/> : info.temp > 15 ? 
                                <SunnyIcon/> : <AcUnitIcon/>
                        }
                        </Typography>

                        <Typography variant="body2" sx={{ color: 'text.secondary' }} component={"span"}>
                            <p>Temperature  : {info.temp}&deg;C</p>
                            <p>Humidity  : {info.humidity}&deg;C</p>
                            <p>Max Temperature  : {info.temp_max}&deg;C</p>
                            <p>Min Temperature   : {info.temp_min}&deg;C</p>
                            <p>Weather is {info.weather} and temp feelslike {info.feelsLike}&deg;C</p>
                        </Typography>
                    </CardContent>
                </Card> 
            </div>
        </div>
    )
}