import { Book } from '@prisma/client';
import prisma from '../../../shared/prisma';

// Create a book
const createBook = async (data: Book): Promise<Book> => {
  return await prisma.book.create({
    data,
  });
};

// Get All Books
const getAllBooks = async (): Promise<Book[]> => {
  return await prisma.book.findMany();
};

// Get a single book
const getSingleBook = async (id: string): Promise<Book | null> => {
  return await prisma.book.findUnique({
    where: {
      id,
    },
  });
};

// Get a single book
const getBooksByCategoryId = async (
  categoryId: string
): Promise<Book[] | null> => {
  return await prisma.book.findMany({
    where: {
      categoryId,
    },
  });
};

// Update a book information
const updateBook = async (
  id: string,
  data: Partial<Book>
): Promise<Book | null> => {
  return await prisma.book.update({
    where: {
      id,
    },
    data,
  });
};

// Delete a book
const deleteBook = async (id: string): Promise<Book | null> => {
  return await prisma.book.delete({
    where: {
      id,
    },
  });
};

export const BookService = {
  createBook,
  getAllBooks,
  getSingleBook,
  getBooksByCategoryId,
  updateBook,
  deleteBook,
};
