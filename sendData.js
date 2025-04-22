const axios = require("axios");
const fs = require("fs");

const API_URL = "http://localhost:3000/iot";

const rawData = fs.readFileSync("iot_devices.json");
const sensorData = JSON.parse(rawData);

function delay(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

async function sendData() {
  for (const data of sensorData) {
    try {
      const response = await axios.post(API_URL, data);
      console.log(`Sent ${data.device_id} → Status: ${response.status}`);
    } catch (err) {
      console.error(` Error sending ${data.device_id}:`, err.message);
    }
    await delay(500); 
  }
}

sendData();
