import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import {
  MapContainer,
  TileLayer,
  Marker,
  Popup,
  useMap
} from 'react-leaflet'
import 'leaflet/dist/leaflet.css'
//import { data } from './spacmsendasnaturaleza'
import 'leaflet/dist/leaflet.css';
import axios from "axios";
import { IonIcon } from '@ionic/react';
import { calendar, homeOutline, mapOutline, optionsOutline, personOutline, search, star, storefront, sunnyOutline, waterOutline } from 'ionicons/icons';
import { UserContext } from "../../../context/userContext";
import { Slider } from '@mui/material'
import { Icon } from "leaflet";


const Map = () => {

  const [weatherData, setWeatherData] = useState({})
  const [perfilData, setPerfilData] = useState({})
  const [distancia, setDistancia] = useState(20)
  const [similitud, setSimilitud] = useState(50)
  const [items, setItems] = useState([])

  const { userData, setUserData } = useContext(UserContext)

  const markerIcon = new Icon({
    iconUrl: 'https://pavzi.com/wp-content/uploads/2021/11/Google-Maps.png.webp',
    iconSize: [25, 25]
  })

  function SetViewOnClick({ coords }) {
    const map = useMap();
    map.setView(coords, map.getZoom());
  
    return null;
  }

  function DisplayMarkers({ marker }) {
      return <Marker icon={markerIcon} position={[marker.LATITUD, marker.LONGITUD]}>
    </Marker>
  }

  const getPrediction = async () => {

    // console.log(perfilData.preferencias_deportivas);

    const test = perfilData.preferencias_deportivas.map(elemento => `"${elemento}"`);
    // console.log(test);
    
    const data = await axios.get(`https://data-api-hbpdfkrhla-ew.a.run.app/v1?edad=${perfilData.edad}&sexo=${perfilData.sexo}&peso=${perfilData.peso}&condicion=${perfilData.condicion}&objetivo=${perfilData.objetivo_entrenamiento}&preferencias=[${test}]&posicion=${weatherData.position}&distancia=${distancia}&clima=${weatherData.clima}&temperatura=${weatherData.temperatura}&humedad=${weatherData.humedad}&similitud=${similitud/100}`)
    setItems(data.data["Items filtrados"])
    // console.log(data.data["Items filtrados"]);
    // console.log(`https://data-api-hbpdfkrhla-ew.a.run.app/v1?edad=${perfilData.edad}&sexo=${perfilData.sexo}&peso=${perfilData.peso}&condicion=${perfilData.condicion}&objetivo=${perfilData.objetivo_entrenamiento}&preferencias=[${perfilData.preferencias_deportivas}]&posicion=${weatherData.position}&distancia=${distancia}&clima=${weatherData.clima}&temperatura=${weatherData.temperatura}&humedad=${weatherData.humedad}&similitud=${similitud/100}`);
  }

  

  useEffect(() => {

    const getUserData = async () => {
      const data = await axios.get(`https://backend-app-hbpdfkrhla-ew.a.run.app/api/perfil/${userData.email}`)
      // console.log(data.data[0])
      setPerfilData(data.data[0])
    }

    // Get weather data
    navigator.geolocation.getCurrentPosition(async (position) => {
      let lat = position.coords.latitude;
      let long = position.coords.longitude;
      
      const getWeather = await axios.get(`https://api.openweathermap.org/data/2.5/forecast?lat=${lat.toFixed(2)}&lon=${long.toFixed(2)}&appid=6e88db63ffd9c008671103322e4b94ba`)

        const newWeatherData = {
          position: [lat, long],
          temperatura: parseFloat((getWeather.data.list[0].main.temp - 273.15).toFixed(2)),
          humedad: getWeather.data.list[0].main.humidity,
          clima: getWeather.data.list[0].weather[0].main === "Clear" ? 0 : getWeather.data.list[0].weather[0].main === "Rain" ? 2 : 1
        }

        setWeatherData(newWeatherData)
    })

    getUserData()
  }, [])

  return <>
    <div className="map-view-container">
      <input type="text" placeholder="Buscar" />
      <IonIcon icon={search} className="icon search-icon" />
      <div className="btn-container">
        <IonIcon icon={sunnyOutline} className="icon" />
        <IonIcon icon={waterOutline} className="icon" />
        <IonIcon icon={storefront} className="icon" />
        <IonIcon icon={star} className="icon" />
        <IonIcon icon={optionsOutline} className="icon" id="filter-icon" />
      </div>

      <MapContainer center={[40.416704, -3.703582]} zoom={13} scrollWheelZoom={false} style={{ width: '100vw', height: '80vh' }} className="map-view">
        <TileLayer
          url='https://api.maptiler.com/maps/basic-v2/256/{z}/{x}/{y}.png?key=YGLfVJUlfCTRPOjf1xoj'
          attribution='<a href="https://www.maptiler.com/copyright/" target="_blank">&copy; MapTiler</a> <a href="https://www.openstreetmap.org/copyright" target="_blank">&copy; OpenStreetMap contributors</a>'
        />

        { weatherData.position ? <SetViewOnClick coords={weatherData.position} /> : <></> }

        { items.length ? items.map((mark, index) => <DisplayMarkers key={index} marker={mark} />) : <></> }

      </MapContainer>
      <section className="navigation">
        <IonIcon icon={calendar} className="icon" />
        <IonIcon icon={mapOutline} className="icon" id="map-icon" />
        <Link to="/" ><IonIcon icon={homeOutline} className="icon" /></Link>
        <Link to="/miperfil" ><IonIcon icon={personOutline} className="icon" /></Link>
      </section>

      <section className="filters-container">

        <article className="slider-container">
          <span className="slider-title">{"Distancia (km)"}</span>

          <Slider onChange={ (e, val) => setDistancia(val) }
          className="filter-slider"
          defaultValue={20}
          min={1}
          max={200}
          aria-label="Small"
          valueLabelDisplay="auto"
          />
        </article>

        <article className="slider-container">
          <span className="slider-title">{"Similitud (%)"}</span>

          <Slider onChange={ (e, val) => setSimilitud(val) }
          className="filter-slider"
          defaultValue={50}
          min={0}
          max={100}
          aria-label="Small"
          valueLabelDisplay="auto"
          />

          <button onClick={() => getPrediction()}>Enviar</button>
        </article>

      </section>


    </div>
  </>
};

export default Map;
