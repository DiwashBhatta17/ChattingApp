import React, { useEffect, useState, useRef } from 'react';
import { MapContainer, TileLayer, Marker, Popup, useMapEvents } from 'react-leaflet';
import SockJS from 'sockjs-client';
import { over } from 'stompjs';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import Logo from '../../../Pages/Images/marker img.png';

var socketClient = null;

function useInterval(callback, delay) {
    const savedCallback = useRef();

    // Remember the latest callback.
    useEffect(() => {
        savedCallback.current = callback;
    }, [callback]);

    // Set up the interval.
    useEffect(() => {
        function tick() {
            savedCallback.current();
        }

        if (delay !== null) {
            const id = setInterval(tick, delay);
            return () => clearInterval(id);
        }
    }, [delay]);
}

export function LocationMarker({ mapRef, setMessage, message }) {
    const [position, setPosition] = useState(null);
    const [zoom, setZoom] = useState(13);

    useEffect(() => {
        // Try to get the user's current location
        if ('geolocation' in navigator) {
            console.log("render");
            navigator.geolocation.getCurrentPosition((position) => {
                const { latitude, longitude } = position.coords;
                setPosition([latitude, longitude]);
                // Fly or pan the map to the user's current location
                if (mapRef.current) {
                    console.log(mapRef.current);
                    mapRef.current.flyTo([latitude, longitude], zoom);
                }
                setMessage({...message, text: `${latitude},${longitude}` })
                
                    
                
            });
        }
    }, []);

    const customIcon = L.icon({
        iconUrl: Logo,
        iconSize: [22, 22]
    });

    return (position !== null) ? (
        <Marker position={position} icon={customIcon}>
            <Popup>You are here</Popup>
        </Marker>
    ) : null;
}

function RiderLocationSend({username}) {
    const [isWebSocketConnected, setIsWebSocketConnected] = useState(false);
    const [lol, setLol] = useState(0);

    const mapRef = useRef();

    console.log("use", username);

    const [message, setMessage] = useState({
        receiverName: "hii",
        text: ""
    });

    const sendPrivateMessage = () => {
        socketClient.send('/app/private-message', {}, JSON.stringify(message));
    }

    const connectToSocket = () => {
        let socket = new SockJS("http://localhost:8081/ws");
        socketClient = over(socket);
        socketClient?.connect({}, () => {
            console.log("Connect to websocket")
            setIsWebSocketConnected(true);
        },
            (error) => {
                console.log(error);
            });
    }

    // Custom hook for using setInterval
    useInterval(() => {
        sendPrivateMessage();
        setLol(lol + 1);
        console.log(lol);
    }, isWebSocketConnected ? 4000 : null);

    useEffect(() => {
        connectToSocket();
    }, []);

    return (
        <>
            <h1>Sender</h1>
            <br />
            <input type="text" onChange={(e) => setMessage({ ...message, text: e.target?.value })} value={message?.text} />
            <MapContainer
                ref={mapRef}
                zoom={14} // Zoom level, you can adjust this value
                scrollWheelZoom={false}
                style={{ height: '400px', width: '100%' }}

                center={{ lat: 51.505, lng: -0.09 }}
            >
                <TileLayer
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                />
                <LocationMarker username={username} mapRef={mapRef} message={message} setMessage={setMessage} />
            </MapContainer>
        </>
    )
}

export default RiderLocationSend;
