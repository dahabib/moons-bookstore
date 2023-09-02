import express from 'express';
import { AuthRoutes } from '../modules/auth/auth.route';
import { UserRoutes } from '../modules/user/user.route';

const router = express.Router();

const moduleRoutes = [
  // ... routes
  {
    path: '/auth',
    routes: AuthRoutes,
  },
  {
    path: '/users',
    routes: UserRoutes,
  },
  // {
  //   path: '/categories',
  //   routes: CategoryRoutes,
  // },
  // {
  //   path: '/books',
  //   routes: BookRoutes,
  // },
  // {
  //   path: '/orders',
  //   routes: OrderRoutes,
  // },
];

moduleRoutes.forEach(route => router.use(route.path, route.routes));
export default router;
