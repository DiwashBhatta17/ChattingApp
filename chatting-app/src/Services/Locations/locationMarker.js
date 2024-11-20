import React from 'react'
import { useState, useEffect, useRef } from 'react';
import { MapContainer, TileLayer, Marker, Popup, useMapEvents, useMapEvent } from 'react-leaflet';
import L from 'leaflet';
import markingImage from "../../Pages/Images/marker img.png"; 
import 'leaflet/dist/leaflet.css';

function LocationMarker({ mapRef }) {
    const [position, setPosition] = useState(null);
    const [zoom, setZoom] = useState(13);

    const map = useMapEvents({
        click(e) {
            setPosition([e.latlng.lat, e.latlng.lng])
            console.log(position);
            localStorage.setItem("location",position);
        }
    })

    useEffect(() => {
        // Try to get the user's current location
        if ('geolocation' in navigator) {
            console.log("render")
            navigator.geolocation.getCurrentPosition((position) => {
                const { latitude, longitude } = position.coords;
                setPosition([latitude, longitude]);
                // Fly or pan the map to the user's current location
                if (mapRef.current) {
                    console.log(mapRef.current)
                    mapRef.current.flyTo([latitude, longitude], zoom);
                }
            });
        }
    }, []);

    const customIcon = L.icon({
        iconUrl: markingImage,
        iconSize: [30, 45]
    });
    return (position !== null) ?
        <Marker position={position} icon={customIcon} >
            <Popup>You are here</Popup>
        </Marker> : null;
}

function MarkerMap() {
    const mapRef = useRef(null);

    return (
        <MapContainer style={{ height: '400px', width: '100%' }}
            ref={mapRef}
            center={{ lat: 51.505, lng: - 0.09 }}
            zoom={13}
            scrollWheelZoom={false} >
            < TileLayer
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            />
            <LocationMarker mapRef={mapRef} />
        </MapContainer >
    )
}
export default MarkerMap;