import { FaEnvelope, FaMapLocation, FaPhone } from "react-icons/fa6";
import Map from "../Map";
import { AdjustedSectionLayout } from "./Industries";
import "mapbox-gl/dist/mapbox-gl.css";
import ReactMapGL, { Marker } from "react-map-gl";


const Contact = () => {
  const Extra = () => {
    return (
      <div className=" grid gap-6 mt-6">
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
               style={{ height: "50vh", width: "90%" }}
             >
               {" "}
               <Marker longitude={6.412332} latitude={4.09474}></Marker>
             </ReactMapGL>
      </div>
    );
  };
  return (
    <div className="py-24">
      {" "}
      <AdjustedSectionLayout
        logo="/newLogo-removebg-preview.png"
        bg="#C8C8C9"
        textBg="text-black"
        textColor="text-black"
        btnStyle="bg-darkgray text-white"
        leftChildren={<Map />}
        textOne={"Get In"}
        textTwo={"touch"}
        extra={<Extra />}
        showButton={false} 
        sectionBg={""}        
      />
    </div>
  );
};

export default Contact;
