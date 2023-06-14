"use client";
import { useEffect, useState } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import { LatLngExpression } from 'leaflet';
import 'leaflet/dist/leaflet.css';

const MapComponent: React.FC = () => {
  const [isMounted, setIsMounted] = useState(false);
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const defaultPosition: LatLngExpression = [42.7339, 25.4858]; // Coordinates for Bulgaria
  const sofiaCoordinates: LatLngExpression = [42.6977, 23.3219]; // Sofia's coordinates for textile recycling container
  const plovdivCoordinates: LatLngExpression = [42.1354, 24.7453]; // Plovdiv's coordinates for textile recycling container
  const ruseCoordinates: LatLngExpression = [43.8356, 25.9657]; // Ruse's coordinates for textile recycling container

  useEffect(() => {
    setIsMounted(true); // After component mounts, set isMounted to true
  }, []);

  if (!isMounted) return null; // If not mounted, don't render

  return (
    <div className="h-screen w-screen md:w-1/2 md:h-screen">
      <MapContainer style={{ height: "100%", width: "100%" }} center={defaultPosition} zoom={7}>
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker 
    position={sofiaCoordinates}
    eventHandlers={{
      click: () => {
        setIsPopupOpen(true);
      },
    }}
  >
    {isPopupOpen && (
      <Popup>
        <div className="text-center">
          <div className="font-bold">Sofia</div>
          <div>Textile recycling container</div>
        </div>
      </Popup>
    )}
  </Marker>
        <Marker position={plovdivCoordinates}>
          <Popup>
            <div className="text-center">
              <div className="font-bold">Plovdiv</div>
              <div>Textile recycling container</div>
            </div>
          </Popup>
        </Marker>
        <Marker position={ruseCoordinates}>
          <Popup>
            <div className="text-center">
              <div className="font-bold">Ruse</div>
              <div>Textile recycling container</div>
            </div>
          </Popup>
        </Marker>
      </MapContainer>
    </div>
  );
};

export default MapComponent;




