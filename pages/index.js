import React, { useEffect } from "react";
import WeatherBox from "@components/WeatherBox/index";
import { getMyCurrentLocation } from "./../utuils/geolocation";
const Home = () => {
  const [lat, lon] = getMyCurrentLocation();

  return (
    <div>
      <WeatherBox />
      HomePage
    </div>
  );
};

export default Home;
