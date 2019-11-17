import React, { useState, useEffect } from 'react';
import GoogleMapReact from 'google-map-react';
import Marker from './Marker';
import axios from 'axios';

interface IMarker {
    key: number;
    lat: number;
    lng: number;
    name: string;
    color: string;
    canAddNote: boolean;
}

const MapComponent = (props: any) => {
    const [center, setCenter] = useState({ lat: -33.8688, lng: 151.2093 });
    const [zoom, setZoom] = useState();
    const [markers, setMarkers] = useState();
    const markersArray: IMarker[] = [];    
   
    const currentLocation = () => {
        navigator.geolocation.getCurrentPosition(position => {
            setCenter({ lat: position.coords.latitude, lng: position.coords.longitude });
        });
    }    

    useEffect(() => {
        currentLocation();        
        
        axios.get("http://localhost:5000/api/marker").then(response => {                        
            response.data.map(d => {
                markersArray.push(
                    {
                        key: d.id,
                        lat: d.latitude,
                        lng: d.longitude,
                        name: d.name,
                        color: (d.latitude === center.lat && d.longitude === center.lng) ? "orange" : "red",
                        canAddNote: (d.latitude === center.lat && d.longitude === center.lng) ? true : false
                    }
                ); 
            });
        });

        setMarkers(markersArray);
        setZoom(12);
    }, []);

    return (
        <div style={{ height: '100vh', width: '100%' }}>
            <GoogleMapReact
                bootstrapURLKeys={{ key: 'AIzaSyBnOC2cYnLyaaYXtnd_IEQWZLkqvg0tqoE' }}
                defaultCenter={center}
                defaultZoom={zoom}
            >
                {markers && markers.map((marker: IMarker) => (

                    <Marker
                        key={marker.key}
                        lat={marker.lat}
                        lng={marker.lng}
                        name={marker.name}
                        color={marker.color}
                        canAddNote={marker.canAddNote}
                    />

                )
                )}
            </GoogleMapReact>
        </div>
    );
}

export default MapComponent;