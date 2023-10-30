import { request, response, Router } from "express";
import Product from "../../models/Product";
import ProductCategory from "../../models/ProductCategory";

const router = Router();

router.get("/", async (req: request, res: response) => {
  const data = await Product.findAll();
  res.json({
    result: data,
  });
});

router.get("/:id", async (req: request, res: response) => {
  const data = await Product.findOne({
    where: { id: req.params.id },
    include: ProductCategory
  });
  res.json({
    result: data,
  });
});

export default router;