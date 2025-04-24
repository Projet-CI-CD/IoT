### 📡 `iot`

1. Dans sendData.js, modifie l'URL si besoin :
   ```bash
   const API_URL = "http://X.X.X.X:3000/iot";
   ```
2. Ouvre un terminal dans le dossier iot : 
   ```bash
   npm install
   node sendData.js
   ```
3. Vérifiez que : 
- Les données simulées depuis iot_devices.json sont envoyées
- L’API Express reçoit bien ces données (affichées en console ou enregistrées)

![CI](https://github.com/SajedehAdelia/Projet-CI-CD/actions/workflows/ci.yml/badge.svg)

