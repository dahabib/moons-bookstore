import { z } from 'zod';

const create = z.object({
  body: z.object({
    title: z.string({ required_error: 'Book title is required.' }),
    author: z.string({ required_error: 'Author name is required.' }),
    price: z.number({ required_error: 'Book price is required.' }),
    genre: z.string({ required_error: 'Book genre is required.' }),
    publicationDate: z.string({
      required_error: 'Book publication date is required.',
    }),
    categoryId: z.string({ required_error: "Book's categoryId is required." }),
  }),
});

const update = z.object({
  body: z.object({
    title: z.string().optional(),
    author: z.string().optional(),
    price: z.number().optional(),
    genre: z.string().optional(),
    publicationDate: z.string().optional(),
    categoryId: z.string().optional(),
  }),
});

export const BookValidation = {
  create,
  update,
};
