import { request, response, Router } from "express";
import CustomerStamp from "../../models/CustomerStamp";

const router = Router();

router.get("/", async (req: request, res: response) => {
  const data = await CustomerStamp.findAll({});
  res.status(200).json(data);
});

export default router;