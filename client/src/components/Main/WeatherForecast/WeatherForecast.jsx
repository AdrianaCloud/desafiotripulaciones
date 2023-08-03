import React, { useState, useEffect } from "react";
import HeaderTwo from '../../HeaderTwo/HeaderTwo'
import { IonIcon } from '@ionic/react';
import { search, sunnyOutline } from 'ionicons/icons';

const WeatherForecast = () => {
  const [city, setCity] = useState('Madrid');
  const [searchText, setSearchText] = useState('');
  const [forecast, setForecast] = useState([]);

  const onInputChanged = (e) => {
    setSearchText(e.target.value);
  };

  const weatherForecastData = async (lat, lon) => {
    try {
      const response = await fetch(`http://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=af89a2e47b352bf154f8ef5e11e676c2`);
      const data = await response.json();
      console.log(data);
      setForecast(data.list);
    } catch (error) {
      console.log(error);
    }
  };

  const onSearch = (e) => {
    e.preventDefault();
    setCity(searchText);
  };

  useEffect(() => {
    const getCoordinates = async (cityName) => {
      try {
        const response = await fetch(`http://api.openweathermap.org/geo/1.0/direct?q=${cityName}&limit=5&appid=af89a2e47b352bf154f8ef5e11e676c2`);
        const data = await response.json();
        const lat = data[0].lat;
        const lon = data[0].lon;
        await weatherForecastData(lat, lon);
      } catch (error) {
        console.log(error);
      }
    };

    getCoordinates(city);
  }, [city]);
  console.log(forecast)
  return (
    <>
      <HeaderTwo />
      <div className="weather-container">
        <section className="search">
          <h1>Poronostico Meteorológico </h1>
          <form action="">
            <input type="text" value={searchText} placeholder="Ciudad" onChange={onInputChanged} />
            <IonIcon icon={search} className="search-icon" onClick={onSearch} />
          </form>
        </section>

        {forecast.length > 0 && (
          <section className="current-weather">

            <h3>Tiempo en {city}</h3>
            <article className="weather-card">
              {/* <IonIcon icon={sunnyOutline} className="sunny-icon" /> */}
              <div>
                <p>{forecast[0].weather[0].description}</p>
                <p>{Math.ceil(forecast[0].main.temp) - 273}º</p>
                <p>Sensación de {Math.ceil(forecast[0].main.feels_like) - 273}º</p>
                <article className="wind">
                  <p className="wind">Viento: {Math.ceil((forecast[0].wind.speed) * 3.57)}km/h</p>

                </article>
              </div>
            </article>

          </section>
        )}
      </div>
    </>
  );
};

export default WeatherForecast;
