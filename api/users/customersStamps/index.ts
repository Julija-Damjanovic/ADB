import { request, response, Router } from "express";
import CustomerStamp from "../../models/CustomerStamp";
import Customer from "../../models/Customer";

const router = Router();

router.get("/", async (req: request, res: response) => {
  const customer = (await Customer.findOne({
    where: { id: req.authEntety.user_id },
  })) as any;

  const amount = (await CustomerStamp.findOne({
    where: {
      CustomerId: customer.id,
    },
  })) as any;

  res.json({ ammount: amount.ammount });
});

router.post("/", async (req: request, res: response) => {
  const { ammount, CustomerId, RewardId } = req.body;
  if (!(ammount && CustomerId && RewardId)) return res.status(400).send('error create');
  const newAmmount = await CustomerStamp.create({ ammount, CustomerId, RewardId });
  res.status(200).json({ message: "Ammount add", newAmmount });
});

router.put("/:id", async (req: request, res: response) => {
  const { ammount, CustomerId, RewardId } = req.body;
  const data = await CustomerStamp.update({ ammount, CustomerId, RewardId }, {
    where: {
      CustomerId: req.authEntety.user_id,
    },
  });
  res.json({
    result: data,
  });
});

router.delete("/:id", async (req: request, res: response) => {
  const data = await CustomerStamp.destroy({
    where: {
      id: req.params.id,
    },
  });
  res.json({
    result: data,
  });
});

export default router;