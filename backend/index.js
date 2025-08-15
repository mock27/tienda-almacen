const pool = new Pool({
  connectionString: process.env.DATABASE_URL || 'postgresql://sidelk:31lqR6ZXW1hfWAD6RBxdlHv5G7zjBgiw@dpg-d2fhkhje5dus73aopl4g-a.oregon-postgres.render.com/almacen_db_sl56',
  ssl: { rejectUnauthorized: false } // ¡Necesario para Render!
});