import 'leaflet/dist/leaflet.css';
import React, { useEffect, useRef, useState } from 'react'
import { useParams } from "react-router-dom"
import SockJS from 'sockjs-client';
import { over } from 'stompjs';
import Logo from '../../../Pages/Images/marker img.png';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import L from 'leaflet';

import profileService from '../../CustomerService/profileService';

var socketClient = null;


function UserGetLocation() {
    const mapRef = useRef();
    const [zooms, setZooms] = useState(16);
    const customIcon = L.icon({
        iconUrl: Logo,
        iconSize: [22, 22]
    });
    const [username, setUsername] = useState("hii");

    const userId = localStorage.getItem("customerId");

    async function getUsername(){
        const response = await profileService(userId);
        setUsername(response.username);
    }
    getUsername();


    const [position, setPosition] = useState([0, 0]);


    const subscribePrivateMessage = () => {

        socketClient.subscribe('/user/' + username + '/message', function (msg) {

            if (msg.body) {
                var jsonBody = JSON.parse(msg.body);
                const { latitude, longitude } = parseCoordinates(jsonBody.text);

                setPosition([latitude, longitude]);
                if (mapRef.current) {
                    console.log(mapRef.current);
                    mapRef.current.flyTo([latitude, longitude], zooms);
                }
            }
        })
    }

    const connectToSocket = () => {
        let socket = new SockJS("http://localhost:8081/ws");
        socketClient = over(socket);
        socketClient?.connect({}, () => {
            console.log("Connected to websocket");
            subscribePrivateMessage();
        },
            (error) => {
                console.log(error);
            });
    }

    const parseCoordinates = (text) => {
        const [latitude, longitude] = text.split(',').map(parseFloat);
        return { latitude, longitude };
    }

    useEffect(() => {
        connectToSocket();
    }, [])

    return (
        <>
            <div className='ml-5 mt-2 flex flex-col items-center h-full overflow-y-auto w-[550px]'>

                <MapContainer ref={mapRef} center={position} zoom={13} style={{ height: '400px', width: '100%' }}>
                    <TileLayer
                        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    />
                    <Marker position={position} icon={customIcon}>

                        <Popup>
                            Current Location
                        </Popup>
                    </Marker>
                </MapContainer>

            </div>
        </>
    )
}

export default UserGetLocation;
