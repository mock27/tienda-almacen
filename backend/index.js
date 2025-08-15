const { Pool } = require('pg');
const express = require('express');
const app = express();

// Conexión a tu BD en Render (¡usa tu External URL!)
const pool = new Pool({
  connectionString: "postgresql://sidelk:31lqR6ZXW1hfWAD6RBxdlHv5G7zjBgiw@dpg-d2fhkhje5dus73aopl4g-a.oregon-postgres.render.com/almacen_db_sl56",
  ssl: { rejectUnauthorized: false } // ← ¡IMPORTANTE!
});

app.use(express.json());

// Ruta básica de prueba
app.get('/', (req, res) => {
  res.send('🎉 ¡API conectada a Render!');
});

// Ruta para productos
app.get('/productos', async (req, res) => {
  try {
    const result = await pool.query('SELECT * FROM productos');
    res.json(result.rows);
  } catch (err) {
    console.error(err);
    res.status(500).send('Error al consultar la BD');
  }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`✅ Servidor listo en puerto ${PORT}`);
});