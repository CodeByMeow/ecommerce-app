const mongoose = require("mongoose");
const paginate = require("mongoose-paginate-v2");
const product = require("./product").productSchema;

/**
 * @swagger
 *   components:
 *       schemas:
 *           Order:
 *               type: object
 *               required:
 *                   - userId
 *                   - products
 *               properties:
 *                   userId:
 *                       type: string
 *                   products:
 *                       type: array
 *                       items:
 *                           $ref: '#/components/schemas/Product'
 *                   createdAt:
 *                       type: string
 *                       format: date-time
 *                       readOnly: true
 *                   updatedAt:
 *                       type: string
 *                       format: date-time
 *                       readOnly: true
 */
const ordersScheme = new mongoose.Schema(
    {
        userId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "users",
        },
        products: [product],
        status: {
            type: String,
            enum: ["Processing", "Completed", "Canceled", "Pendding"],
            default: "Processing",
        },
    },
    { timestamps: true }
);
ordersScheme.plugin(paginate);
module.exports = mongoose.model("order", ordersScheme);
