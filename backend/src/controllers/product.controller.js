import { Product } from "../models/product.model.js";
import { Shop } from "../models/shop.model.js";
import { User } from "../models/user.model.js";
import mongoose from "mongoose";

// Create a new product
const createProduct = async (req, res) => {
    try {
        const { name, description, price, images, stock, category, shop, boughtFrom } = req.body;

        // Check if the shop exists
        const shopExists = await Shop.findById(shop);
        if (!shopExists) {
            return res.status(404).json({ message: "Shop not found" });
        }

        // Validate `boughtFrom` (can be a user reference or manual input)
        let boughtFromRef = boughtFrom;
        if (mongoose.Types.ObjectId.isValid(boughtFrom)) {
            const userExists = await User.findById(boughtFrom);
            if (!userExists) {
                return res.status(404).json({ message: "User not found for 'boughtFrom'" });
            }
        }

        // Create product
        const newProduct = new Product({
            name,
            description,
            price,
            images,
            stock,
            category,
            shop,
            boughtFrom: boughtFromRef,
        });

        await newProduct.save();
        res.status(201).json({ message: "Product created successfully", product: newProduct });
    } catch (error) {
        res.status(500).json({ message: "Error creating product", error: error.message });
    }
};

// Get product details by ID
const getProductDetails = async (req, res) => {
    try {
        const { productId } = req.params;
        const product = await Product.findById(productId).populate("shop", "name").exec();

        if (!product) {
            return res.status(404).json({ message: "Product not found" });
        }

        res.status(200).json(product);
    } catch (error) {
        res.status(500).json({ message: "Error fetching product details", error: error.message });
    }
};

// Update a product by ID
const updateProduct = async (req, res) => {
    try {
        const { productId } = req.params;
        const updates = req.body;

        const updatedProduct = await Product.findByIdAndUpdate(productId, updates, { new: true });

        if (!updatedProduct) {
            return res.status(404).json({ message: "Product not found" });
        }

        res.status(200).json({ message: "Product updated successfully", product: updatedProduct });
    } catch (error) {
        res.status(500).json({ message: "Error updating product", error: error.message });
    }
};

// Delete a product by ID
const deleteProduct = async (req, res) => {
    try {
        const { productId } = req.params;
        const deletedProduct = await Product.findByIdAndDelete(productId);

        if (!deletedProduct) {
            return res.status(404).json({ message: "Product not found" });
        }

        res.status(200).json({ message: "Product deleted successfully" });
    } catch (error) {
        res.status(500).json({ message: "Error deleting product", error: error.message });
    }
};

// Exporting the controller functions
export {
    createProduct,
    getProductDetails,
    updateProduct,
    deleteProduct
};
