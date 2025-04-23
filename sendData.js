const axios = require("axios"); 
const fs = require("fs");

const API_URL = "http://192.168.0.22:3000/iot";

const rawData = fs.readFileSync("iot_devices.json");
const sensorData = JSON.parse(rawData);

let currentTemp = 20;
let currentHumidity = 50;

function simulateTemperature() {
  const change = (Math.random() - 0.5) * 2;
  currentTemp = Math.max(15, Math.min(30, currentTemp + change));
  return parseFloat(currentTemp.toFixed(1));
}

function simulateHumidity() {
  const change = (Math.random() - 0.5) * 4;
  currentHumidity = Math.max(30, Math.min(80, currentHumidity + change));
  return Math.round(currentHumidity);
}

function delay(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}



async function sendData() {
  while (true) {
    for (const data of sensorData) {

      const payload = { ...data };
      payload.timestamp = new Date().toISOString();
      payload.temperature = simulateTemperature();
      payload.humidity = simulateHumidity();

      try {
        const response = await axios.post(API_URL, payload);
        console.log(`Sent ${payload.device_id} → Status: ${response.status}`);
      } catch (err) {
        console.error(`Error sending ${payload.device_id}:`, err.message);
      }

      await delay(1000); 
    }
  }
}

sendData();

module.exports = {
  simulateTemperature,
  simulateHumidity
};
