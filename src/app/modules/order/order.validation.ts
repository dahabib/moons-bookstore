import { z } from 'zod';

const create = z.object({
  body: z.object({
    orderedBooks: z.array(
      z.object({
        bookId: z.string({ required_error: 'bookId is required.' }),
        quantity: z.number({ required_error: 'Quantity of book is required.' }),
      })
    ),
    status: z.enum(['pending', 'shipped', 'delivered'], {
      required_error: 'Order status is required.',
    }),
  }),
});

const update = z.object({
  body: z.object({
    orderedBooks: z
      .array(
        z.object({
          bookId: z.string(),
          quantity: z.number(),
        })
      )
      .optional(),
    status: z.enum(['pending', 'shipped', 'delivered']).optional(),
  }),
});

export const OrderValidation = {
  create,
  update,
};
