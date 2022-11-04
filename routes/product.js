const express = require("express");
const router = express.Router();

const validateInput = require("../middlewares/validate-input");
const productSchema = require("../validateSchema/productSchema.json");
const verifyToken = require("../middlewares/verify-token");
const ProductController = require("../controllers/productController");

router.post(
    "/",
    verifyToken,
    validateInput(productSchema),
    async (req, res) => {
        const { quantity, ...rest } = req.body;
        const product = { ...rest, stock: { quantity } };
        try {
            const productCreated = await ProductController.create(product);

            return res.status(201).json({
                msg: "Product created successfully",
                data: productCreated,
            });
        } catch (err) {
            throw new Error(err.message);
        }

        return res.send(req.body);
    }
);

module.exports = router;
