
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import './infoBox.css';
function InfoBox({info}) {
    const INIT_URL = "https://plus.unsplash.com/premium_photo-1729600377083-bbe558d8b7a6?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
    const COLD_URL = "https://images.unsplash.com/photo-1612208695882-02f2322b7fee?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y29sZCUyMHdlYXRoZXJ8ZW58MHx8MHx8fDA%3D"
    const HOT_URL = "https://images.unsplash.com/photo-1561473880-3b8b12de0a71?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8aG90JTIwd2VhdGhlcnxlbnwwfHwwfHx8MA%3D%3D"
    const RAINY_URL = "https://plus.unsplash.com/premium_photo-1725408051956-a6dc142169bd?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cmFpbnklMjBjbG91ZCUyMHdlYXRoZXJ8ZW58MHx8MHx8fDA%3D"

    return (
        <>
            <div className="infoBox">
                <br />
            </div>
            <div className='container'>
            <Card sx={{ maxWidth: 345 }} className='Card'>
                <CardMedia
                    sx={{ height: 140 }}
                    image={info.humidity > 50 ? RAINY_URL : (info.temp > 15 ? HOT_URL : COLD_URL)}
                    title="green iguana"
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        {info.city}
                    </Typography>
                    <Typography variant="body2" sx={{ color: 'text.secondary' }} component={"span"}>
                        <div>Tempreture : {info.temp}&deg;C</div><br />
                        <div>Humidity : {info.humidity}</div><br />
                        <div>Min Temp : {info.tempMin}&deg;C</div><br />
                        <div>Max Temp : {info.tempMax}&deg;C</div><br />
                        <div><p>The weather can be described as {info.weather} and feels {info.feels_like}&deg;C</p></div>
                        <div></div>
                    </Typography>
                </CardContent>
            </Card>
            </div>
        </>
    )
}
export default InfoBox;