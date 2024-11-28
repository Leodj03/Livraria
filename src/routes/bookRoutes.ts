import { Router } from 'express';
import { getAllBooks, addBook } from '../controllers/bookController';

const router = Router();

router.get('/users', getAllBooks);
router.post('/users', addBook);

export default router;