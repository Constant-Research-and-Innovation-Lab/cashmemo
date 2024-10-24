import { Router } from "express";
import {
    createInvoice,
    getInvoiceById,
    getAllInvoices,
    updateInvoice,
    deleteInvoice,
} from "../controllers/invoice.controller.js";
import { verifyJWT } from "../middlewares/auth.middlewares.js";

const router = Router();

// Secured Routes for Invoice Management
router.route("/")
    .post(verifyJWT, createInvoice)  // Create a new invoice
    .get(verifyJWT, getAllInvoices); // Get all invoices

router.route("/:id")
    .get(verifyJWT, getInvoiceById)  // Get specific invoice by ID
    .patch(verifyJWT, updateInvoice) // Update invoice by ID
    .delete(verifyJWT, deleteInvoice); // Delete invoice by ID

export default router;
