import { Router } from 'express';
import ProductsRoutes from './products';
import MakersRoutes from './makers';
import CustomerStamps from './customersStamps';

const router = Router();

router.use('/products', ProductsRoutes);
router.use('/makers', MakersRoutes);
router.use('/customersStamps', CustomerStamps);
// add other routes...

export default router;