import { Router } from 'express';
import { UserRoutes } from '../modules/user/user.route';
import { StudentRoutes } from '../modules/student/student.route';

const router = Router();
const moduelRoutes = [
  {
    path: '/users',
    routes: UserRoutes,
  },
  {
    path: '/student',
    routes: StudentRoutes,
  },
];

moduelRoutes.forEach((route) => router.use(route.path, route.routes));
export default router;
