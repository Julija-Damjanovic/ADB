import { request, response, Router } from "express";
import CustomerStamp from "../../models/CustomerStamp";
import Customer from "../../models/Customer";


const router = Router();


router.get("/",  async (req: request, res: response) => {


  const data = await CustomerStamp.findOne({
    where: { CustomerId: req.authEntety.user_id },
    include: Customer,

  })as any;

  res.status(200).json({ammount:data.ammount});
});








export default router;