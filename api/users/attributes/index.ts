import { request, response, Router } from "express";
import Attribute from "../../models/Attributes";

import Product from "../../models/Product";

const router = Router();

router.get("/", async (req: request, res: response) => {
  const data = await Attribute.findAll();
  res.json({
    result: data,
  });
});

router.get("/:id", async (req: request, res: response) => {
  const data = await Attribute.findOne({
    where: { id: req.params.id },
   //include: Product,
  });
  res.json({
    result: data,
  });
});

router.post("/", async (req: request, res: response) => {
  console.log(req.body);
  const data = await Attribute.create(req.body);
  res.json({
    result: data,
  });
});

router.put("/:id", async (req: request, res: response) => {
  const data = await Attribute.update(req.body, {
    where: {
      id: req.params.id,
    },
  });
  res.json({
    result: data,
  });
});

router.delete("/:id", async (req: request, res: response) => {
  const data = await Attribute.destroy({
    where: {
      id: req.params.id,
    },
  });
  res.json({
    result: data,
  });
});

export default router;