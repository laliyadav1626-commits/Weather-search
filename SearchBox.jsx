import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import './search.css'
import { useState } from 'react';
function SearchBox({ updateInfo }) {
    let [city, setCity] = useState("");
    let [error, setError] = useState(false)
    let API_URL = "https://api.openweathermap.org/data/2.5/weather"
    let API_KEY = "6fe398899b684695ab738718ab4f93a2";

    let getWeatherInfo = async () => {
        try {
            let response = await fetch(`${API_URL}?q=${city}&appid=${API_KEY}&units = matric`);
            let jsonResponce = await response.json();
            console.log(jsonResponce);
            let result = {
                city: city,
                temp: jsonResponce.main.temp,
                tempMin: jsonResponce.main.temp_min,
                tempMax: jsonResponce.main.temp_max,
                humidity: jsonResponce.main.humidity,
                feels_like: jsonResponce.main.feels_like,
                weather: jsonResponce.weather[0].description,
            };
            console.log(result);
            return result;
        }
        catch (err) {
            throw err;
        }
    }

    const handleChange = (event) => {
        setCity(event.target.value)
    }
    const handleSubmit = async (event) => {
        try {
            event.preventDefault();
            console.log(city);
            setCity("")
            let newinfo = await getWeatherInfo();
            updateInfo(newinfo);
        }
        catch(err){
           setError(true);
        }
    
    }
    return (
        <>
            <div className='searchBox'>
                <form onSubmit={handleSubmit}>
                    <TextField
                        id="city"
                        label="City Name"
                        variant="outlined"
                        value={city}
                        onChange={handleChange}
                        required />
                    <br /><br />
                    <Button
                        variant="contained"
                        type='submit'>
                        Search</Button>
                        {error && (
                            <p style={{color:"red"}}>NO such place in Our API</p>
                        )}
                </form>
            </div>

        </>
    )
}
export default SearchBox;