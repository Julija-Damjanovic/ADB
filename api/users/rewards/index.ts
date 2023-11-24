import { request, response, Router } from "express";
import Reward from "../../models/Reward";


const router = Router();

router.get("/", async (req: request, res: response) => {
    const data = await Reward.findAll();
    res.json({
        result: data,

    });
});

router.get("/:id", async (req: request, res: response) => {
    const data = await Reward.findOne({
        where: { id: req.params.id },
    });
    res.json({
        result: data,
    });
});

router.post("/", async (req: request, res: response) => {
    const { is_active, stamp_ammount_needed, max_use_ammount, expires } = req.body;
    const data = await Reward.create({ is_active, stamp_ammount_needed, max_use_ammount, expires });
    res.json({
        result: data,
    });
});

router.put("/:id", async (req: request, res: response) => {
    const { is_active, stamp_ammount_needed, max_use_ammount, expires } = req.body;
    const data = await Reward.update({ is_active, stamp_ammount_needed, max_use_ammount, expires }, {
        where: {
            id: req.params.id,
        },
    });
    res.json({
        result: data,
    });
});

router.delete("/:id", async (req: request, res: response) => {
    const data = await Reward.destroy({
        where: {
            id: req.params.id,
        },
    });
    res.json({
        result: data,
    });
});

export default router;