const WeatherClient = require("./weatherClient");

class Weather {
  constructor(client) {
    this.client = client;
    this.result;
  }

  fetch(city) {
    this.client.fetchWeatherData(city, (response) => {
      this.result = response;
    });
  }

  getWeatherData() {
    return this.result;
  }

  displayWeather() {
    setTimeout(() => {
      console.log(`City: ${weather.getWeatherData().name}`);
      console.log(`Weather: ${weather.getWeatherData().weather[0].main}`);
      console.log(`Temperature: ${weather.getWeatherData().main.temp}`);
      console.log(`Feels like: ${weather.getWeatherData().main.feels_like}`);
      console.log(`Humidity: ${weather.getWeatherData().main.humidity}%`);
    }, 1000);
  }
}

module.exports = Weather;

/*
const client = new WeatherClient();
const weather = new Weather(client);

weather.fetch("London");

//setTimeout(() => {
//console.log(weather.getWeatherData());
//}, 1000);

weather.displayWeather();
*/
