import React, { Component } from "react";
import { Map, TileLayer, Marker, Popup } from 'react-leaflet'
import L from 'leaflet';
import 'leaflet/dist/leaflet.css'
import icon from 'leaflet/dist/images/marker-icon.png';
import iconShadow from 'leaflet/dist/images/marker-shadow.png';


const position = [46.431306, 30.715389]
const zoom = 10

let DefaultIcon = L.icon({
    iconUrl: icon,
    shadowUrl: iconShadow,
    iconSize: [25,41],
    iconAnchor: [12,36]
});

const DisplayMap = (props) => {

    L.Marker.prototype.options.icon = DefaultIcon;

    const markerList = props.data.map(function(item, index) {

      const { 
        registry_number, 
        case_number, 
        url, 
        address, 
        case_city,
        case_date, 
        icon,
        court,
        category,
        color,
        judge,
        get_coordinates,
        comment } = item

      return (
        <Marker key={registry_number} position={get_coordinates} onClick={() => props.getInfo({item})}>
            <Popup>
                A pretty CSS3 popup. <br /> {url}
            </Popup>
        </Marker>
      )
    })

    return (

      <Map center={position} zoom={zoom} minZoom={10} maxZoom={18} style={{ height: "100%", width: '100%' }}>
        <TileLayer
          attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />

        {markerList}

      </Map>
    )
}

export default DisplayMap;
