import { request, response, Router } from "express";
import Customer from "../../models/Customer";

const router = Router();

router.get("/", async (req: request, res: response) => {
  const data = await Customer.findAll();
  res.json({
    result: data,
  });
});

router.get("/:id", async (req: request, res: response) => {
  const data = await Customer.findOne({
    where: { id: req.params.id },
  });
  res.json({
    result: data,
  });
});

router.post("/", async (req: request, res: response) => {
  console.log(req.body);
  const data = await Customer.create(req.body);
  res.json({
    result: data,
  });
});

router.put("/:id", async (req: request, res: response) => {
  const data = await Customer.update(req.body, {
    where: {
      id: req.params.id,
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
  });
  res.json({
    result: data,
  });
});

export default router;