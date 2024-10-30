import pool from '../config/database';

const createUsersTable = async () => {
  const client = await pool.connect();
  try {
    const queryText = `
      CREATE TABLE IF NOT EXISTS livraria (
        id SERIAL PRIMARY KEY,
        title VARCHAR(100) NOT NULL,
        author VARCHAR(100) NOT NULL,
        price double not null
      );
    `;
    await client.query(queryText);
    console.log('Tabela "livraria" criada com sucesso!');
  } catch (err) {
    console.error('Erro ao criar tabela:', err);
  } finally {
    client.release();
  }
};

createUsersTable().then(() => process.exit(0));