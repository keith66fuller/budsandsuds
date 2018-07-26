import React from 'react';
import { GoogleApiWrapper, InfoWindow, Map, Marker } from 'google-maps-react';

class GoogleMapsContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showingInfoWindow: false,
      activeMarker: {},
      selectedPlace: {},
    }
    // binding this to event-handler functions
    this.onMarkerClick = this.onMarkerClick.bind(this);
    this.onMapClick = this.onMapClick.bind(this);
  }
  onMarkerClick = (props, marker, e) => {
    this.setState({
      selectedPlace: props,
      activeMarker: marker,
      showingInfoWindow: true
    });
  }
  onMapClick = (props) => {
    if (this.state.showingInfoWindow) {
      this.setState({
        showingInfoWindow: false,
        activeMarker: null
      });
    }
  }

  doMarkers = (markers) =>  {
    return markers.forEach(marker => {
    if (marker)  {console.log(`MARKER 51: ${JSON.stringify(marker,null,2)}`)}
      return (
        <Marker
          onClick = { this.onMarkerClick }
          title = { marker.name }
          position = {{ lat: marker.coordinates.latitude, lng: marker.coordinates.longitude }}
          name = { marker.name }
        />
      )
    })
  }

  render() {
    const style = {
      width: '100%',
      height: '80%',
      'marginLeft': 'auto',
      'marginRight': 'auto'
    }

    const myMarkers = this.doMarkers(this.props.markers);

    return (
      <Map
        item
        xs = { 6 }
        style = { style }
        google = { this.props.google }
        onClick = { this.onMapClick }
        zoom = { 12 }
        initialCenter = {{ lat: 41.8781, lng: -87.6298 }}
        markers = {this.props.markers}
        myMarkers =  {this.doMarkers(this.props.markers)}
      >
      {myMarkers}
      </Map>
    );
  }
}
export default GoogleApiWrapper({
    apiKey: ("AIzaSyA4alij427ghn6P9zkGfkygvoKWwatWpu4"),
})(GoogleMapsContainer)
