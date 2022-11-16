class Thermostat {
  constructor() {
    this.temperature = 20;
    this.psm = true;
  }

  getTemperature() {
    return this.temperature;
  }

  up() {
    if (this.psm === true) {
      if (this.temperature < 25) {
        this.temperature += 1;
      }
    } else if (this.temperature < 32) {
        this.temperature += 1;
    }
  }

  down() {
    if (this.temperature > 10)
    this.temperature -= 1;
  }

  setPowerSavingMode(state) {
    if (state === true) {
      this.psm = true;
    } else if (state === false) {
      this.psm = false;
    }
  }

  reset() {
    this.temperature = 20;
  }

  getEnergyUsage() {
    if (this.temperature < 18) {
      return('Low');
    } else if (this.temperature <= 25) {
      return('Medium');
    } else {
      return('High');
    }
  }
}

module.exports = Thermostat;