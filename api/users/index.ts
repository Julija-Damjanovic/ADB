import { Router } from "express";
import ProductsRoutes from "./products";
import MakersRoutes from "./makers";
import UsersRoutes from "./users";
import CustomersRoutes from "./customers";
import AttributesRoutes from "./attributes";
import productCategory from "./products_category";
const router = Router();

router.use("/products", ProductsRoutes);
router.use("/makers", MakersRoutes);
router.use("/users", UsersRoutes);
router.use("/customers", CustomersRoutes);
router.use("/productCategories", productCategory);
router.use("/attributes", AttributesRoutes);
// add other routes...

export default router;