const Thermostat = require('./thermostat')

describe('Thermostat', () => {
  it('returns an initial temperature of 20', () => {
    let thermostat = new Thermostat();
    expect(thermostat.getTemperature()).toEqual(20);
  })

  it('increases the thermostat temperature to 21', () => {
    let thermostat = new Thermostat();
    thermostat.up();
    expect(thermostat.getTemperature()).toEqual(21);
  })

  it('increases the thermostat temperature to 25', () => {
    let thermostat = new Thermostat();
    for (let i = 0 ; i < 5 ; i++) {
    thermostat.up();
    }
    expect(thermostat.getTemperature()).toEqual(25);
  })

   it('decreases the thermostat temperature to 19', () => {
    let thermostat = new Thermostat();
    thermostat.down();
    expect(thermostat.getTemperature()).toEqual(19);
  })

  it('decreases the thermostat temperature to a minumum of 10', () => {
    let thermostat = new Thermostat();

    for (let i = 0 ; i < 15 ; i++) {
    thermostat.down();
    }

    expect(thermostat.getTemperature()).toEqual(10);
  })

  it('can perform all functions and return the correct temperature', () => {
    let thermostat = new Thermostat();

    thermostat.up(); // 21
    thermostat.up(); // 22
    thermostat.down(); // 21
    thermostat.setPowerSavingMode(true) // psm = true
    for (let i = 0 ; i < 10 ; i++) {
    thermostat.up(); // max 25
    }
    thermostat.setPowerSavingMode(false) // max 32
    thermostat.up(); // 26 

    expect(thermostat.getTemperature()).toEqual(26);
  })

  it('can perform all functions and return the correct temperature', () => {
    let thermostat = new Thermostat();
    
    thermostat.up(); // 21
    thermostat.up(); // 22
    thermostat.down(); // 21
    thermostat.setPowerSavingMode(true) // psm = true
    for (let i = 0 ; i < 10 ; i++) {
    thermostat.up(); // max 25
    }
    thermostat.setPowerSavingMode(false) // max 32
    thermostat.up(); // 26 
    thermostat.reset();

    expect(thermostat.getTemperature()).toEqual(20);
  })

  it('can return low energy usage', () => {
    let thermostat = new Thermostat();
    
    thermostat.down(); // 19
    thermostat.down(); // 18
    thermostat.down(); // 17
  
    expect(thermostat.getEnergyUsage()).toEqual('Low');
  })

  it('can return medium energy usage', () => {
    let thermostat = new Thermostat();
    
    for(let i = 0; i < 5; i++ ) {thermostat.up()}
  
    expect(thermostat.getEnergyUsage()).toEqual('Medium');
  })

  it('can return high energy usage', () => {
    let thermostat = new Thermostat();
    
    thermostat.setPowerSavingMode(false)
    for(let i = 0; i < 10; i++ ) {thermostat.up()}
  
    expect(thermostat.getEnergyUsage()).toEqual('High');
  })
})