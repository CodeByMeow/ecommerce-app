const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
    category: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "categories",
    },
    title: {
        type: String,
        require: true,
    },
    shortDesc: {
        type: String,
        require: true,
    },
    fullDesc: {
        type: String,
    },
    quantity: {
        type: Number,
        default: 1,
    },
    color: [
        {
            name: String,
            require: true,
        },
    ],
});

module.exports = mongoose.model("product", productSchema);
