const express = require("express");
const router = express.Router();

const validateInput = require("../middlewares/validate-input");
const productSchema = require("../validateSchema/productSchema.json");
const verifyToken = require("../middlewares/verify-token");
const ProductController = require("../controllers/productController");

/**
 * @swagger
 *   /products:
 *       post:
 *           tags:
 *               - Products
 *           summary: Create new product.
 *           requestBody:
 *               content:
 *                application/json:
 *                   schema:
 *                       $ref: '#/components/schemas/Product'
 *           responses:
 *               201:
 *                   description: New product created.
 *                   content:
 *                       application/json:
 *                           schema:
 *                               $ref: '#/components/schemas/Product'
 */
router.post(
    "/",
    verifyToken,
    validateInput(productSchema),
    async (req, res) => {
        const product = req.body;
        try {
            const productCreated = await ProductController.create(product);

            return res.status(201).json({
                msg: "Product created successfully",
                data: productCreated,
            });
        } catch (err) {
            throw new Error(err.message);
        }
    }
);

module.exports = router;
