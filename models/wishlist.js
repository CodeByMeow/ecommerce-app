const mongoose = require("mongoose");

const wishlistSchema = new mongoose.Schema(
    {
        userId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "users",
        },
        product: {
            type: [
                {
                    type: mongoose.Schema.Types.ObjectId,
                    ref: "products",
                },
            ],
        },
    },
    { timestamps: true }
);

module.exports = mongoose.model("wishlist", wishlistSchema);
