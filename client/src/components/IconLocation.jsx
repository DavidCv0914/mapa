import Icon from "../assets/cacao.png";
import L from "leaflet";

export const IconLocation = L.icon({
    iconUrl:Icon,
    iconRetinaUrl:Icon,
    iconAnchor:null,
    shadowUrl:null,
    shadowSize:null,
    shadowAnchor:null,
    iconSize:[25,25],
    className:"leaflet-venue-icon"
})