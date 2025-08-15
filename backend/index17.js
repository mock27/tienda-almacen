// Importaciones
const { Pool } = require('pg');
const express = require('express');
const app = express();

// Conexión a tu BD en Render (¡usa la External URL!)
const pool = new Pool({
  connectionString: "postgresql://sidelk:31lqR6ZXW1hfWAD6RBxdlHv5G7zjBgiw@dpg-d2fhkhje5dus73aopl4g-a.oregon-postgres.render.com/almacen_db_sl56",
  ssl: { rejectUnauthorized: false } // Obligatorio para Render
});

// Middleware
app.use(express.json());

// Ruta de prueba
app.get('/', (req, res) => {
  res.send('✅ ¡Conectado a la BD en Render!');
});

// Ruta para obtener productos
app.get('/productos', async (req, res) => {
  try {
    const result = await pool.query('SELECT * FROM productos');
    res.json(result.rows);
  } catch (err) {
    console.error('❌ Error al consultar la BD:', err);
    res.status(500).send('Error del servidor');
  }
});

// Iniciar servidor
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`🚀 Servidor listo en http://localhost:${PORT}`);
});