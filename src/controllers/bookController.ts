import { Request, Response } from 'express';
import { BookRepository } from '../repositories/bookRepository';

const bookRepository = new BookRepository();

export const getAllBooks = async (req: Request, res: Response) => {
  const books = await bookRepository.getAllBooks();
  res.status(200).json(books);
};

export const addBook = async (req: Request, res: Response) => {
  const { title, author, price } = req.body;
  const book = await bookRepository.addBook(title, author, price);
  res.status(201).json(book);
};