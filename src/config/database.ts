import { Pool } from 'pg';

// URL de conexão diretamente no código
const connectionString = 'postgresql://postgres.nenzdsbzlqphhzefexzn:1pavtlPjU5c6rYED@aws-0-us-west-1.pooler.supabase.com:6543/postgres';

// Configuração do pool de conexões
const pool = new Pool({
  connectionString,
  ssl: {
    rejectUnauthorized: false, // Permite conexões SSL autoassinadas, necessário para alguns ambientes
  },
});

// Teste de conexão (opcional, útil para debug)
pool.connect((err, client, release) => {
  if (err) {
    console.error('Erro ao conectar ao banco de dados:', err);
  } else {
    console.log('Conexão bem-sucedida ao banco de dados!');
    release(); // Libera o cliente de volta para o pool
  }
});

export default pool;
