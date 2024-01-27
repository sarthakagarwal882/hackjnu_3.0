import { useEffect, useState } from "react";
import axios from "axios";
import "leaflet/dist/leaflet.css";

const CheckPoverty = () => {
  const [cordinates, setCordinates] = useState({
    latitude: 0.0,
    longitude: 0.0,
  });
  const [location, setLocation] = useState({
    area: "",
    city: "",
    state: "",
    country: "",
  });
  const position = [51.505, -0.09];
  const [mapImage, setMapImage] = useState(null);
  const handleCordinatesInputChange = (e) => {
    const { name, value } = e.target;
    setCordinates((prevValue) => ({ ...prevValue, [name]: value }));
  };
  const handleLocationInputChange = (e) => {
    const { name, value } = e.target;
    setLocation((prevValue) => ({ ...prevValue, [name]: value }));
  };

  const getMap = async () => {
    if (location.latitude !== 0 && location.longitude !== 0) {
      axios
        .get(
          `https://dev.virtualearth.net/REST/v1/Imagery/Map/Aerial/${cordinates.latitude},${cordinates.longitude}/13?mapSize=400,400&pushpin=47.610,-122.107;5;P10&mapLayer=Basemap,Buildings&format=jpeg&key=AoLKLaCs85b94vfiRDbJLdEZ4w8mxzXAP7kADmnYyyKVi_NPXvAl_v3xkYlzg00z`,
          { responseType: "arraybuffer" }
        )
        .then((response) => {
          const blob = new Blob([response.data], {
            type: "application/octet-stream",
          });
          const blobUrl = URL.createObjectURL(blob);
          console.log(blobUrl);
          setMapImage(blobUrl);
        })
        .catch((error) => {
          console.error("Error fetching data: ", error);
        });
    }
    if (
      location.area !== "" ||
      location.city !== "" ||
      location.state !== "" ||
      location.country !== ""
    ) {
      axios
        .get(
          `https://dev.virtualearth.net/REST/v1/Imagery/Map/Aerial/${
            location.area !== "" ? location.area : ""
          }${location.city !== "" ? "," + location.city : ""}${
            location.state ? "," + location.state : ""
          }${
            location.country ? "," + location.country : ""
          }/?mapSize=400,400&mapLayer=Basemap,Buildings&format=jpeg&key=AoLKLaCs85b94vfiRDbJLdEZ4w8mxzXAP7kADmnYyyKVi_NPXvAl_v3xkYlzg00z`,
          { responseType: "arraybuffer" }
        )
        .then((response) => {
          const blob = new Blob([response.data], {
            type: "application/octet-stream",
          });
          const blobUrl = URL.createObjectURL(blob);
          console.log(blobUrl);
          setMapImage(blobUrl);
        })
        .catch((error) => {
          console.error("Error fetching data: ", error);
        });
    }
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    getMap();
  };

  return (
    <div>
      <div>
        <h1>Check Poverty Index of an area</h1>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="latitude"
            placeholder="Enter the latitude"
            value={cordinates.latitude}
            onChange={handleCordinatesInputChange}
          />
          <input
            type="text"
            name="longitude"
            placeholder="Enter the longitude"
            value={cordinates.longitude}
            onChange={handleCordinatesInputChange}
          />
          <button type="submit">Submit</button>
        </form>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="area"
            placeholder="Enter the area"
            value={location.area}
            onChange={handleLocationInputChange}
          />
          <input
            type="text"
            name="city"
            placeholder="city"
            value={location.city}
            onChange={handleLocationInputChange}
          />
          <input
            type="text"
            name="state"
            placeholder="state"
            value={location.state}
            onChange={handleLocationInputChange}
          />
          <input
            type="text"
            name="country"
            placeholder="country"
            value={location.country}
            onChange={handleLocationInputChange}
          />
          <button type="submit">Submit</button>
        </form>

        {mapImage && <img src={mapImage} alt="" />}
      </div>
      {/* <div>
        <MapContainer
          center={[27.112111, 78.001468]}
          zoom={18}
          style={{ height: "400px", width: "600px" }}
        >
          <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          />
          <Marker position={[51.505, -0.09]}>
            <Popup>
              A pretty CSS3 popup. <br /> Easily customizable.
            </Popup>
          </Marker>
        </MapContainer>
      </div> */}
    </div>
  );
};
export default CheckPoverty;
