import React, { Component } from "react";
import "./App.css";
import locData from "./result.json";
import { Map, TileLayer, Marker, Tooltip } from "react-leaflet";
import MarkerClusterGroup from "react-leaflet-markercluster";

const position = [40.52, 34.34];

class App extends Component {
  getMarker() {
    return Object.keys(locData).map(key => {
      let lat = locData[key]["lat"];
      let lng = locData[key]["lng"];
      if (key != undefined && lat != undefined && lng != undefined) {
        console.log(key + " " + lat + " " + lng);
        return (
          <Marker position={[lat, lng]} riseOnHover="true">
            <Tooltip>
              <span>
                <strong>{key}</strong>
              </span>
              <br />
              <span>Confirmed: {locData[key]["Confirmed"]}</span>
              <br />
              <span>Recovered: {locData[key]["Recovered"]}</span>
              <br />
              <span>Deaths: {locData[key]["Deaths"]}</span>
              <br />
            </Tooltip>
          </Marker>
        );
      }
    });
  }

  render() {
    return (
      <Map className="markercluster-map" center={position} zoom={3} minZoom={2}>
        <TileLayer
          url="https://tiles.stadiamaps.com/tiles/alidade_smooth_dark/{z}/{x}/{y}{r}.png"
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        />
        <MarkerClusterGroup>{this.getMarker()};</MarkerClusterGroup>
        {/* {this.getMarker()} */}
      </Map>
    );
  }
}

export default App;
