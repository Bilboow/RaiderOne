import React, { useEffect, useState } from "react";
import { MapContainer, TileLayer, Marker } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";

const LiveTracking = () => {
  const [currentPosition, setCurrentPosition] = useState({
    lat: 28.6139,
    lng: 77.2090,
  });

  // Custom Marker (fix Leaflet icon issue)
  const liveIcon = new L.Icon({
    iconUrl: "https://cdn-icons-png.flaticon.com/512/684/684908.png",
    iconSize: [30, 30],
  });

  useEffect(() => {
    navigator.geolocation.getCurrentPosition((position) => {
      const { latitude, longitude } = position.coords;
      setCurrentPosition({ lat: latitude, lng: longitude });
    });

    const watchId = navigator.geolocation.watchPosition((position) => {
      const { latitude, longitude } = position.coords;
      setCurrentPosition({ lat: latitude, lng: longitude });
    });

    return () => navigator.geolocation.clearWatch(watchId);
  }, []);

  useEffect(() => {
    const updateLocation = () => {
      navigator.geolocation.getCurrentPosition((position) => {
        const { latitude, longitude } = position.coords;
        console.log("Live location:", latitude, longitude);
        setCurrentPosition({ lat: latitude, lng: longitude });
      });
    };

    updateLocation();
    const intervalId = setInterval(updateLocation, 1000); // update every 1 sec

    return () => clearInterval(intervalId);
  }, []);

  return (
    <MapContainer
      center={[currentPosition.lat, currentPosition.lng]}
      scrollWheelZoom
      zoom={15}
      style={{ width: "100%", height: "100%" }}
    >
      {/* Geoapify tiles */}
      <TileLayer
        url={`https://maps.geoapify.com/v1/tile/osm-carto/{z}/{x}/{y}.png?apiKey=${
          import.meta.env.VITE_GEOAPIFY_API_KEY
        }`}
      />

      <Marker position={[currentPosition.lat, currentPosition.lng]} icon={liveIcon} />
    </MapContainer>
  );
};

export default LiveTracking;
