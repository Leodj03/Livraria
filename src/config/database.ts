import { Pool } from 'pg';

const connectionString = 'postgresql://postgres.nenzdsbzlqphhzefexzn:1pavtlPjU5c6rYED@aws-0-us-west-1.pooler.supabase.com:6543/postgres;'

const pool = new Pool({
  connectionString,
  ssl: {
    rejectUnauthorized: false, // Permite conexões SSL não autorizadas
  }
});

export default pool;