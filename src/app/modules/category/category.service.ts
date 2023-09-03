import { Category } from '@prisma/client';
import prisma from '../../../shared/prisma';

// Create a category
const createCategory = async (data: Category): Promise<Category> => {
  return await prisma.category.create({
    data,
  });
};

// Get All categories
const getAllCategories = async (): Promise<Category[]> => {
  return await prisma.category.findMany();
};

// Get single category
const getSingleCategory = async (id: string): Promise<Category | null> => {
  return await prisma.category.findUnique({
    where: {
      id,
    },
  });
};

// Update a category
const updateCategory = async (
  id: string,
  data: Partial<Category>
): Promise<Category | null> => {
  return await prisma.category.update({
    where: {
      id,
    },
    data,
  });
};

// Delete a category
const deleteCategory = async (id: string) => {
  return await prisma.category.delete({
    where: {
      id,
    },
  });
};

export const CategoryService = {
  createCategory,
  getAllCategories,
  getSingleCategory,
  updateCategory,
  deleteCategory,
};
