import { MapContainer,TileLayer } from "react-leaflet";
import "leaflet/dist/leaflet.css"

export const Map = () => {
    return(
        <>
        <MapContainer center={{lat:"4.570868",lng:"-74.297333"}} zoom={6}>
            <TileLayer url="https://tile.openstreetmap.org/{z}/{x}/{y}.png" attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributor' />
        </MapContainer>
        </>
    )
};