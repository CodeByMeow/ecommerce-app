const mongoose = require("mongoose");
const slugify = require("slugify");
const paginate = require("mongoose-paginate-v2");

/**
 * @swagger
 *  components:
 *       schemas:
 *           Product:
 *             type: object
 *             required:
 *               - category
 *               - title
 *               - sortDesc
 *               - image_url
 *             properties:
 *                   category:
 *                       type: string
 *                   title:
 *                       type: string
 *                   sortDesc:
 *                       type: string
 *                   longDesc:
 *                       type: string
 *                   stock:
 *                       type: object
 *                       properties:
 *                           quantity:
 *                               type: int32
 *                               default: 0
 *                           remain:
 *                               type: int32
 *                               default: 0
 *                   color:
 *                       type: array
 *                       items:
 *                           type: string
 *                   slug:
 *                      type: string
 *                   price:
 *                      type: int32
 *                      default: 0
 *                   sale_price:
 *                      type: int32
 *                      default: 0
 *                   total_salling:
 *                      type: int32
 *                   image_url:
 *                       type: string
 *                   galerry_image:
 *                       type: array
 *                       items:
 *                           type: string
 *                   isDeleted:
 *                       type: boolean
 *                       default: false
 *
 */

const productSchema = new mongoose.Schema({
    category: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "categories",
    },
    title: {
        type: String,
        require: true,
    },
    sortDesc: {
        type: String,
        require: true,
    },
    longDesc: {
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
            type: String,
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
    isDeleted: {
        type: Boolean,
        default: false,
    },
});

productSchema.plugin(paginate);

module.exports = mongoose.model("product", productSchema);
