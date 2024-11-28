import { Request, Response } from 'express';
import { AuthService } from '../services/authService';
import {User} from '../model/userModel'

const authService = new AuthService();

export const register = async (req: Request, res: Response) => {
  const { name, email, password } = req.body;

  // Validação básica dos dados de entrada
  if (!name || !email || !password) {
    return res.status(400).json({ error: 'Nome, email e senha são obrigatórios.' });
  }

  try {
    const user = await authService.registerUser(name, email, password);
    res.status(201).json(user);
  } catch (err) {
    // Verifica se o erro é relacionado a um usuário já existente
    if (err.message.includes('duplicate key')) {
      return res.status(409).json({ error: 'Usuário já existe com este email.' });
    }
    res.status(500).json({ error: 'Erro ao registrar usuário.' });
  }
};

export const login = async (req: Request, res: Response) => {
  const { email, password } = req.body;

  // Validação básica dos dados de entrada
  if (!email || !password) {
    return res.status(400).json({ error: 'Email e senha são obrigatórios.' });
  }

  try {
    const user = await authService.loginUser(email, password);
    res.status(200).json(user);
  } catch (err) {
    // Resposta mais específica para falhas de autenticação
    res.status(401).json({ error: 'Email ou senha inválidos.' });
  }
};