const { simulateTemperature, simulateHumidity } = require("./fonctions");

test("simulateTemperature returns a number between 15 and 30", () => {
  const device = {
    device_id: `device_1`,
    timestamp: new Date().toISOString(),
    temperature: 20,
    humidity: 50,
    type:"device"
  }
  const temp = simulateTemperature(device);
  expect(temp).toBeGreaterThanOrEqual(15);
  expect(temp).toBeLessThanOrEqual(30);
});

test("simulateHumidity returns a number between 30 and 80", () => {
  const device = {
    device_id: `device_1`,
    timestamp: new Date().toISOString(),
    temperature: 20,
    humidity: 50,
    type:"device"
  }
  const hum = simulateHumidity(device);
  expect(hum).toBeGreaterThanOrEqual(30);
  expect(hum).toBeLessThanOrEqual(80);
});
