const express = require("express");
const router = express.Router();

const validateInput = require("../middlewares/validate-input");
const { verifyUserRole } = require("../middlewares/verifyUserRole");
const categorySchema = require("../validateSchema/categorySchema.json");
const categoryController = require("../controllers/categoryController");
const verifyToken = require("../middlewares/verify-token");

/**
 * @swagger
 *   /category:
 *       post:
 *           tags:
 *               - Category
 *           summary: Create new category.
 *           requestBody:
 *             content:
 *               application/json:
 *                   schema:
 *                       $ref: '#/components/schemas/Category'
 *           responses:
 *               200:
 *                   description: Created category.
 *                   content:
 *                       application/json:
 *                           schema:
 *                               $ref: '#/components/schemas/Category'
 *               401:
 *                   $ref: '#/components/responses/401'
 *               403:
 *                   $ref: '#/components/responses/403'
 */
router.post(
    "/",
    verifyToken,
    verifyUserRole,
    validateInput(categorySchema),
    async (req, res) => {
        const { title, shortDesc, longDesc, image_url } = req.body;
        const newCategory = {
            title,
            shortDesc,
            longDesc,
            image_url,
        };

        try {
            const categoryCreated = await categoryController.create(
                newCategory
            );
            return res.json({
                msg: "Create category successfully",
                data: categoryCreated,
            });
        } catch (error) {
            throw new Error(error.message);
        }
    }
);
/**
 * @swagger
 *   /category:
 *       patch:
 *           tags:
 *               - Category
 *           summary: Update category.
 *           requestBody:
 *               content:
 *                   application/json:
 *                       schema:
 *                           type: object
 *                           required:
 *                               - id
 *                           properties:
 *                                id:
 *                                   type: string
 *                                   example: 63675fcb93f5623d2b684b72
 *                                title:
 *                                   type: string
 *                                   example: Redme
 *                                sortDesc:
 *                                   type: string
 *                                   example: This is a sortDesc.
 *                                longDesc:
 *                                   type: string
 *                                   example: This is a long description.
 *                                image_url:
 *                                   type: string
 *                                   example: https://images.unsplash.com/photo-1602918955248-d1bbfcbfae38?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8Zmxhc2h8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60
 *                                isDeleted:
 *                                    type: boolean
 *                                    default: false
 *           responses:
 *               200:
 *                   description: Category updated.
 *                   content:
 *                       application/json:
 *                           schema:
 *                               $ref: '#/components/schemas/Category'
 *               401:
 *                   $ref: '#/components/responses/401'
 *               403:
 *                   $ref: '#/components/responses/403'
 */
router.patch(
    "/",
    verifyToken,
    verifyUserRole,
    validateInput(categorySchema),
    async (req, res) => {
        const {
            id,
            title,
            sortDesc,
            longDesc,
            image_url,
            isDeleted = false,
        } = req.body;
        if (!id) {
            return res.status(400).json({
                msg: "Missing category id",
            });
        }

        try {
            const updated = await categoryController.updateById(id, {
                title,
                sortDesc,
                longDesc,
                image_url,
                isDeleted,
            });

            return res.json({
                msg: "Category updated successfully",
                data: updated,
            });
        } catch (error) {
            throw new Error(error.message);
        }
    }
);
/**
 * @swagger
 *   /category:
 *       get:
 *           tags:
 *               - Category
 *           summary: Get a category list.
 *           responses:
 *               200:
 *                   content:
 *                       application/json:
 *                           schema:
 *                               type: array
 *                               items:
 *                                      $ref: '#/components/schemas/Category'
 *               404:
 *                   $ref: '#/components/responses/404'
 */
router.get("/", async (_req, res) => {
    const categoryList = await categoryController.getAll();

    if (categoryList.length > 0) {
        return res.json({
            msg: "Get categories list successfully!",
            data: categoryList,
        });
    } else {
        return res.status(404).json({
            msg: "Not found any resource.",
        });
    }
});

module.exports = router;
