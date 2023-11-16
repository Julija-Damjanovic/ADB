import { request, response, Router } from "express";
import CustomerStamp from "../../models/CustomerStamp";
import auth from "../../auth"
import Customer from "../../models/Customer";


const router = Router();
/*
router.get("/", async (req: request, res: response) => {
  const data = await CustomerStamp.findAll();
  res.json({
    result: data,
 
  });
});*/

router.get("/", auth, async (req: request, res: response) => {
  const customer = (await Customer.findOne({
    where: { id: req.authEntety.user_id },
  })) as any;

  const data = await CustomerStamp.findOne({
    where: { CustomerId: customer.id },


  });


  res.status(200).json(data);
});



router.get("/:id", async (req: request, res: response) => {
  const data = await CustomerStamp.findOne({
    where: { id: req.params.id },
    include: CustomerStamp,

  });
  res.json({
    result: data,
  });
});

router.post("/", async (req: request, res: response) => {
  console.log(req.body);
  const data = await CustomerStamp.create(req.body);
  res.json({
    result: data,

  });
});

router.put("/:id", async (req: request, res: response) => {
  const data = await CustomerStamp.update(req.body, {
    where: {
      id: req.params.id,
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