const axios = require("axios"); 
const { simulateTemperature, simulateHumidity } = require("./fonctions");

const API_URL = "http://10.70.5.208:3000/iot";

const devices = [];

for (let i = 0; i < 4; i++) {
  devices.push({
    device_id: `device_${i + 1}`,
    timestamp: new Date().toISOString(),
    temperature: 20,
    humidity: 50,
    type:"device"
  });
}



function delay(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

async function sendData() {
  while (true) {
    for (const data of devices) {

      data.timestamp = new Date().toISOString();
      data.temperature = simulateTemperature(data);
      data.humidity = simulateHumidity(data);

      try {
        const response = await axios.post(API_URL, data);
        console.log(`Sent ${data.device_id} → Status: ${response.status}`);
      } catch (err) {
        console.error(`Error sending ${data.device_id}:`, err.message);
      }

      await delay(1000); 
    }
  }
}

sendData();
