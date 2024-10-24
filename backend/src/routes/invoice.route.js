import { Router } from "express";
import {
    createInvoice,
    getInvoiceById,
    updateInvoice,
    deleteInvoice,
} from "../controllers/invoice.controller.js";
import { verifyJWT } from "../middlewares/auth.middlewares.js";

const router = Router();

// Secured Routes for Invoice Management
router.route("/")
    .post(verifyJWT, createInvoice)  // Create a new invoice

router.route("/:id")
    .get(verifyJWT, getInvoiceById)  // Get specific invoice by ID
    .patch(verifyJWT, updateInvoice) // Update invoice by ID
    .delete(verifyJWT, deleteInvoice); // Delete invoice by ID

export default router;
