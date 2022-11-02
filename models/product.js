const mongoose = require("mongoose");
const slugify = require("slugify");
const paginate = require("mongoose-paginate-v2");

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
    stock: {
        quantity: {
            type: Number,
            default: 0,
        },
        remain: {
            type: Number,
            default: 0,
        },
    },
    color: [
        {
            name: String,
            require: true,
        },
    ],
    slug: {
        type: String,
        default: function () {
            return slugify(this.title);
        },
    },
    price: {
        type: Number,
        default: 0,
    },
    sale_price: {
        type: Number,
    },
    total_selling: {
        type: Number,
        default: 0,
    },
    image_url: {
        type: String,
        require: true,
    },
    gallery_image: [{ type: String }],
});

productSchema.plugin(paginate);

module.exports = mongoose.model("product", productSchema);
