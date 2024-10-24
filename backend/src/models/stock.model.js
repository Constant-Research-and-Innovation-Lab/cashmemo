import mongoose from "mongoose";
const { Schema, model } = mongoose;

const stockSchema = new Schema(
    {
        product: {
            type: Schema.Types.ObjectId,
            ref: "Product",
            required: true,
        },
        shop: {
            type: Schema.Types.ObjectId,
            ref: "Shop",
            required: true,
        },
        supplier: {
            type: Schema.Types.ObjectId,
            ref: "User", // Only suppliers can restock products
            required: true,
        },
        quantity: {
            type: Number,
            required: true,
            min: 0, // Quantity can't be negative
        },
        lastUpdated: {
            type: Date,
            default: Date.now,
        },
        history: [
            {
                type: {
                    type: String,
                    enum: ["purchase", "sale", "restock"],
                    required: true
                },
                quantity: { type: Number, required: true },
                date: { type: Date, default: Date.now },
                remarks: { type: String, trim: true }, // Optional notes
            },
        ],
    },
    {
        timestamps: true,
    }
);

export const Stock = model("Stock", stockSchema);
