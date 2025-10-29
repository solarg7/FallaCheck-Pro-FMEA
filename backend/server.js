const express = require('express');
const cors = require('cors'); // Necesario para permitir llamadas desde el simulador de iOS

const app = express();
const PORT = 3000;

// Datos de falla (simulando la respuesta de MongoDB)
const fallasData = [
  // ... (Pegar el contenido del JSON del punto 1 aquí) ...
];

// Configuración de middlewares
app.use(cors());
app.use(express.json());

// ----------------------------------------------------
// RUTAS DE LA API
// ----------------------------------------------------

/**
 * Endpoint principal: Obtiene todos los modos de falla de la Válvula de Parada Rápida.
 * URL: http://localhost:3000/api/fmeas
 */
app.get('/api/fmeas', (req, res) => {
  console.log('Solicitud recibida para /api/fmeas');
  res.json(fallasData);
});

/**
 * Endpoint de detalle: Obtiene un modo de falla específico por ID.
 * URL: http://localhost:3000/api/fmeas/VP-001
 */
app.get('/api/fmeas/:id', (req, res) => {
  const fallaId = req.params.id;
  const falla = fallasData.find(f => f.id === fallaId);

  if (falla) {
    res.json(falla);
  } else {
    res.status(404).json({ message: 'Modo de falla no encontrado' });
  }
});

// Iniciar el servidor
app.listen(PORT, () => {
  console.log(`🚀 Servidor de FallaCheck API corriendo en http://localhost:${PORT}`);
});