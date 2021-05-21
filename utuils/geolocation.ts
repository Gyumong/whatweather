import { useState } from "react";

export function getMyCurrentLocation(): any {
  const [lat, setLat] = useState(0);
  const [lon, setLon] = useState(0);
  if (typeof window !== "undefined" && navigator.geolocation) {
    // GeoLocation을 이용해서 접속 위치를 얻어옵니다
    navigator.geolocation.getCurrentPosition(function (position) {
      setLat(position.coords.latitude); // 위도
      setLon(position.coords.longitude); // 경도
    });
  } else {
    console.log("error");
  }
  return [lat, lon];
}
