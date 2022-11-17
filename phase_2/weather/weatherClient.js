const got = require("got");
const apiKey = require("./apiKey");

class WeatherClient {
  constructor() {}

  fetchWeatherData(city, callback) {
    got(
      `http://api.openweathermap.org/data/2.5/weather?units=metric&q=${city}&appid=${apiKey}`
    ).then((response) => {
      callback(JSON.parse(response.body));
    });
  }
}

module.exports = WeatherClient;
/*
const client = new WeatherClient();

client.fetchWeatherData("London", (weatherData) => {
  console.log(weatherData);
});
*/
