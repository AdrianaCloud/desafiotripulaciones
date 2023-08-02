import React, { useState, useEffect } from "react";
import WeatherCard from './WeatherCard/WeatherCard'
import { IonIcon } from '@ionic/react';
import { search, searchOutline } from 'ionicons/icons';


//api.openweathermap.org/data/2.5/forecast?lat={lat}&lon={lon}&appid={API key} //devuelve datos de tiempo en funcion de lat y long


/*
info que desplegar:
-tiempo actual
  -estado
  -temp
  -viento
-prediccion
  -max y min
  viento
*/
const WeatherForecast = () => {
  const [city, setCity] = useState('Madrid')
  const [search, setSearch] = useState('')
  const [forecast, setForecast] = useState([]);

  const onInputChanged = (e) => {
    setSearch(e.target.value);
  }

  const getWeatherInfo = async (lat, lon) => {
    try {
      const response = await fetch(`http://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=af89a2e47b352bf154f8ef5e11e676c2`)
      const data = await response.json()
      console.log(data)
      setForecast(data.list)
    } catch (error) {
      console.log(error)
    }
  }

  const onSearch = (e) => {
    e.preventDefault()
    setCity(search)
  }

  useEffect(() => {
    const getCoordinates = async (cityName) => {
      try {
        const response = await fetch(`http://api.openweathermap.org/geo/1.0/direct?q=${cityName}&limit=5&appid=af89a2e47b352bf154f8ef5e11e676c2`)
        const data = await response.json()
        const lat = data[0].lat
        const lon = data[0].lon
        await getWeatherInfo(lat, lon)
      } catch (error) {
        console.log(error);
      }
    }

    getCoordinates(city)
  }, [city])

  const filterForecast = () => {

  }

  // Get the current weather data
  const currentWeather = forecast.length > 0 ? forecast[0] : null;
  console.log(forecast);
  return <>
    <header>
      <h1>Tiempo en {city}</h1>
      <form action="">
        <input type="text" value={search} placeholder="ciudad" onChange={onInputChanged} />
        <IonIcon icon={searchOutline} onclick={onSearch} className="icon search-icon" />
      </form>
    </header>
    <section className="current-weather">
      {/* icono */}
      <p>{forecast[0].weather[0].description}</p>
      <p>{Math.ceil(forecast[0].main.temp) - 273}º</p>
      <p>Sensación de {Math.ceil(forecast[0].main.feels_like) - 273}º</p>
      <article className="wind">
        <p>Viento:</p>
        <p> {Math.ceil((forecast[0].wind.speed) * 3.57)}km/h</p>
      </article>


    </section>
  </>


};

export default WeatherForecast;

