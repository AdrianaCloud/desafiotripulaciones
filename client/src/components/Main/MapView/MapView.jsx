import React from "react";
import { useEffect } from "react";
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
    <MapContainer center={position} zoom={13} scrollWheelZoom={false} style={{ width: '80vw', height: '100vh' }} className="map-view">
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
      {data[0]}
    </MapContainer>
    <button>recomiendame una ruta</button>
  </>
};

export default Map;
