import React from 'react';
import { GoogleApiWrapper, InfoWindow, Map, Marker } from 'google-maps-react';

class GoogleMapsContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showingInfoWindow: false,
      activeMarker: {},
      selectedPlace: {}
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
  render() {
    const style = {
      width: '50vw',
      height: '75vh',
      'marginLeft': 'auto',
      'marginRight': 'auto'
    }
    return (
      <Map
        item
        xs = { 12 }
        style = { style }
        google = { this.props.google }
        onClick = { this.onMapClick }
        zoom = { 12 }
        initialCenter = {{ lat: 41.8781, lng: -87.6298 }}
      >
        <Marker
          onClick = { this.onMarkerClick }
          title = { "Timothy O' Tooles" }
          position = {{ lat: 41.8933, lng: -87.6205 }}
          name = { "Timothy O' Tooles" }
        />
        <InfoWindow
          marker = { this.state.activeMarker }
          visible = { this.state.showingInfoWindow }
        >
          <div>
              Timothy O'Toole's <br />
              622 N Fairbanks Ct, Chicago, IL 60611 <br />
              (312) 642-0700
          </div>
        </InfoWindow>
      </Map>
    );
  }
}
export default GoogleApiWrapper({
    api: (process.env.AIzaSyCknAKZwXlq4aYDzhOtqK3EDK2nDk5e7Uw)
})(GoogleMapsContainer)
