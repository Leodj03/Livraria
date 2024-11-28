import { UserRepository } from '../repositories/userRepository';
import { isValidEmail, isValidName } from '../helpers/validationHelper';
import { User } from '../model/userModel';

export class UserService {
  private userRepository: UserRepository;

  constructor() {
    this.userRepository = new UserRepository();
  }

  async createUser(name: string, email: string, passwordHash: string): Promise<User> {
    // Validação dos dados
    if (!isValidName(name)) {
      throw new Error('Nome inválido');
    }
    if (!isValidEmail(email)) {
      throw new Error('Email inválido');
    }

    // Verifica se o usuário já existe
    const existingUser = await this.userRepository.getUserByEmail(email);
    if (existingUser) {
      throw new Error('Usuário já existe com este email');
    }

    // Adiciona o novo usuário
    const newUser = await this.userRepository.addUser(name, email, passwordHash);
    return newUser;
  }

  async listUsers(): Promise<User[]> {
    // Método para listar todos os usuários (precisa ser implementado no repositório)
    return await this.userRepository.getAllUsers();
  }
}