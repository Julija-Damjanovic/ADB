import { request, response, Router } from "express";

const router = Router();

router.get("/", (req: request, res: response) => {
  res.json({
    message: "Welcome to API CUSTOMERS MAKERS ALL",
  });
});

router.get("/:productId", (req: request, res: response) => {
  res.json({
    message: "Welcome to API CUSTOMERS MAKERS ID:" + req.params.productId,
  });
});

router.post("/:productId", (req: request, res: response) => {
  res.json({
    message: "Welcome to POST API CUSTOMERS MAKERS ID:" + req.params.productId,
  });
});

router.put("/", (req: request, res: response) => {
  res.json({
    message: "Welcome to PUT API CUSTOMERS MAKERS ID:" + req.params.productId,
  });
});

router.delete("/:productId", (req: request, res: response) => {
  res.json({
    message: "Welcome to DELETE API CUSTOMERS MAKERS ID:" + req.params.productId,
  });
});

export default router;
