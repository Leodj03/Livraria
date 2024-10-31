import pool from '../config/database';

const createTransactionTable = async () => {
  const client = await pool.connect();
  try {
    const queryText = `
      CREATE TABLE IF NOT EXISTS "Transaction" (
        id SERIAL PRIMARY KEY,
        date_purchase varchar(50),
        price VARCHAR(100),
        book_id INT,
        client_id INT,
        FOREIGN KEY (book_id) REFERENCES Book(id),
        FOREIGN KEY (client_id) REFERENCES Users(id)
      );
    `;
    await client.query(queryText);
    console.log('Tabela "Transaction" criada com sucesso!');
  } catch (err) {
    console.error('Erro ao criar tabela:', err);
  } finally {
    client.release();
  }
};

createTransactionTable().then(() => process.exit(0));