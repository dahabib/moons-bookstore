# Live Link: [https://moons-bookstore.vercel.app/](https://moons-bookstore.vercel.app/)

## Application Routes

### User

- <https://moons-bookstore.vercel.app/api/v1/auth/signup> (POST)
- <https://moons-bookstore.vercel.app/api/v1/users> (GET)
- <https://moons-bookstore.vercel.app/api/v1/users/85e8035a-68aa-436b-a7c1-aaf979fd9e18> (Single GET) Include an id that is saved in your database
- <https://moons-bookstore.vercel.app/api/v1/users/85e8035a-68aa-436b-a7c1-aaf979fd9e18> (PATCH)
- <https://moons-bookstore.vercel.app/api/v1/users/85e8035a-68aa-436b-a7c1-aaf979fd9e18> (DELETE) Include an id that is saved in your database
- <https://moons-bookstore.vercel.app/api/v1/profile> (GET)

### Category

- <https://moons-bookstore.vercel.app/api/v1/categories/create-category> (POST)
- <https://moons-bookstore.vercel.app/api/v1/categories> (GET)
- <https://moons-bookstore.vercel.app/api/v1/categories/30fa1b8c-2adb-4790-9a2c-c4d9104df0ef> (Single GET) Include an id that is saved in your database
- <https://moons-bookstore.vercel.app/api/v1/categories/30fa1b8c-2adb-4790-9a2c-c4d9104df0ef> (PATCH)
- <https://moons-bookstore.vercel.app/api/v1/categories/30fa1b8c-2adb-4790-9a2c-c4d9104df0ef> (DELETE) Include an id that is saved in your database

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
