const pool = new Pool({
  connectionString: process.env.DATABASE_URL || 'postgres://admin:secretpassword@localhost:5432/almacen_db',
  ssl: { rejectUnauthorized: false } // ¡Necesario para Render!
});