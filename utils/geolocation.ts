let userLocation: any[] = [];

const options = {
  enableHighAccuracy: true,
  timeout: 5000,
  maximumAge: 0,
};

const geolocation = async () => {
  const geoSuccess = (position: { coords: { latitude: any; longitude: any } }) => {
    userLocation = [position.coords.latitude, position.coords.longitude];
    console.log(userLocation);
    return userLocation;
  };

  const geoError = (error: { message: any }) => {
    console.error(error.message);
    return error.message;
  };

  if (navigator.geolocation) {
    console.log("geolocation supported");
    return navigator.geolocation.getCurrentPosition(geoSuccess, geoError, options);
  } else {
    console.log("geolocation not supported");
    console.log(userLocation);
  }
};

export default geolocation;
