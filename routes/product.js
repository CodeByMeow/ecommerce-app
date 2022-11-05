const express = require("express");
const router = express.Router();

const validateInput = require("../middlewares/validate-input");
const productSchema = require("../validateSchema/productSchema.json");
const verifyToken = require("../middlewares/verify-token");
const categoryController = require("../controllers/categoryController");
const ProductController = require("../controllers/productController");
const { validObject } = require("../utils/object");

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
/**
 * @swagger
 *   /products:
 *       get:
 *           tags:
 *               - Products
 *           summary: Get list product with paginate and query parameters.
 *           parameters:
 *               - in: query
 *                 name: page
 *                 schema:
 *                   type: integer
 *                   default: 1
 *                 description: The number of items to skip.
 *               - in: query
 *                 name: perpage
 *                 schema:
 *                   type: integer
 *                   default: 10
 *                 description: The number of items to return.
 *               - in: query
 *                 name: sort
 *                 schema:
 *                   type: string
 *                   default: desc
 *                 description: Set the sort order.
 *               - in: query
 *                 name: title
 *                 schema:
 *                   type: string
 *                 description: The title of product that need to search.
 *               - in: query
 *                 name: category
 *                 schema:
 *                   type: string
 *                 description: The cateogry's slug.
 *               - in: query
 *                 name: sortBy
 *                 schema:
 *                   type: string
 *                   default: price
 *                 description: Field to sorting. One in ["price", "date", "selling"].
 *
 *
 */
router.get("/", async (req, res) => {
    const { page, perpage, sort = "desc", title, category } = req.query;
    let categoryId;
    if (category) {
        const categoryRes = await categoryController.findBySlug(category);
        if (!categoryRes)
            return res.status(404).json({
                msg: "Not found",
            });

        categoryId = categoryRes._id;
    }
    let { sortBy = "price" } = req.query;
    const query = validObject({
        categoryId,
        title,
        isDeleted: false,
    });
    const validSort = {
        price: "price",
        date: "createdAt",
        selling: "total_selling",
    };
    sortBy = validSort[sortBy] ? validSort[sortBy] : validSort.price;
    const options = validObject({
        page,
        limit: perpage,
        select: "-isDeleted",
        sort: [[sortBy, sort]],
    });
    const productList = await ProductController.getList(query, options);

    return res.json({
        msg: "The product list",
        data: productList,
    });
});

module.exports = router;
