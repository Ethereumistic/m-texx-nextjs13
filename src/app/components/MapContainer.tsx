import React from 'react';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';

// Define your map and marker properties
const mapStyles = {
  height: "100vh",
  width: "100%"
};

const defaultCenter = {
  lat: 42.733883, 
  lng: 25.485830
}

const locations = [
  { lat: 42.733883, lng: 25.485830 },
  { lat: 42.697708, lng: 23.321868 },
  { lat: 43.214050, lng: 27.914733 }
]

const apiKey = process.env.GOOGLE_MAPS_API_KEY;
if (!apiKey) {
    throw new Error("Please define the GOOGLE_MAPS_API_KEY environment variable");
}

const MapContainer = () => {

  return (
     <LoadScript
     googleMapsApiKey={apiKey}>
     <GoogleMap
         mapContainerStyle={mapStyles}
         zoom={7}
         center={defaultCenter}>
         {
           locations.map((location, i) => {
             return (
             <Marker key={i} position={location}/>
             )
           })
         }
       </GoogleMap>
     </LoadScript>
  )
}

export default MapContainer;
