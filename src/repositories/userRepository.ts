import { Pool } from 'pg';
import pool from '../config/database';
import { User } from '../model/userModel';

export class UserRepository {
  private pool: Pool = pool;

  async getUserByEmail(email: string): Promise<User | null> {
    const { rows } = await this.pool.query('SELECT * FROM users WHERE email = $1', [email]);
    return rows[0] || null;
  }

  async addUser(name: string, email: string, passwordHash: string): Promise<User> {
    const query = 'INSERT INTO users (name, email, passwordHash) VALUES ($1, $2, $3) RETURNING *';
    const { rows } = await this.pool.query(query, [name, email, passwordHash]);
    return rows[0];
  }

  async getAllUsers(): Promise<User[]> {
    const { rows } = await this.pool.query('SELECT * FROM users');
    return rows;
  }
}