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
 *                 description: Set the sort order. "asc" or "desc".
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
 *           responses:
 *               200:
 *                description: The list of producrt with paginate.
 *                content:
 *                   application/json:
 *                       schema:
 *                           type: object
 *                           properties:
 *                               itemsList:
 *                                   type: array
 *                                   description: Array of documents.
 *                                   items:
 *                                       $ref: '#/components/schemas/Product'
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
 *                                   description: Object of pagination meta data.
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
        title: { $regex: title, $options: "i" },
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
