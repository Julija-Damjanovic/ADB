import { Router } from 'express';
import ProductsRoutes from './products';
import MakersRoutes from './makers';
import UsersRoutes from './users';
import CustomersRoutes from './customers';
import ProfileRoutes from './customers/profile';
import CustomersStampsRoutes from './customersStamps';
const router = Router();

router.use('/products', ProductsRoutes);
router.use('/makers', MakersRoutes);
router.use('/users', UsersRoutes);
router.use('/customers', CustomersRoutes);
router.use('/customers/profile',ProfileRoutes);
router.use('/customersStamps',CustomersStampsRoutes)
// add other routes...

export default router;