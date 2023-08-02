import React from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import {
  MapContainer,
  TileLayer,
  Polyline
} from 'react-leaflet'
import L from "leaflet";
import 'leaflet/dist/leaflet.css'
//import { data } from './spacmsendasnaturaleza'
import 'leaflet/dist/leaflet.css';
import axios from "axios";
import { IonIcon } from '@ionic/react';
import { calendar, homeOutline, mapOutline, optionsOutline, personOutline, search, star, storefront, sunnyOutline, waterOutline } from 'ionicons/icons';


const Map = () => {
  const position = [40.416704, -3.703582]

  // const createButtonControl = () => {
  //   console.log("a");
  //   const MapHelp = L.Control.extend({
  //     onAdd: function (map) { // Use 'function' instead of arrow function
  //       const helpDiv = L.DomUtil.create("button", "");
  //       this.helpDiv = helpDiv;
  //       helpDiv.innerHTML = "HOLAAAA";

  //       helpDiv.addEventListener("click", () => {
  //         console.log("TEST DE CLICK");
  //       });
  //       return helpDiv;
  //     }
  //   });
  //   return new MapHelp({ position: "topleft" });
  // }

  useEffect(() => {

  }, [])

  //https://backend-app-hbpdfkrhla-ew.a.run.app/api/items/sendas
  const getRoutes = async () => {
    const data = await axios.get('https://backend-app-hbpdfkrhla-ew.a.run.app/api/items/sendas')
    console.log(data)
  }
  getRoutes()


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

      <MapContainer center={position} zoom={13} scrollWheelZoom={false} style={{ width: '100vw', height: '80vh' }} className="map-view">
        <TileLayer
          url='https://api.maptiler.com/maps/basic-v2/256/{z}/{x}/{y}.png?key=YGLfVJUlfCTRPOjf1xoj'
          attribution='<a href="https://www.maptiler.com/copyright/" target="_blank">&copy; MapTiler</a> <a href="https://www.openstreetmap.org/copyright" target="_blank">&copy; OpenStreetMap contributors</a>'
        />

        {/* {
        data.features.map(feature => {
          return feature.geometry.coordinates.map((test, index, array) => {
            if (index < array.length - 1) {
              return <Polyline key={index} positions={[array[index], array[index + 1]]} />
            }
          })
        })

      } */}

      </MapContainer>
      <section className="navigation">
        <IonIcon icon={calendar} className="icon" />
        <IonIcon icon={mapOutline} className="icon" id="map-icon" />
        <Link to="/" ><IonIcon icon={homeOutline} className="icon" /></Link>
        <Link to="/miperfil" ><IonIcon icon={personOutline} className="icon" /></Link>
      </section>

    </div>
  </>
};

export default Map;
