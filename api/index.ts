import { Router } from 'express';
import UserRoutes from './users';
import CustomerRoutes from './customers';
import PublicRoutes from './public';

const router = Router();

router.use('/users', UserRoutes);
router.use('/public', PublicRoutes);
router.use('/customers', CustomerRoutes);
// add other routes...

export default router;