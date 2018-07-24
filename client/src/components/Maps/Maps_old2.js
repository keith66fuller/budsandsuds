import React, { Component } from 'react';
import { Map, TileLayer, Marker, Popup }  from 'react-leaflet';



export default class PubMap extends Component {

    render() {
        const points = this.props.markers.map((marker,idx) => {
            return {
                type: "Feature",
                geometry: {
                    type: "Point",
                    coordinates: [marker.coordinates.latitude,marker.coordinates.longitude],
                },
                properties: {
                    name: marker.name
                }
            }
        })

        const center = {
            lat: 41.8781,
            lng: -87.6298
        }

        const test = () => {
            console.log(`POINTS: ${JSON.stringify(points,null,2)}`)
        }

        return (
            
            <Map
                apikey="AIzaSyA4alij427ghn6P9zkGfkygvoKWwatWpu4"
                center={center}
                zoom={12}
                // points={points}
            />
        )
    }
}
