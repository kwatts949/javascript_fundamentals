const Weather = require("./weather");
const WeatherClient = require("./weatherClient");

describe("Weather", () => {
  it("constructs", () => {
    const client = new WeatherClient();
    const weather = new Weather(client);
    expect(weather).toBeInstanceOf(Weather);
  });

  it("gets the weather data fetched by the WeatherClient class", (done) => {
    const mockedClient = {
      fetchWeatherData: (city, callback) => {
        callback({
          city: "Bristol",
          weather: "Some fake weather",
        });
      },
    };

    const weather = new Weather(mockedClient);

    weather.fetch("Bristol");

    expect(weather.getWeatherData()).toEqual({
      city: "Bristol",
      weather: "Some fake weather",
    });
    done();
  });
});
