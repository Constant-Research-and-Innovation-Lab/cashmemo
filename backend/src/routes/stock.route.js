import { Router } from "express";
import { restockProduct, updateStock, getStockDetails, getStockHistory } from "../controllers/stock.controller.js";
import { verifyJWT } from "../middlewares/auth.middlewares.js";

const router = Router();

// Restock Product (Only suppliers)
router.post("/restock", verifyJWT, restockProduct);

// Update Stock on Sale or Purchase
router.patch("/update", verifyJWT, updateStock);

// Get Stock Details (with product, shop, and supplier info)
router.get("/:productId/:shopId", verifyJWT, getStockDetails);

// Get Stock History
router.get("/:productId/:shopId/history", verifyJWT, getStockHistory);

export default router;
