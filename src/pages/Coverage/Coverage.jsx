import 'leaflet/dist/leaflet.css';
import { MapContainer, TileLayer, Marker, Popup, useMap } from "react-leaflet";
import L from "leaflet";
import { useLoaderData } from 'react-router';

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

// 👉 Map auto focus component (VERY SMALL)
const FlyToLocation = ({ position }) => {
  const map = useMap();

  if (position) {
    map.flyTo(position, 9, {duration: 1.5});
  }

  return null;
};


const Coverage = () => {

      const coverageData = useLoaderData();

      const handleSearch =e =>{
            e.preventDefault();
            const searchText = e.target.search.value;
            console.log(searchText)
      }


      return (
             <section className="px-4 py-10">
      
      {/* Title */}
      <h2 className="text-3xl font-bold mb-4">
        We are available in <span className="text-primary">64 districts</span>
      </h2>

      {/* Search (UI only) */}
      <form onSubmit={handleSearch}>
            <div className="flex gap-2 mb-6 max-w-md">
        <input
          type="text"
          name='search'
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
          zoom={7}
          className="h-full w-full"
        >
          <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />

          {/* Markers */}
          {coverageData.map((item, index) => (
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