const { simulateTemperature, simulateHumidity } = require("./sendData");

test("simulateTemperature returns a number between 15 and 30", () => {
  const temp = simulateTemperature();
  expect(temp).toBeGreaterThanOrEqual(15);
  expect(temp).toBeLessThanOrEqual(30);
});

test("simulateHumidity returns a number between 30 and 80", () => {
  const hum = simulateHumidity();
  expect(hum).toBeGreaterThanOrEqual(30);
  expect(hum).toBeLessThanOrEqual(80);
});
