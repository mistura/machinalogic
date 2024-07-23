import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";

type Props = {};

const MapComponent = (props: Props) => {
  return (
    <div className="">
      <MapContainer center={[51.505, -0.09]} zoom={13} scrollWheelZoom={true}>
        <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
        <Marker position={[51.505, -0.09]}></Marker>
      </MapContainer>
    </div>
  );
};

export default MapComponent;
