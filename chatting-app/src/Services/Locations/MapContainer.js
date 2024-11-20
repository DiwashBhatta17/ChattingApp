import 'leaflet/dist/leaflet.css';
import React, { useEffect, useState, useRef } from 'react';
import { useParams } from 'react-router-dom';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet-routing-machine';
import mark1 from "../../Pages/Images/marker img.png";

function ReceiverFile(props) {

  

  const customIcon = L.icon({
    iconUrl: "https://webstockreview.net/images/clipart-circle-purple-16.png", // Replace with the URL to your custom user location icon
    iconSize: [25, 25], // Adjust the icon size as needed
  });

  const destinationIcon = L.icon({
    iconUrl: mark1, // Replace with the URL to your custom destination icon
    iconSize: [45, 25], // Adjust the icon size as needed
  });

  const coordinatesString = props.address;

  // Split the coordinates string into latitude and longitude parts
  const [latitude, longitude] = coordinatesString.split(',');
  
  // Convert the latitude and longitude strings to numbers
  const DESTINATION_LATITUDE = parseFloat(latitude);
  const DESTINATION_LONGITUDE = parseFloat(longitude);
  
  console.log(DESTINATION_LATITUDE); // 27.685777823577666
  console.log(DESTINATION_LONGITUDE); 
  const [position, setPosition] = useState(null);
  const mapRef = useRef(null); // Create a ref to store the map instance

  const parseCoordinates = (text) => {
    const [latitude, longitude] = text.split(',').map(parseFloat);
    return { latitude, longitude };
  };

  useEffect(() => {
    if (!mapRef.current) {
      // Create a map instance only if it doesn't already exist
      const map = L.map('map').setView([27.7172, 85.3240], 13); // Set view to Kathmandu, Nepal

      // Add a tile layer
      L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution:
          '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
      }).addTo(map);

      // Add a marker for the destination
      L.marker([DESTINATION_LATITUDE, DESTINATION_LONGITUDE], { icon: destinationIcon })
        .addTo(map)
        .bindPopup('Destination Location');

      // Store the map instance in the ref
      mapRef.current = map;
    }

    // Get the user's live location using the browser's geolocation API
    navigator.geolocation.getCurrentPosition(
      (position) => {
        const { latitude, longitude } = position.coords;
        setPosition([latitude, longitude]);

        // Add a marker for the user's live location
        L.marker([latitude, longitude], { icon: customIcon })
          .addTo(mapRef.current) // Use the map instance stored in the ref
          .bindPopup('Your Location');

        // Create a routing control to show the route from the user's location to the destination
        L.Routing.control({
          waypoints: [
            L.latLng(latitude, longitude), // User's location
            L.latLng(DESTINATION_LATITUDE, DESTINATION_LONGITUDE), // Destination location
          ],
        }).addTo(mapRef.current); // Use the map instance stored in the ref
      },
      (error) => {
        console.error('Error getting user location:', error);
      }
    );
  }, []);

  return (
    <div>
      <div id="map" style={{ height: '400px', width: '100%' }}></div>
    </div>
  );
}

export default ReceiverFile;
