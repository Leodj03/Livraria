import { Pool } from 'pg';

const connectionString = 'postgresql://backend_ugaz_user:87KlrSzD5GQ0M8KBs5SaJ0bJgGj5112g@dpg-cs2rppbv2p9s738nq950-a.oregon-postgres.render.com/backend_ugaz';

const pool = new Pool({
  connectionString,
  ssl: {
    rejectUnauthorized: false, // Permite conexões SSL não autorizadas
  }
});

export default pool;