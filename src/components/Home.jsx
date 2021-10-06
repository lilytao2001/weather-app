import React, { Component } from 'react';
import { useState, useEffect } from 'react';
import CityOptions from './CityOptions';
import CurrentWeather from './CurrentWeather';
import Container from '@mui/material/Container';
import "./Styles.css";

function Home() {
    const [apiData, setApiData] = useState({});
    const [getCity, setGetCity] = useState("Los Angeles");
    const [bg, setBg] = useState("https://upload.wikimedia.org/wikipedia/commons/3/32/20190616154621%21Echo_Park_Lake_with_Downtown_Los_Angeles_Skyline.jpg");

    const apiKey = "83ebd1e319767f4fb23d26430aca217d";
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${getCity}&appid=${apiKey}`;

    useEffect(() => {
        fetch(apiUrl)
          .then((res) => res.json())
          .then((data) => setApiData(data));
    }, [apiUrl]);

    const inputHandler = (event) => {
        setGetCity(event.target.value);
        switch (event.target.value) {
            case "Toronto":
                setBg("https://static.onecms.io/wp-content/uploads/sites/28/2021/07/08/toronto-ontario-canada-lead-TORONTOTG0721.jpg")
                break;
            case "Los Angeles":
                setBg("https://upload.wikimedia.org/wikipedia/commons/3/32/20190616154621%21Echo_Park_Lake_with_Downtown_Los_Angeles_Skyline.jpg")
                break;
            case "Phoenix":
                setBg("http://res.cloudinary.com/simpleview/image/upload/v1529338942/clients/phoenix/148e5282_6056_4aca_9135_d0d5f25e9a9d_df00ab2b-7f9c-462e-a8a7-903f8757870e.jpg")
                break;
            case "Chicago":
                setBg("https://news.wttw.com/sites/default/files/styles/full/public/field/image/chicago-5347324_1920_0_0_1.jpg?itok=xKa0NBJ3")
                break;
            case "New York":
                setBg("https://media.cntraveler.com/photos/5a8f3b070e2cf839e9dbfa1d/2:1/w_2560%2Cc_limit/NYC_GettyImages-640006562.jpg")
                break;
        }
        console.log(bg)
    };

    const convertToCelcius = (k) => {
        return (k - 273.15).toFixed(0);
    }
    const style = {
        backgroundImage: `url(${bg})`,
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        brightness: "0",
        width: '100vw',
        height: '100vh'
    }
    return ( 
        <React.Fragment>
            <div style={style} className="dark-mask">
                <div className="container-header">Choose Your Location</div>
                <Container>
                <CityOptions
                    getCity = {getCity}
                    setCity = {inputHandler}
                />
                </Container>        
                {apiData.main ? (
                    <React.Fragment>
                        <CurrentWeather 
                            city = {getCity}
                            temp={convertToCelcius(apiData.main.temp)}
                            min={convertToCelcius(apiData.main.temp_min)}
                            max={convertToCelcius(apiData.main.temp_max)}
                            feelsLike={convertToCelcius(apiData.main.feels_like)}
                            desc={apiData.weather[0].main}
                        />
                    </React.Fragment>
                ): <div> Loading </div>
                }
            </div>
        </React.Fragment>
    );

}
 
export default Home;
