import React from "react";
import { GoogleMap } from "@react-google-maps/api";
import { useLoadScript } from "@react-google-maps/api";
import "./mapstyle.css";
const mapContainerStyle = {
  width: "100vw",
  height: "90vh",
  marginBottom: "4rem",
};
const center = {
  lat: 31.968599,
  lng: -99.90181,
};

export default function GoogleMaps() {
  const { isLoaded, loadError } = useLoadScript({
    // Uncomment the line below and add your API key
    // googleMapsApiKey: '<Your API Key>',
  });

  if (loadError) return "Error loading Maps";
  if (!isLoaded) return "Loading Maps";

  return (
<section className="map-area" >
          <div id="contact-map" className="contact-map" style={{height:"400px"}}>
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d20115144.745636933!2d67.96191999995226!3d17.84756324662299!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae1670c9b44e6d%3A0xf8dfc3e8517e4fe0!2sBengaluru%2C%20Karnataka!5e0!3m2!1sen!2sin!4v1688996925486!5m2!1sen!2sin" 
          width="100%" 
          height="100%" 
           
          allowfullscreen="" 
          loading="lazy" 
          referrerpolicy="no-referrer-when-downgrade">
          </iframe>
          </div>
        </section>  );
}
