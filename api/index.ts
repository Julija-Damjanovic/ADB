import { Router } from 'express';
import UserRoutes from './users';
import CustomerRoutes from './customers';
import PublicRoutes from './public';
import verifyToken from "./auth";
import ProfileRoutes from "./public/customers/profile"
const router = Router();

router.use('/users', UserRoutes);
router.use('/public', PublicRoutes);
router.use('/customers', CustomerRoutes);
router.use('/customers/profile',verifyToken, ProfileRoutes)
// add other routes...

export default router;