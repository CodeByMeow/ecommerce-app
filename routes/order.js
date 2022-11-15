const express = require("express");
const router = express.Router();
const verifyToken = require("../middlewares/verifyToken");
const OrderController = require("../controllers/orderController");
const { validObject } = require("../utils/object");
const validateInput = require("../middlewares/validateInput");
const orderSchema = require("../validateSchema/orderSchema.json");

router.use(verifyToken);

/**
 *  @swagger
 *   /account/orders:
 *       get:
 *           tags:
 *               - Account
 *           summary: Get the list orders of account.
 *           parameters:
 *               - in: query
 *                 name: page
 *                 schema:
 *                   type: integer
 *                   default: 1
 *               - in: query
 *                 name: perpage
 *                 schema:
 *                   type: integer
 *                   default: 10
 *           responses:
 *               200:
 *                   description: Returns the list orders.
 *                   content:
 *                       application/json:
 *                           schema:
 *                            type: object
 *                            properties:
 *                               itemsList:
 *                                   type: array
 *                                   description: Array of documents.
 *                                   items:
 *                                       $ref: '#/components/schemas/Order'
 *                               itemCount:
 *                                   type: number
 *                                   description: Total number of documents in collection that match the query.
 *                                   example: 10
 *                               perPage:
 *                                   type: number
 *                                   description: Limit that was used.
 *                                   example: 10
 *                               hasPrevPage:
 *                                   type: boolean
 *                                   description: Available of prev page.
 *                               hasNextPage:
 *                                   type: boolean
 *                                   description: Available of next page.
 *                               page:
 *                                   type: number
 *                                   description: Current page number.
 *                                   example: 1
 *                               pageCount:
 *                                   type: number
 *                                   description: Total number of pages.
 *                                   example: 1
 *                               prev:
 *                                   type: number
 *                                   description: Previous page number if available or NULL.
 *                                   example: 1
 *                               next:
 *                                   type: number
 *                                   description: Next page number if available or NULL.
 *                                   example: 2
 *                               slNo:
 *                                   type: number
 *                                   description: The starting index/serial/chronological number of first document in current page.
 *                               paginator:
 *                                   type: object
 *
 */
router.get("/", async (req, res) => {
    const { page, perpage } = req.params;
    const { user_id } = req.decoded;

    const options = validObject({
        page,
        perpage,
    });
    try {
        const orderList = await OrderController.getList(user_id, options);
        return res.json({
            msg: "Get the list of orders successfully.",
            data: orderList,
        });
    } catch (err) {
        throw new Error(err.message);
    }
});
/**
 * @swagger
 *   /account/orders:
 *       post:
 *           tags:
 *               - Account
 *           summary: Creates a new order.
 *           requestBody:
 *               required: true
 *               content:
 *                   application/json:
 *                       schema:
 *                           type: object
 *                           properties:
 *                               userId:
 *                                   type: string
 *                               products:
 *                                   type: array
 *                                   items:
 *                                       $ref: '#/components/schemas/Product'
 *           responses:
 *               201:
 *                   description: Created a new order.
 *                   content:
 *                       application/json:
 *                           schema:
 *                              $ref: '#/components/schemas/Order'
 *
 */
router.post("/", validateInput(orderSchema), async (req, res) => {
    const { user_id } = req.decoded;
    const { products } = req.body;
    if (!products || products.length === 0) {
        return res.status(400).json({
            msg: "Not have any product in your order.",
        });
    }

    try {
        const newOrder = await OrderController.create(user_id, products);
        return res.status(201).json({
            msg: "New order created successfully.",
            data: newOrder,
        });
    } catch (err) {
        throw new Error(err.message);
    }
});

module.exports = router;
