import pool from "../config/database";

const createBookTable = async () => {
  const client = await pool.connect();
  try {
    const queryText = `
      CREATE TABLE IF NOT EXISTS Book (
        id SERIAL PRIMARY KEY,
        title VARCHAR(100) NOT NULL,
        author VARCHAR(100) NOT NULL,
        price DECIMAL NOT NULL
      );
    `;
    await client.query(queryText);
    console.log('Tabela "book" criada com sucesso!');
  } catch (err) {
    console.error("Erro ao criar tabela:", err);
  } finally {
    client.release();
  }
};

createBookTable().then(() => process.exit(0));