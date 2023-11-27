import { Router } from 'express';
import ProductsRoutes from './products';
import MakersRoutes from './makers';
import CustomerStamps from './customersStamps';
import RewardsRoutes from './rewards';

const router = Router();

router.use('/products', ProductsRoutes);
router.use('/makers', MakersRoutes);
router.use('/customersStamps', CustomerStamps);
router.use('/rewards',RewardsRoutes);
// add other routes...

export default router;