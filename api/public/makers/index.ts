import { request, response, Router } from "express";

const router = Router();

router.get("/", (req: request, res: response) => {
  res.json({
    message: "Welcome to API PUBLIC MAKERS ALL",
  });
});

router.get("/:productId", (req: request, res: response) => {
  res.json({
    message: "Welcome to API PUBLIC MAKERS ID:" + req.params.productId,
  });
});

router.post("/:productId", (req: request, res: response) => {
  res.json({
    message: "Welcome to POST API PUBLIC MAKERS ID:" + req.params.productId,
  });
});

router.put("/", (req: request, res: response) => {
  res.json({
    message: "Welcome to PUT API PUBLIC MAKERS ID:" + req.params.productId,
  });
});

router.delete("/:productId", (req: request, res: response) => {
  res.json({
    message: "Welcome to DELETE API PUBLIC MAKERS ID:" + req.params.productId,
  });
});

export default router;