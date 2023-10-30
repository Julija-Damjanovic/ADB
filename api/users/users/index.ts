import { request, response, Router } from "express";
import User from "../../models/User";

const router = Router();

router.get("/", async (req: request, res: response) => {

  const data = await User.findAll();
  res.json({
    result: data,
  
  });
});

router.get("/:id", async (req: request, res: response) => {
  const data = await User.findOne({
    where: { id: req.params.id },
  });
  res.json({
    result: data,
  });
});

router.post("/", async (req: request, res: response) => {
  console.log(req.body);
  const data = await User.create(req.body);
  res.json({
    result: data,
  });
});

router.put("/:id", async (req: request, res: response) => {
  const data = await User.update(req.body, {
    where: {
      id: req.params.id,
    },
  });
  res.json({
    result: data,
  });
});

router.delete("/:id", async (req: request, res: response) => {
  const data = await User.destroy({
    where: {
      id: req.params.id,
    },
  });
  res.json({
    result: data,
  });
});

export default router;