# Live Link: [https://moons-bookstore.vercel.app/](https://moons-bookstore.vercel.app/)

## Application Routes

### User

- <https://moons-bookstore.vercel.app/api/v1/auth/signup> (POST)
- <https://moons-bookstore.vercel.app/api/v1/users> (GET)
- <https://moons-bookstore.vercel.app/api/v1/users/6177a5b87d32123f08d2f5d4> (Single GET) Include an id that is saved in your database
- <https://moons-bookstore.vercel.app/api/v1/users/6177a5b87d32123f08d2f5d4> (PATCH)
- <https://moons-bookstore.vercel.app/api/v1/users/6177a5b87d32123f08d2f5d4> (DELETE) Include an id that is saved in your database
- <https://moons-bookstore.vercel.app/api/v1/profile> (GET)

### Category

- <https://moons-bookstore.vercel.app/api/v1/categories/create-category> (POST)
- <https://moons-bookstore.vercel.app/api/v1/categories> (GET)
- <https://moons-bookstore.vercel.app/api/v1/categories/6177a5b87d32123f08d2f5d4> (Single GET) Include an id that is saved in your database
- <https://moons-bookstore.vercel.app/api/v1/categories/6177a5b87d32123f08d2f5d4> (PATCH)
- <https://moons-bookstore.vercel.app/api/v1/categories/6177a5b87d32123f08d2f5d4> (DELETE) Include an id that is saved in your database

### Books

- <https://moons-bookstore.vercel.app/api/v1/books/create-book> (POST)
- <https://moons-bookstore.vercel.app/api/v1/books> (GET)
- <https://moons-bookstore.vercel.app/api/v1/books/:categoryId/category> (GET)  
   **`https://moons-bookstore.vercel.app/api/v1/books/c67dfae5-5478-428a-bf6f-8a937487258c/category`**
- <https://moons-bookstore.vercel.app/api/v1/books/:id> (GET)  
   **`https://moons-bookstore.vercel.app/api/v1/books/c69dfed1-d217-4825-82d6-1416cd89e5e0`**
- <https://moons-bookstore.vercel.app/api/v1/books/:id> (PATCH)  
   **`https://moons-bookstore.vercel.app/api/v1/books/c69dfed1-d217-4825-82d6-1416cd89e5e0`**
- <https://moons-bookstore.vercel.app/api/v1/books/:id> (DELETE)  
   **`https://moons-bookstore.vercel.app/api/v1/books/c69dfed1-d217-4825-82d6-1416cd89e5e0`**

### Orders

- <https://moons-bookstore.vercel.app/api/v1/orders/create-order> (POST)
- <https://moons-bookstore.vercel.app/api/v1/orders> (GET)
- <https://moons-bookstore.vercel.app/api/v1/orders/:orderId> (GET)  
   **`https://moons-bookstore.vercel.app/api/v1/orders/614fd3ef-1789-4659-81e0-be6f9082af68`** // only **admin** and **customer of this order** is allowed to fetch.
