import express from 'express';
import { UserRoutes } from '../modules/user/user.route';

const router = express.Router();

const moduleRoutes = [
  // ... routes
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
