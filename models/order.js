const mongoose = require("mongoose");

const ordersScheme = new mongoose.Schema(
    {
        userId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "users",
        },
        products: [
            {
                type: mongoose.Schema.Types.ObjectId,
                ref: "products",
            },
        ],
        createdDate: {
            type: Date,
            default: Date.now(),
        },
        status: {
            type: String,
            enum: ["Processing", "Completed", "Canceled", "Pendding"],
        },
    },
    { timestamps: true }
);

module.exports = mongoose.model("order", ordersScheme);
