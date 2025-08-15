const express = require('express');
const { Pool } = require('pg');
const app = express();

// Conexión a PostgreSQL
const pool = new Pool({
  user: 'admin',
  host: 'localhost',
  database: 'almacen_db',
  password: 'secretpassword',
  port: 5432,
});

// Middleware para parsear JSON
app.use(express.json());

// Ruta de prueba
app.get('/', (req, res) => {
  res.send('¡API funcionando!');
});

// Iniciar servidor
const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});