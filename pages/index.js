import React from "react";
import WeatherBox from "@components/WeatherBox/index";
import { getMyCurrentLocation } from "./../utuils/geolocation";
const Home = () => {
  getMyCurrentLocation();
  return (
    <div>
      <WeatherBox />
      HomePage
    </div>
  );
};

export default Home;
