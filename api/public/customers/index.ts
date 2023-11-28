import { request, response, Router } from "express";
import Customer from "../../models/Customer";
import CustomerStamp from "../../models/CustomerStamp";
import Reward from "../../models/Reward";
import ProfileRoutes from "./profile";
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
    where: { id: req.params.id },
  });
  res.status(200).json(JSON.parse(JSON.stringify(data)).username);
});

router.use('./profile', ProfileRoutes);
export default router;