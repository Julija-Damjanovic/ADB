import { request, response, Router } from "express";
import Maker from "../../models/Maker";



const router = Router();

router.get("/", async (req: request, res: response) => {
  const data = await Maker.findAll();

  res.json({
    message: "Welcome to API USERS MAKERS ALL",
    result: data,
  });
});

router.get("/:id", async (req: request, res: response) => {
  const data = await Maker.findOne({
    where: { id: req.params.id },
    //include:Maker,
  });

  res.json({
    message: "Welcome to API USERS MAKERS ID:" + req.params.id,
    result: data,
  });
});

router.post("/", async (req: request, res: response) => {
  const { name, theme, free_delivery_min_ammount, VAT_level, is_active, description, comission } = req.body;
  const data = await Maker.create({ name, theme, free_delivery_min_ammount, VAT_level, is_active, description, comission });
  res.json({
    result: data,
  });
});

router.put("/:id", async (req: request, res: response) => {
  const { name, theme, free_delivery_min_ammount, VAT_level, is_active, description, comission } = req.body;

  const data = await Maker.update({ name, theme, free_delivery_min_ammount, VAT_level, is_active, description, comission }, {
    where: { id: req.params.id, },
  });

  res.json({
    result: data,
  });
});

router.delete("/:id", async (req: request, res: response) => {
  const data = await Maker.destroy({
    where: {
      id: req.params.id,
    },
  });

  res.json({
    message: "DELETE API USERS MAKERS ID:" + req.params.id,
    result: data,
  });
});

export default router;
