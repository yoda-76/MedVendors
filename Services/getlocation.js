const options = {
  enableHighAccuracy: true,
  timeout: 5000,
  maximumAge: 0,
};
export default function getLocation() {
  return new Promise((resolve, reject) => {
    if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition(
        function (position) {
          const latitude = position.coords.latitude;
          const longitude = position.coords.longitude;
          resolve({ Latitude: latitude, Longitude: longitude });
        },
        function (error) {
          reject({ error: error });
        },
        options
      );
    } else {
      reject({ error: "Geolocation is not supported" });
    }
  });
}
