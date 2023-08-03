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
  const [fuentesPiscinas, setFuentesPiscinas] = useState([])

  const { userData, setUserData } = useContext(UserContext)

  const markerIcon = new Icon({
    iconUrl: 'https://pavzi.com/wp-content/uploads/2021/11/Google-Maps.png.webp',
    iconSize: [25, 25]
  })

  const markerPiscinaIcon = new Icon({
    iconUrl: './piscinas.svg',
    iconSize: [30, 30]
  })

  const markerCentroDeportivoIcon = new Icon({
    iconUrl: './centros_deportivos.svg',
    iconSize: [30, 30]
  })

  const markerZonaVerdeIcon = new Icon({
    iconUrl: './zona_verde.svg',
    iconSize: [30, 30]
  })

  const markerFuentesPiscinasIcon = new Icon({
    iconUrl: './fuentespiscinas.svg',
    iconSize: [30, 30]
  })

  const markerCentrosaludIcon = new Icon({
    iconUrl: './centrosalud.svg',
    iconSize: [30, 30]
  })

  function SetViewOnClick({ coords }) {
    const map = useMap();
    map.setView(coords, map.getZoom());

    return <Marker icon={markerIcon} position={coords}>
      <Popup>
        <span>Estás aquí!</span>
      </Popup>
    </Marker>
  }

  function DisplayAdittionalMarkers({ marker }) {

    const [markerData, setMarkerData] = useState({})

    const map = useMap();

    const getMarkerData = async () => {
      const dataMarker = await axios.get(`http://localhost:5000/api/items/id/${marker.ID}`)
      setMarkerData(dataMarker.data[0])
    }

    getMarkerData()

    return <Marker icon={ markerData.TIPO === "PISCINA" || markerData.TIPO === "FUENTE" ? markerFuentesPiscinasIcon : markerCentrosaludIcon } position={[marker.LATITUD, marker.LONGITUD]}>
      { markerData.NOMBRE ? (<Popup>
          <div className="marker-info">
          <h2>{markerData.NOMBRE}</h2>
          <span>{markerData.DIRECCION}</span>
          <a href={markerData.CONTENT_URL}>Sitio Web</a>
          </ div>
          </Popup>) : <></> }
    </Marker>
  }

  function DisplayMarkers({ marker }) {

    const [markerData, setMarkerData] = useState({})

    const map = useMap();

    const getMarkerData = async () => {
      const dataMarker = await axios.get(`https://backend-app-hbpdfkrhla-ew.a.run.app//api/items/id/${marker.ID}`)
      setMarkerData(dataMarker.data[0])
    }

    getMarkerData()

    return <Marker icon={ markerData.TIPO === "PISCINA" ? markerPiscinaIcon : markerData.TIPO === "INSTALACIÓN DEPORTIVA" ? markerCentroDeportivoIcon : markerData.TIPO === "ZONA VERDE" ? markerZonaVerdeIcon : markerIcon } position={[marker.LATITUD, marker.LONGITUD]}>
      <Popup>
        { markerData.NOMBRE ? (
          <div className="marker-info">
          <h2>{markerData.NOMBRE}</h2>
          <span>{markerData.DIRECCION}</span>
          <a href={markerData.CONTENT_URL}>Sitio Web</a>
          </ div>) : <span>Cargando...</span> }
      </Popup>
    </Marker>
  }

  const getPiscinasYFuentes = () => {
    const getData = async () => {

      let fuentes = await axios.get("https://backend-app-hbpdfkrhla-ew.a.run.app/api/items/fuentes")
      let piscinas = await axios.get("https://backend-app-hbpdfkrhla-ew.a.run.app/api/items/piscinas")

      console.log(...fuentes.data, ...piscinas.data);
      setFuentesPiscinas([...piscinas.data, ...fuentes.data])
    }

    getData()
  }

  const getCentrosDeSalud = () => {
    const getData = async () => {

      let centrosalud = await axios.get("https://backend-app-hbpdfkrhla-ew.a.run.app/api/items/centrosalud")
      console.log(centrosalud.data);
      setFuentesPiscinas(centrosalud.data)
    }

    getData()
  }

  const getPrediction = async () => {

    const test = perfilData.preferencias_deportivas.map(elemento => `"${elemento}"`);

    const data = await axios.get(`https://data-api-hbpdfkrhla-ew.a.run.app/v1?edad=${perfilData.edad}&sexo=${perfilData.sexo}&peso=${perfilData.peso}&condicion=${perfilData.condicion}&objetivo=${perfilData.objetivo_entrenamiento}&preferencias=[${test}]&posicion=${weatherData.position}&distancia=${distancia}&clima=${weatherData.clima}&temperatura=${weatherData.temperatura}&humedad=${weatherData.humedad}&similitud=${similitud / 100}`)
    setItems(data.data["Items filtrados"])
    // console.log(data.data);
    // console.log(`https://data-api-hbpdfkrhla-ew.a.run.app/v1?edad=${perfilData.edad}&sexo=${perfilData.sexo}&peso=${perfilData.peso}&condicion=${perfilData.condicion}&objetivo=${perfilData.objetivo_entrenamiento}&preferencias=[${test}]&posicion=${weatherData.position}&distancia=${distancia}&clima=${weatherData.clima}&temperatura=${weatherData.temperatura}&humedad=${weatherData.humedad}&similitud=${similitud/100}`);
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
        {/* <IonIcon icon={sunnyOutline} className="icon" /> */}
        <IonIcon onClick={() => getPiscinasYFuentes()} icon={waterOutline} className="icon" />
        <IonIcon onClick={() => getCentrosDeSalud()} icon={storefront} className="icon" />
        <IonIcon icon={star} className="icon" />
        <IonIcon icon={optionsOutline} className="icon" id="filter-icon" />
      </div>

      <MapContainer center={[40.416704, -3.703582]} zoom={13} scrollWheelZoom={false} style={{ width: '100vw', height: '80vh' }} className="map-view">
        <TileLayer
          url='https://api.maptiler.com/maps/basic-v2/256/{z}/{x}/{y}.png?key=YGLfVJUlfCTRPOjf1xoj'
          attribution='<a href="https://www.maptiler.com/copyright/" target="_blank">&copy; MapTiler</a> <a href="https://www.openstreetmap.org/copyright" target="_blank">&copy; OpenStreetMap contributors</a>'
        />

        {weatherData.position ? <SetViewOnClick coords={weatherData.position} /> : <></>}

        {items.length ? items.map((mark, index) => <DisplayMarkers key={index} marker={mark} />) : <></>}
        {fuentesPiscinas.length ? fuentesPiscinas.map((mark, index) => <DisplayAdittionalMarkers key={index} indice={index} marker={mark} />) : <></>}

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

          <Slider onChange={(e, val) => setDistancia(val)}
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

          <Slider onChange={(e, val) => setSimilitud(val)}
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
