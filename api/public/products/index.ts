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
  include: ProductCategory,
    
  });
  res.json({
    result: data,
  });
});

router.post("/", async (req: request, res: response) => {
  console.log(req.body);
  const data = await Product.create(req.body);
  res.json({
    result: data,
    
  });
});

router.put("/:id", async (req: request, res: response) => {
  const data = await Product.update(req.body, {
    where: {
      id: req.params.id,
    },
  });
  res.json({
    result: data,
  });
});

router.delete("/:id", async (req: request, res: response) => {
  const data = await Product.destroy({
    where: {
      id: req.params.id,
    },
  });
  res.json({
    result: data,
  });
});

export default router;