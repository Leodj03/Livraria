import pool from '../config/database';

const createUserTable = async () => {
  const client = await pool.connect();
  try {
    const queryText = `
      CREATE TABLE IF NOT EXISTS Users (
        id SERIAL PRIMARY KEY,
        name VARCHAR(100) NOT NULL,
        email VARCHAR(100) NOT NULL,
        password varchar(50) not null,
        chooseBook varchar(50) not null
      );
    `;
    await client.query(queryText);
    console.log('Tabela "Users" criada com sucesso!');
  } catch (err) {
    console.error('Erro ao criar tabela:', err);
  } finally {
    client.release();
  }
};

createUserTable().then(() => process.exit(0));