import { MapContainer,TileLayer } from "react-leaflet";
import { useState } from "react";
import { Markers } from "./Markers";
import Form from "react-bootstrap/Form";
import "leaflet/dist/leaflet.css"

export const Map = () => {

    const [typeSearch, setTypeSearch] = useState("dep");

    return(
        <>
        {["radio"].map((type) => (
                <div key={`inline-${type}`} className="mb-3">
                     <Form.Check
                    inline
                    label="Departamentos"
                    checked={typeSearch == "dep"}
                    onChange={(e) => setTypeSearch(e.target.value)}
                    value="dep"
                    name="group1"
                    type={type}
                    id={`inline-${type}-2`}
                  />
                  <Form.Check
                    inline
                    label="Municipios"
                    checked={typeSearch == "mun"}
                    onChange={(e) => setTypeSearch(e.target.value)}
                    value="mun"
                    name="group1"
                    type={type}
                    id={`inline-${type}-1`}
                  />
                </div>
              ))}
        <MapContainer center={{lat:"4.570868",lng:"-74.297333"}} zoom={6}>
            <TileLayer url="https://tile.openstreetmap.org/{z}/{x}/{y}.png" attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributor' />
            <Markers type = {typeSearch} />
        </MapContainer>
        </>
    )
};