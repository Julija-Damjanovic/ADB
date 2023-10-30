import { request, response, Router } from "express";
import ProductCategory from "../../models/ProductCategory";

const router = Router();

router.get("/", async (req: request, res: response) => {
  const data = await ProductCategory.findAll();
  res.json({
    result: data,
  });
});

router.get("/:id", async (req: request, res: response) => {
  const data = await ProductCategory.findOne({
    where: { id: req.params.id },
  });
  res.json({
    result: data,
  });
});

router.post("/", async (req: request, res: response) => {
  console.log(req.body);
  const data = await ProductCategory.create(req.body);
  res.json({
    result: data,
  });
});

router.put("/:id", async (req: request, res: response) => {
  const data = await ProductCategory.update(req.body, {
    where: {
      id: req.params.id,
    },
  });
  res.json({
    result: data,
  });
});

router.delete("/:id", async (req: request, res: response) => {
  const data = await ProductCategory.destroy({
    where: {
      id: req.params.id,
    },
  });
  res.json({
    result: data,
  });
});

export default router;