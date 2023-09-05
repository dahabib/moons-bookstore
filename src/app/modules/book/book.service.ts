import { Book, Prisma } from '@prisma/client';
import { paginationHelpers } from '../../../helpers/paginationHelper';
import { IGenericResponse } from '../../../interfaces/common';
import { IPaginationOptions } from '../../../interfaces/pagination';
import prisma from '../../../shared/prisma';
import {
  bookRelationalFields,
  bookRelationalFieldsMapper,
  bookSearchableFields,
} from './book.constants';
import { IBookFilterRequest } from './book.interface';

// Create a book
const createBook = async (data: Book): Promise<Book> => {
  return await prisma.book.create({
    data,
  });
};

// Get All Books
const getAllBooks = async (
  filters: IBookFilterRequest,
  options: IPaginationOptions
): Promise<IGenericResponse<Book[]>> => {
  const { size, page, skip } = paginationHelpers.calculatePagination(options);
  const { searchTerm, ...filterData } = filters;

  const andConditions = [];

  if (searchTerm) {
    andConditions.push({
      OR: bookSearchableFields.map(field => ({
        [field]: {
          contains: searchTerm,
          mode: 'insensitive',
        },
      })),
    });
  }

  if (Object.keys(filterData).length > 0) {
    andConditions.push({
      AND: Object.keys(filterData).map(key => {
        if (bookRelationalFields.includes(key)) {
          return {
            [bookRelationalFieldsMapper[key]]: {
              id: (filterData as any)[key],
            },
          };
        } else {
          return {
            [key]: {
              equals: (filterData as any)[key],
            },
          };
        }
      }),
    });
  }

  const whereConditions: Prisma.BookWhereInput =
    andConditions.length > 0 ? { AND: andConditions } : {};

  const result = await prisma.book.findMany({
    where: whereConditions,
    include: {
      category: true,
    },
    skip,
    take: size,
    orderBy:
      options.sortBy && options.sortOrder
        ? { [options.sortBy]: options.sortOrder }
        : {
            createdAt: 'desc',
          },
  });
  const total = await prisma.book.count({
    where: whereConditions,
  });

  const totalPage = Math.ceil(total / +size);

  return {
    meta: {
      page,
      size,
      total,
      totalPage,
    },
    data: result,
  };
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
    include: {
      category: true,
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
