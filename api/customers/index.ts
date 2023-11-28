import { Router, request, response } from 'express';
import ProductsRoutes from './products';
import MakersRoutes from './makers';
import CustomerStamps from './customersStamps';
import RewardsRoutes from './rewards';
import Customer from '../models/Customer';
import Reward from '../models/Reward';
import CustomerStamp from '../models/CustomerStamp';
const router = Router();
router.get("/", async (req: request, res: response) => {
    const data = await Customer.findAll({

        include: {
            model: CustomerStamp,
            include: [{
                model: Reward,
            }]
        }
    });
    res.status(200).json(JSON.parse(JSON.stringify(data)).ammount);
});

router.get("/:id", async (req: request, res: response) => {
    const data = await Customer.findOne({
        where: { id: req.authEntety.user_id },
        include: {
            model: CustomerStamp,
            include: [{
                model: Reward,
            }]
        }
    });

    res.json({
        result: data,
    });
});

router.use('/products', ProductsRoutes);
router.use('/makers', MakersRoutes);
router.use('/customersStamps', CustomerStamps);
router.use('/rewards', RewardsRoutes);
// add other routes...

export default router;