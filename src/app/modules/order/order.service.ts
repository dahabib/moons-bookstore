import { Order, Prisma } from '@prisma/client';
import httpStatus from 'http-status';
import { JwtPayload } from 'jsonwebtoken';
import ApiError from '../../../errors/ApiError';
import prisma from '../../../shared/prisma';

// Create Order
const createOrder = async (
  user: JwtPayload | null,
  payload: Order
): Promise<Order> => {
  return await prisma.order.create({
    data: {
      userId: user?.userId,
      orderedBooks: payload.orderedBooks,
    },
  });
};

// Get all orders
const getAllOrders = async (user: JwtPayload): Promise<Order[]> => {
  const { role, userId } = user;

  const whereConditions: Prisma.OrderWhereInput =
    role === 'admin' ? {} : { userId };

  return await prisma.order.findMany({
    where: whereConditions,
  });
};

// Get single order
const getSingleOrder = async (
  id: string,
  user: JwtPayload
): Promise<Order | null> => {
  const { role, userId } = user;

  const order = await prisma.order.findUnique({
    where: {
      id,
    },
  });

  // Throw an error if not matched with orders userId
  if (role === 'customer' && userId !== order?.userId) {
    throw new ApiError(
      httpStatus.UNAUTHORIZED,
      'You are not authorized to fetch this order.'
    );
  } else {
    return order;
  }
};

export const OrderService = {
  createOrder,
  getAllOrders,
  getSingleOrder,
};
