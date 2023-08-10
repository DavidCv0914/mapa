import { Marker } from "react-leaflet";
import { IconLocation } from "./IconLocation";
import { useEffect, useState } from "react";
import { getDepList, getMunList } from "../api/api";

export const Markers = (props) => {
  const [places, setPlaces] = useState([]);

  useEffect(()=>{
    if (props.type == "dep") {
      const loadDep = async ()=>{
      const rep = await getDepList();
      setPlaces(rep.data);
      }
      loadDep();
    }
    if (props.type == "mun") {
      const loadMun = async ()=>{
        const rep = await getMunList();
        setPlaces(rep.data);
        }
        loadMun();
    }
    
  },[props.type])

  
  return (
    <>
      {places.length > 0 ? places.map((i) => (
        <Marker
          key={i.iddepartamento}
          position={{ lat: i.lat, lng: i.lng}}
          icon={IconLocation}
        />
      )) : null}
    </>
    // <Marker position={{lat:"4.570868",lng:"-74.297333"}} icon={IconLocation} />
  );
};
