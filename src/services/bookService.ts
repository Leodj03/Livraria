import { BookRepository } from '../repositories/bookRepository';
import { isValidTitle, isValidAuthor, isValidPrice } from '../helpers/validationHelper';

export class BookService {
  private bookRepository: BookRepository;

  constructor() {
    this.bookRepository = new BookRepository();
  }

  async createBook(title: string, author: string, price: number) {
    if (!isValidTitle(title)) throw new Error('Título inválido');
    if (!isValidAuthor(author)) throw new Error('Autor inválido');
    if (!isValidPrice(price)) throw new Error('Preço inválido');

    const books = await this.bookRepository.getAllBooks();
    if (books.some(book => book.title === title && book.author === author)) {
      throw new Error('Já existe um livro com este título e autor');
    }

    return await this.bookRepository.addBook(title, author, price);
  }

  async listBooks() {
    return await this.bookRepository.getAllBooks();
  }
}
