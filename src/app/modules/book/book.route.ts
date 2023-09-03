import express from 'express';
import { BookController } from './book.controller';

const router = express.Router();

router.post('/create-book', BookController.createBook);
router.get('/', BookController.getAllBooks);
router.get('/:id', BookController.getSingleBook);
router.get('/:categoryId/category', BookController.getBooksByCategoryId);
router.patch('/:id', BookController.updateBook);
router.delete('/:id', BookController.deleteBook);

export const BookRoutes = router;