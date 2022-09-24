import React, { useState } from "react";
import { GoogleMap, LoadScript, Polygon } from "@react-google-maps/api";
import data from "./Data.json";
const containerStyle = {
  width: "80%",
  height: "70vh",
};

const GOOGLE_API_KEY = "AIzaSyBMEmqFsiguwAJ8kkXYvqN16jNofxcyvu8";
function MyComponent() {
  const [map, setMap] = React.useState(null);
  const onLoad = React.useCallback(function callback(map) {
    setMap(map);
  }, []);

  const onUnmount = React.useCallback(function callback(map) {
    setMap(null);
  }, []);

  const [latlng, setLat] = useState();
  const center = {
    lat: latlng ? latlng.lat : 25.2858687,
    lng: latlng ? latlng.lng : 55.3281742,
  };

  //Array of  objects
  console.time();
  const flattened4 = data.features.flatMap((area) => {
    let d = area.properties.DistrictName;
    let zone = area.geometry.coordinates.map((zone) => {
      return zone.map(([lng, lat]) => ({ lat, lng }));
    });
    return { d, zone };
  });
  console.timeEnd();

  const onClick = (e, arry) => {
    const lat = e.latLng.lat();
    const lng = e.latLng.lng();
    let flag = false;
    let distrcict = "";
    for (let index = 0; index < arry.length; index++) {
      const polygon2 = new window.google.maps.Polygon({
        paths: arry[index].zone,
      });

      flag = window.google.maps.geometry.poly.containsLocation(
        new window.google.maps.LatLng(lat, lng),
        polygon2
      );
      if (flag) {
        distrcict = arry[index].d;
        break;
      }
    }
    if (flag) {
      console.log("go ahead how can we help you", distrcict);
    } else {
      console.log("Sorry we do not offer our service yet");
    }
  };

  return (
    <React.Fragment>
      <LoadScript
        id="script-loader"
        googleMapsApiKey={GOOGLE_API_KEY}
        language="en"
        region="us"
        libraries={["drawing", "visualization", "geometry", "places"]}
      >
        <GoogleMap
          mapContainerClassName="App-map"
          zoom={12}
          version="weekly"
          on
          mapContainerStyle={containerStyle}
          center={center}
          onLoad={onLoad}
          onUnmount={onUnmount}
          onClick={(e) => onClick(e, flattened4)}
        >
          {flattened4.map(({ zone }, id) => {
            return (
              <Polygon
                key={id}
                paths={zone}
                options={{
                  fillColor: "transparent",
                  fillOpacity: 1,
                  strokeColor: "red",
                  strokeOpacity: 1,
                  strokeWeight: 2,
                  clickable: false,
                  draggable: false,
                  editable: false,
                  geodesic: false,
                  zIndex: 1,
                }}
              />
            );
          })}
        </GoogleMap>
      </LoadScript>
    </React.Fragment>
  );
}

export default React.memo(MyComponent);
