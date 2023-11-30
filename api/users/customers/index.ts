import { request, response, Router } from "express";
import Customer from "../../models/Customer";
import CustomerStamp from "../../models/CustomerStamp";
import Reward from "../../models/Reward";

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

  res.status(200).json(JSON.parse(JSON.stringify(data)));
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

router.post("/", async (req: request, res: response) => {
  const {
    id,
    username,
    email,
    password,
    customerStamps: [
      //@ts-ignore
      { ammount, CustomerId, RewardId,
        Reward: { idR, is_active, stamp_ammount_needed, max_use_ammount, expires } }
    ],
  } = req.body;
  const customer = Customer.create({
    id,
    username,
    email,
    password,
    customerStamps: [
      {
        ammount, CustomerId, RewardId,
        Reward: { idR, is_active, stamp_ammount_needed, max_use_ammount, expires }
      }
    ]
  }, {
    include: [{
      model: CustomerStamp
    }]
  });

  const customerStamp = CustomerStamp.create({
    ammount, CustomerId, RewardId,
    Reward: { idR, is_active, stamp_ammount_needed, max_use_ammount, expires }
  },
    {
      include: [{
        model: Reward
      }]
    });

  res.json({
    result: ammount,
  });
});

router.put("/:id", async (req: request, res: response) => {
  const data = await Customer.update(req.body, {
    where: {
      id: req.params.id,
      include: {
        model: CustomerStamp,
        include: [{
          model: Reward,
        }]
      }
    },
  });
  res.json({
    result: data,
  });
});

router.delete("/:id", async (req: request, res: response) => {
  const data = await Customer.destroy({
    where: {
      id: req.params.id,
      include: {
        model: CustomerStamp,
        include: [{
          model: Reward,
        }]
      }
    },
  });
  res.json({
    result: data,
  });
});

export default router;