import React, { useState } from "react";
import { MapContainer, TileLayer } from "react-leaflet";
import HeatmapLayer from "react-leaflet-heatmap-layer";
import { geojson } from "./util/atd";

const Map = () => {
  const [position] = useState([12.9716, 77.5946]);
  const [zoom] = useState(12);

  return (
    <MapContainer center={position} zoom={zoom}>
      <HeatmapLayer
        points={geojson.features}
        longitudeExtractor={(m) => m.geometry.coordinates[0]}
        latitudeExtractor={(m) => m.geometry.coordinates[1]}
        intensityExtractor={(m) => parseFloat(m.geometry.coordinates[1])}
        max={100}
        minOpacity={0.4}
      />

      <TileLayer
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.osm.org/{z}/{x}/{y}.png"
      />
    </MapContainer>
  );
};

export default Map;
