import "mapbox-gl/dist/mapbox-gl.css";
import ReactMapGL, { Marker } from "react-map-gl";

function MapComponent() {
  return (
    <div className="">
      <ReactMapGL
        // mapLib={import("mapbox-gl")}
        initialViewState={{
          longitude: 6.412332,
          latitude: 4.09474,
          zoom: 5,
        }}
        latitude={9.007906}
        longitude={7.437959}
        mapStyle="mapbox://styles/mapbox/light-v9"
        mapboxAccessToken="pk.eyJ1IjoiYXllb2xha2VubnkiLCJhIjoiY2xyZzgycmR3MGJsNzJrcnY1d2hodXJhayJ9.xnOkZfILRcgpSeJDjkg91w"
        style={{ height: "100vh", width: "100%" }}
      >
        {" "}
        <Marker longitude={6.412332} latitude={4.09474}></Marker>
      </ReactMapGL>
    </div>
  );
}

export default MapComponent;
