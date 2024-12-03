// bookRoutes.ts
import { Router } from 'express';
import { getAllBooks, addBook } from '../controllers/bookController';

const router = Router();

router.get('/books', getAllBooks); // Corrigido para rota de livros
router.post('/books', addBook); // Corrigido para rota de livros

export default router;
