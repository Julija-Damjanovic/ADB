import { request, response, Router } from "express";
import Reward from "../../models/Reward";

const router = Router();

router.get("/", async (req: request, res: response) => {
    const data = await Reward.findAll();
    res.json({
        result: data
    });
});

export default router;