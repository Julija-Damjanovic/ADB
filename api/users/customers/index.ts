import { request, response, Router } from "express";
import Customer from "../../models/Customer";
import CustomerStamp from "../../models/CustomerStamp";
import Reward from "../../models/Reward";
import Attribute from "models/Attributes";

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
  console.log(req.body);
  const data = await Customer.create(req.body,
    {
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