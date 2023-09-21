# Live Link: [https://moons-bookstore.vercel.app/](https://moons-bookstore.vercel.app/)

## Application Routes

### User

- api/v1/auth/signup (POST)
- api/v1/users (GET)
- api/v1/users/85e8035a-68aa-436b-a7c1-aaf979fd9e18> (Single GET)
- api/v1/users/85e8035a-68aa-436b-a7c1-aaf979fd9e18 (PATCH)
- api/v1/users/85e8035a-68aa-436b-a7c1-aaf979fd9e18> (DELETE)
- api/v1/profile (GET)

### Category

- api/v1/categories/create-category (POST)
- api/v1/categories (GET)
- api/v1/categories/30fa1b8c-2adb-4790-9a2c-c4d9104df0ef> (Single GET)
- api/v1/categories/30fa1b8c-2adb-4790-9a2c-c4d9104df0ef (PATCH)
- api/v1/categories/30fa1b8c-2adb-4790-9a2c-c4d9104df0ef> (DELETE)

### Books

- api/v1/books/create-book (POST)
- api/v1/books (GET)
- api/v1/books/:categoryId/category (GET)
- api/v1/books/:id (GET)
- api/v1/books/:id (PATCH)
- api/v1/books/:id (DELETE)

### Orders

- api/v1/orders/create-order (POST)
- api/v1/orders (GET)
- api/v1/orders/:orderId (GET)
  Only **admin** and **customer of this order** is allowed to fetch.
