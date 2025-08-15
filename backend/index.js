// ★ Importaciones obligatorias (¡no las borres!)
const { Pool } = require('pg'); // <-- Esta línea faltaba
const express = require('express');
const app = express();

// ★ Conexión a tu BD en Render (usa TU External URL)
const pool = new Pool({
  connectionString: "postgresql://sidelk:31lqR6ZXW1hfWAD6RBxdlHv5G7zjBgiw@dpg-d2fhkhje5dus73aopl4g-a.oregon-postgres.render.com/almacen_db_sl56",
  ssl: { rejectUnauthorized: false } // ← ¡Obligatorio para Render!
});

// ★ Configuración básica
app.use(express.json());

// ★ Ruta de prueba
app.get('/', (req, res) => {
  res.send('✅ ¡API conectada a PostgreSQL en Render!');
});

// ★ Ruta para productos
app.get('/productos', async (req, res) => {
  try {
    const result = await pool.query('SELECT * FROM productos');
    res.json(result.rows);
  } catch (err) {
    console.error('❌ Error en /productos:', err);
    res.status(500).send('Error al consultar la BD');
  }
});

// ★ Puerto (usa el de Render o 10000 por defecto)
const PORT = process.env.PORT || 10000;
app.listen(PORT, () => {
  console.log(`🚀 Servidor listo en http://localhost:${PORT}`);
});