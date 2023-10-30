import { Router } from 'express';
import ProductsRoutes from './products';
import MakersRoutes from './makers';

const router = Router();

router.use('/products', ProductsRoutes);
router.use('/makers', MakersRoutes);
// add other routes...

export default router;