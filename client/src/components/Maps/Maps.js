import React, {Component} from 'react';
import {render} from 'react-dom';
import MapGL, {Marker, Popup, NavigationControl} from 'react-map-gl';
import ControlPanel from './control-panel';
import PubPin from './pub-pin';
import PubInfo from './pub-info';

const navStyle = {
  position: 'absolute',
  top: 0,
  left: 0,
  padding: '10px'
};

export default class PubsMap extends Component {

  constructor(props) {
    super(props);
    this.state = {
      viewport: {
        latitude: 41.8781,
        longitude: -87.6298,
        zoom: 10,
        bearing: 0,
        pitch: 0,
        width: 500,
        height: 500,
      },
      popupInfo: null,
      markers: props.markers
    };

    if (props.markers.length) {
        this.state.viewport.latitude=props.markers[0].latitude
        this.state.viewport.longitude=props.markers[0].longitude
    }
  }

  componentDidMount() {
    window.addEventListener('resize', this._resize);
    this._resize();
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this._resize);
  }

  _resize = () => {
    this.setState({
      viewport: {
        ...this.state.viewport,
        width: this.props.width || window.innerWidth,
        height: this.props.height || window.innerHeight
      }
    });
  };

  _updateViewport = (viewport) => {
    this.setState({viewport});
  }

  _renderPubMarker = (pub, index) => {
    return (
      <Marker key={`marker-${index}`}
        longitude={pub.latitude}
        latitude={pub.longitude} >
        <PubPin size={20} onClick={() => this.setState({popupInfo: pub})} />
      </Marker>
    );
  }

  _renderPopup() {
    const {popupInfo} = this.state;

    return popupInfo && (
      <Popup tipSize={5}
        anchor="top"
        longitude={popupInfo.longitude}
        latitude={popupInfo.latitude}
        onClose={() => this.setState({popupInfo: null})} >
        <PubInfo info={popupInfo} />
      </Popup>
    );
  }

  render() {

    const {viewport} = this.state;

    return (
      <MapGL
        {...viewport}
        mapStyle="mapbox://styles/mapbox/light-v9"
        onViewportChange={this._updateViewport}
        mapboxApiAccessToken={process.env.APIKEY_MB} >

        { this.state.markers.map(this._renderPubMarker) }

        {this._renderPopup()}

        <div className="nav" style={navStyle}>
          <NavigationControl onViewportChange={this._updateViewport} />
        </div>

        {/* <ControlPanel containerComponent={this.props.containerComponent} /> */}

      </MapGL>
    );
  }

}