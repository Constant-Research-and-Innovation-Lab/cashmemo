import { Router } from "express";
import {
    createProduct,
    getProductDetails,
    updateProduct,
    deleteProduct,
    buyProduct,
    sellProduct
} from "../controllers/product.controller.js";
import { verifyJWT } from "../middlewares/auth.middlewares.js";

const router = Router();

// Product CRUD Routes
router.post("/", verifyJWT, createProduct);
router.get("/:productId", verifyJWT, getProductDetails);
router.patch("/:productId", verifyJWT, updateProduct);
router.delete("/:productId", verifyJWT, deleteProduct);

// Buy Product (updates stock)
router.post("/buy", verifyJWT, buyProduct);

// Sell Product (updates stock)
router.post("/sell", verifyJWT, sellProduct);

export default router;
