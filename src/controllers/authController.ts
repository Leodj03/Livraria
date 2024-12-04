  import { Request, Response } from 'express';
  import { AuthService } from '../services/authService';

  const authService = new AuthService();

  export const register = async (req: Request, res: Response) => {
    const { name, email, password } = req.body;

    if (!name || !email || !password) {
      return res.status(400).json({ error: 'Nome, email e senha são obrigatórios.' });
    }

    try {
      const user = await authService.registerUser(name, email, password);
      res.status(201).json(user);
    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : 'Erro desconhecido';
      if (errorMessage.includes('duplicate key')) {
        return res.status(409).json({ error: 'Usuário já existe com este email.' });
      }
      res.status(500).json({ error: errorMessage });
    }
  };

  export const login = async (req: Request, res: Response) => {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(400).json({ error: 'Email e senha são obrigatórios.' });
    }

    try {
      const user = await authService.loginUser(email, password);
      res.status(200).json(user);
    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : 'Erro desconhecido';
      res.status(401).json({ error: errorMessage });
    }
  };
