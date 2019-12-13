import React, { Component } from 'react';
import mapboxgl from 'mapbox-gl';
import Container from '@material-ui/core/Container';

mapboxgl.accessToken = 'pk.eyJ1IjoiaGFmZmVkYWxpIiwiYSI6ImNrNDIxeGlsNTA3a2ozcG9leWhkb3JtYjAifQ.w0tZyJr3syy3zTK8yh3bnA';

class MapBox extends React.Component {
  constructor(props) {
  super(props);
    this.state = {
      lng: 5,
      lat: 34,
      zoom: 2
    };
  }

  componentDidMount() {
    const map = new mapboxgl.Map({
      container: this.mapContainer,
      style: 'mapbox://styles/mapbox/streets-v11',
      center: [this.state.lng, this.state.lat],
      zoom: this.state.zoom
    });

    map.on('move', () => {
      this.setState({
        lng: map.getCenter().lng.toFixed(4),
        lat: map.getCenter().lat.toFixed(4),
        zoom: map.getZoom().toFixed(2)
      });
    });
  }

  render() {
    return (
      <Container>
        <div className='sidebarStyle'>
          <div>Longitude: {this.state.lng} | Latitude: {this.state.lat} | Zoom: {this.state.zoom}</div>
        </div>
        <div ref={el => this.mapContainer = el} className='mapContainer' />
      </Container>
    )
  }
}

export default MapBox;