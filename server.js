// server.js
const express = require('express');
const path = require('path');
const app = express();

// Ruta para servir los archivos en la carpeta "Gm"
app.use('/Gm', express.static(path.join(__dirname, 'Gm')));

// Ruta para servir los archivos en la carpeta "co"
app.use('/co', express.static(path.join(__dirname, 'co')));

// Ruta principal
app.get('/', (req, res) => {
  res.send('xd');
});

// Inicia el servidor en el puerto 3000
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor escuchando en el puerto ${PORT}`);
});
