import React, { useCallback, useEffect } from "react";
import WeatherBox from "@components/WeatherBox/index";
import { useDispatch } from "react-redux";
import { getUserLocation } from "@redux/slices/locationSlice";
import useInput from "@hooks/useInput";

const Home = () => {
  const [cityname, onChnageCityname] = useInput("");
  const dispatch = useDispatch();

  const onClickGetCity = useCallback((e) => {
    e.preventDefault();
  }, []);
  useEffect(() => {
    dispatch(getUserLocation());
  }, []);
  return (
    <div>
      <WeatherBox />
      HomePage
      <form onSubmit={onClickGetCity}>
        <input value={cityname} onChange={onChnageCityname} />
        <button>dd</button>
      </form>
    </div>
  );
};

export default Home;
