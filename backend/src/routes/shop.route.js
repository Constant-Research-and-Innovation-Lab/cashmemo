import express from "express";
import {
    createShop,
    getShopDetails,
    updateShop,
    deleteShop
} from "../controllers/shop.controller.js";
import { verifyJWT } from "../middlewares/auth.middlewares.js";
import multer from "multer";

const router = express.Router();
const upload = multer({ dest: 'uploads/' }); // Setup for file uploads

router.post("/", verifyJWT, upload.single('avatar'), createShop); // Create shop
router.get("/:shopId", getShopDetails); // Get shop details
router.put("/:shopId", verifyJWT, upload.single('avatar'), updateShop); // Update shop
router.delete("/:shopId", verifyJWT, deleteShop); // Delete shop

export default router;
