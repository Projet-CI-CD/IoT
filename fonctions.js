function simulateTemperature(device) {
    const change = (Math.random() - 0.5) * 2;
    device.temperature = Math.max(15, Math.min(30, device.temperature + change));
    return parseFloat(device.temperature.toFixed(1));
  }
  
  function simulateHumidity(device) {
    const change = (Math.random() - 0.5) * 4;
    device.humidity = Math.max(30, Math.min(80, device.humidity + change));
    return Math.round(device.humidity);
  }

  module.exports = {
    simulateTemperature,
    simulateHumidity
  };