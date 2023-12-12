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

router.post("/1", async (req: request, res: response) => {
  const { username, email, password, RewardId, max_use_ammount } = req.body;
  const customer = await Customer.create({
    username,
    email,
    password
  }) as any;
  const stamp = await customer.createCustomerStamp({ RewardId });

  const reward = await stamp.createReward({ max_use_ammount });

  res.json({ customer, stamp, reward });
});

router.post("/2", async (req: request, res: response) => {
  const customer = await Customer.findOne({
    where: { id: req.authEntety.user_id }
  }) as any;
  const stamp = await CustomerStamp.findOne({ where: { CustomerId: null } }) as any;
  customer.addCustomerStamp(stamp);
  res.json({ message: "add to customer " + customer.username });
});

router.post("/3", async (req: request, res: response) => {

  const { CustomerId, RewardId, ammount } = req.body;
  const customer = await Customer.findOne({
    where: { id: req.authEntety.user_id }
  }) as any;
  const stamp = await customer.createCustomerStamp({ RewardId, ammount, where: { CustomerId: customer.id } }) as any;
  res.json({ stamp });
});

router.post("/4", async (req: request, res: response) => {

  const { max_use_ammount, CustomerId } = req.body;
  const reward = await Reward.create({
    max_use_ammount
  }) as any;
  const stamp = reward.createCustomerStamp({ CustomerId }) as any;

  res.json({ reward, CustomerId });
});

router.post("/5", async (req: request, res: response) => {
  //hooks
  Customer.beforeCreate(customer => {
    //@ts-ignore
    if (customer.email == "boss@test.com") {
      throw new Error("this is boss's email !");
    }
    //@ts-ignore
    if (customer.is_active == false) {
      throw new Error("customer must be active!");
    }
  });
  const { username, email, password, is_active } = req.body;

  const customer = await Customer.create({
    username,
    email,
    password,
    is_active
  }) as any;
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
    },
    //Paranoid(hard-delete)
    //force:true,
  });
  res.json({
    result: data,
  });
});


//deleteRewards(deleteStamps=>RewardId)
router.delete("/1", async (req: request, res: response) => {
  const { id } = req.body;
  const reward = await Reward.findOne({
    where: { id: id }
  }) as any;
  const stamp = await CustomerStamp.destroy({ where: { RewardId: reward.id } }) as any;
  res.json({ stamp });
});

//deleteCustomer(deleteStamp=>CustomerId)
router.delete("/2", async (req: request, res: response) => {
  const { id } = req.body;
  const customer = await Customer.findOne({
    where: { id: id }
  }) as any;
  const stamp = await CustomerStamp.destroy({ where: { CustomerId: customer.id } }) as any;
  res.json({ stamp });
});

export default router;