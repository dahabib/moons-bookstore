export const bookFilterableFields: string[] = [
  'category',
  'minPrice',
  'maxPrice',
];

export const bookSearchableFields: string[] = ['title', 'genre', 'author'];

export const bookRelationalFields: string[] = ['categoryId'];
export const bookRelationalFieldsMapper: {
  [key: string]: string;
} = {
  categoryId: 'category',
};
