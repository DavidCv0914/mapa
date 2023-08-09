import { Marker } from "react-leaflet";
import { IconLocation } from "./IconLocation";
import { useEffect, useState } from "react";
import { getDepList } from "../api/api";

export const Markers = () => {
  const [places, setPlaces] = useState([]);

  // useEffect(() => {
  //   setPlaces([
  //     { nombre :"Quindio, Armenia",geometry: [4.5365948, -75.6696407] },
  //     { nombre :"Risaralda,Pereira",geometry: [4.8047733, -75.7549617] },
  //     { nombre :"Caldas,Manizales",geometry: [5.0686923, -75.5660464] },
  //     { nombre :"Amazonas,Leticia",geometry: [-3.146221, -69.9772423] },
  //     { nombre :"Antioquia,Medellin",geometry: [6.2443677, -75.6636143] },
  //     { nombre :"Arauca,Arauca",geometry: [7.0762553,-70.7798691] },
  //     { nombre :"Atlantico,Barranquilla",geometry: [10.9839694,-74.9004203] },
  //     { nombre :"Cundinamarca,Bogotá",geometry: [4.6486206,-74.2726235] },
  //     { nombre :"Bolivar,Cartagena",geometry: [10.391746, -75.499261] },
  //     { nombre :"Boyaca,tunja",geometry: [5.540830, -73.355899] },
  //     { nombre :"Caqueta,Florencia",geometry: [1.615952, -75.611567] },
  //     { nombre :"Casanare,Yopal",geometry: [5.335017, -72.396495] },
  //     { nombre :"Cauca,Popayan",geometry: [2.456870, -76.604227] },
  //     { nombre :"Cesar,Valledupar",geometry: [10.466867, -73.252243] },
  //     { nombre :"Choco,Quibdo",geometry: [5.692046, -76.653705] },
  //     { nombre :"Cordoba,Monteria",geometry: [8.755456, -75.878710] },
  //     { nombre :"Guania,Inirida",geometry: [3.868340, -67.922887] },
  //     { nombre :"Guaviare,San jose del Guaviare",geometry: [2.569864, -72.638958] },
  //     { nombre :"Huila,Neiva",geometry: [2.937962, -75.279428] },
  //     { nombre :"La guajira,Riohacha",geometry: [11.537384, -72.912940] },
  //     { nombre :"Magdalena,Santa Marta",geometry: [11.237079, -74.197161] },
  //     { nombre :"Meta,Villavicencio",geometry: [4.134616, -73.623398] },
  //     { nombre :"Nariño,Pasto",geometry: [1.211294, -77.278597] },
  //     { nombre :"Norte de Santander,Cucuta",geometry: [7.903487, -72.510430] },
  //     { nombre :"Putumayo,Mocoa",geometry: [1.151311, -76.648480] },
  //     { nombre :"San Andres",geometry: [12.566471, -81.716484] },
  //     { nombre :"Santander,Bucaramanga",geometry: [7.118864, -73.135554] },
  //     { nombre :"Sucre,Sincelejo",geometry: [9.301506, -75.398092] },
  //     { nombre :"Tolima,Ibague",geometry: [4.435561, -75.203262] },
  //     { nombre :"Valle del Cauca, Cali",geometry: [3.408074, -76.527746] },
  //     { nombre :"Vaupes,Mitu",geometry: [1.254233, -70.232588] },
  //     { nombre :"Vichada,Puerto Carreño",geometry: [6.184254, -67.488377] }
  //   ]);
  // }, []);

  useEffect(()=>{
    const loadDep = async ()=>{
      const rep = await getDepList();
      setPlaces(rep.data);
    }
    loadDep();
  },[])

  console.log(places);
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
