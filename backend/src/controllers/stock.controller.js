import { Stock } from "../models/stock.model.js";
import { Product } from "../models/product.model.js";
import { Shop } from "../models/shop.model.js";
import { User } from "../models/user.model.js";

// Create or Restock Product (Only Suppliers)
const restockProduct = async (req, res) => {
    try {
        const { productId, shopId, quantity, remarks } = req.body;
        const supplierId = req.user._id; // Assuming user info is available from JWT

        // Check if the user is a supplier
        const supplier = await User.findById(supplierId);
        if (supplier.role !== "supplier") {
            return res.status(403).json({ message: "Only suppliers can restock products." });
        }

        // Find or create a stock entry
        let stock = await Stock.findOne({ product: productId, shop: shopId });

        if (stock) {
            stock.quantity += quantity;
            stock.history.push({ type: "restock", quantity, remarks });
        } else {
            stock = new Stock({
                product: productId,
                shop: shopId,
                supplier: supplierId,
                quantity,
                history: [{ type: "restock", quantity, remarks }],
            });
        }

        await stock.save();
        res.status(200).json({ message: "Product restocked successfully.", stock });
    } catch (error) {
        res.status(500).json({ message: "Error restocking product.", error: error.message });
    }
};

// Update Stock on Sale or Purchase
const updateStock = async (req, res) => {
    try {
        const { productId, shopId, quantity, type, remarks } = req.body;

        const stock = await Stock.findOne({ product: productId, shop: shopId });

        if (!stock) {
            return res.status(404).json({ message: "Stock not found." });
        }

        if (type === "sale" && stock.quantity < quantity) {
            return res.status(400).json({ message: "Insufficient stock." });
        }

        stock.quantity = type === "sale" ? stock.quantity - quantity : stock.quantity + quantity;
        stock.history.push({ type, quantity, remarks });

        await stock.save();
        res.status(200).json({ message: "Stock updated successfully.", stock });
    } catch (error) {
        res.status(500).json({ message: "Error updating stock.", error: error.message });
    }
};

// Get Stock Details (with History)
const getStockDetails = async (req, res) => {
    try {
        const { productId, shopId } = req.params;

        const stock = await Stock.findOne({ product: productId, shop: shopId })
            .populate("product", "name price")
            .populate("shop", "name location")
            .populate("supplier", "fullName email");

        if (!stock) {
            return res.status(404).json({ message: "Stock not found." });
        }

        res.status(200).json(stock);
    } catch (error) {
        res.status(500).json({ message: "Error retrieving stock details.", error: error.message });
    }
};

// Get Stock History
const getStockHistory = async (req, res) => {
    try {
        const { productId, shopId } = req.params;

        const stock = await Stock.findOne({ product: productId, shop: shopId });

        if (!stock) {
            return res.status(404).json({ message: "Stock not found." });
        }

        res.status(200).json(stock.history);
    } catch (error) {
        res.status(500).json({ message: "Error retrieving stock history.", error: error.message });
    }
};

export {
    restockProduct,
    updateStock,
    getStockDetails,
    getStockHistory
};
