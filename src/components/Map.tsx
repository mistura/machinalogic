import React from "react";
import Map from "react-map-gl";

type Props = {};

const MapComponent = (props: Props) => {
  return (
    <Map
      initialViewState={{
        longitude: -100,
        latitude: 40,
        zoom: 3.5,
      }}
      mapStyle="mapbox://styles/mapbox/streets-v9"
    />
  );
};

export default MapComponent;
