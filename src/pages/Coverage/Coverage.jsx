import 'leaflet/dist/leaflet.css';
import { MapContainer, TileLayer, Marker, Popup, useMap } from "react-leaflet";
import L from "leaflet";
import { useLoaderData } from 'react-router';
import { useState } from 'react';

// Fix marker icon issue
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl:
    "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png",
  iconUrl:
    "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png",
  shadowUrl:
    "https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png",
});

// 👉 SMALL helper to move map
const FlyTo = ({ position }) => {
  const map = useMap();
  if (position) {
    map.flyTo(position, 9);
  }
  return null;
};


const Coverage = () => {
      
      const data = useLoaderData();
      const [search, setSearch] = useState("");

    // 🔍 Filter from LOADER DATA
  const filteredData = data.filter((item) => {
    const text = search.toLowerCase();

    return (
      item.district.toLowerCase().includes(text) ||
      item.region.toLowerCase().includes(text) ||
      item.covered_area.some((area) =>
        area.toLowerCase().includes(text)
      )
    );
  });

   // 📍 Map focus location
  const focusPosition =
    filteredData.length > 0
      ? [filteredData[0].latitude, filteredData[0].longitude]
      : null;

      return (
             <section className="px-4 py-10">
      
      {/* Title */}
      <h2 className="text-3xl font-bold mb-4">
        We are available in <span className="text-primary">64 districts</span>
      </h2>

      {/* Search (UI only) */}
      <form>
            <div className="flex gap-2 mb-6 max-w-md">
        <input
          type="text"
           value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Search here"
          className="input input-bordered w-full"
        />
        <button type='submit' className="btn btn-primary text-black">Search</button>
      </div>
      </form>

      <p className="font-semibold mb-4">
        We deliver almost all over Bangladesh
      </p>

      {/* Map */}
      <div className="h-112.5 w-full rounded-xl overflow-hidden border">
        <MapContainer
          center={[23.685, 90.3563]} // Bangladesh center
          zoom={8}
          className="h-full w-full"
        >
          <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
           {/* 👉 focus map */}
          <FlyTo position={focusPosition} />


          {/* Markers */}
          {filteredData.map((item, index) => (
            <Marker
              key={index}
              position={[item.latitude, item.longitude]}
            >
              <Popup>
                <h3 className="font-bold">{item.district}</h3>
                <p>Region: {item.region}</p>
                <p className="mt-1">
                  Areas:
                  <br />
                  {item.covered_area.join(", ")}
                </p>
              </Popup>
            </Marker>
          ))}
        </MapContainer>
      </div>
    </section>
      );
};

export default Coverage;