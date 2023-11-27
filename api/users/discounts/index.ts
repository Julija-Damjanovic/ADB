import { request, response, Router } from "express";
import Discount from "../../models/Discount";

const router = Router();

router.get("/", async (req: request, res: response) => {
    const data = await Discount.findAll();

    res.json({
        message: "All Discounts",
        result: data,
    });
});

router.get("/:id", async (req: request, res: response) => {
    const data = await Discount.findOne({
        where: { id: req.params.id },
    });

    res.json({
        result: data,
    });
});

router.post("/", async (req: request, res: response) => {
    const { is_active, max_use_ammount, discount_type, discount_usage, ammount, expires,MakerId } = req.body;
    const data = await Discount.create({ is_active, max_use_ammount, discount_type, discount_usage, ammount, expires,MakerId});
    res.json({
        result: data,
    });
});

router.put("/:id", async (req: request, res: response) => {
    const { is_active, max_use_ammount, discount_type, discount_usage, ammount, expires,MakerId } = req.body;

    const data = await Discount.update({ is_active, max_use_ammount, discount_type, discount_usage, ammount, expires,MakerId}, {
        where: { id: req.params.id, },
    });

    res.json({
        message: 'update Discount with id' + req.params.id,
        result: data,
    });
});

router.delete("/:id", async (req: request, res: response) => {
    const data = await Discount.destroy({
        where: {
            id: req.params.id,
        },
    });
    res.json({
        message: "DELETE DIscount with ID:" + req.params.id,
        result: data,
    });
});

export default router;