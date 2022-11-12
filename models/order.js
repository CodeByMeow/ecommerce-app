const mongoose = require("mongoose");
const paginate = require("mongoose-paginate-v2");

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
 *                           type: string
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
        products: [
            {
                type: mongoose.Schema.Types.ObjectId,
                ref: "products",
            },
        ],
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
