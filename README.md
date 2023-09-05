# Live Link: [https://moons-bookstore.vercel.app/](https://moons-bookstore.vercel.app/)

## Application Routes

### User

- api/v1/auth/signup (POST)
- api/v1/users (GET)
- api/v1/users/6177a5b87d32123f08d2f5d4 (Single GET) Include an id that is saved in your database
- api/v1/users/6177a5b87d32123f08d2f5d4 (PATCH)
- api/v1/users/6177a5b87d32123f08d2f5d4 (DELETE) Include an id that is saved in your database
- api/v1/profile (GET)

### Category

- api/v1/categories/create-category (POST)
- api/v1/categories (GET)
- api/v1/categories/6177a5b87d32123f08d2f5d4 (Single GET) Include an id that is saved in your database
- api/v1/categories/6177a5b87d32123f08d2f5d4 (PATCH)
- api/v1/categories/6177a5b87d32123f08d2f5d4 (DELETE) Include an id that is saved in your database

### Books

- api/v1/books/create-book (POST)
- api/v1/books (GET)
- api/v1/books/:categoryId/category (GET)  
   **`api/v1/books/c67dfae5-5478-428a-bf6f-8a937487258c/category`**
- api/v1/books/:id (GET)  
   **`api/v1/books/c69dfed1-d217-4825-82d6-1416cd89e5e0`**
- api/v1/books/:id (PATCH)  
   **`api/v1/books/c69dfed1-d217-4825-82d6-1416cd89e5e0`**
- api/v1/books/:id (DELETE)  
   **`api/v1/books/c69dfed1-d217-4825-82d6-1416cd89e5e0`**

### Orders

- api/v1/orders/create-order (POST)
- api/v1/orders (GET)
- api/v1/orders/:orderId (GET)  
   **`api/v1/orders/614fd3ef-1789-4659-81e0-be6f9082af68`** // only **admin** and **customer of this order** is allowed to fetch.
