import { request, response, Router } from "express";
import Reward from "../../models/Reward";

const router = Router();

router.get("/:id", async (req: request, res: response) => {
    const data = await Reward.findOne({
        where: { id: req.params.id },
    });
    res.json({
        result: data,
    });
});

export default router;