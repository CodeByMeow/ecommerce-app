const express = require("express");
const router = express.Router();

const validateInput = require("../middlewares/validate-input");
const categorySchema = require("../validateSchema/categorySchema.json");
const categoryController = require("../controllers/categoryController");
const verifyToken = require("../middlewares/verify-token");

router.use(verifyToken);

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
 */
router.post("/", validateInput(categorySchema), async (req, res) => {
    const { title, shortDesc, longDesc, image_url } = req.body;
    const newCategory = {
        title,
        shortDesc,
        longDesc,
        image_url,
    };

    try {
        const categoryCreated = await categoryController.create(newCategory);
        return res.json({
            msg: "Create category successfully",
            data: categoryCreated,
        });
    } catch (error) {
        throw new Error(error.message);
    }
});
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
 *                                title:
 *                                   type: string
 *                                sortDesc:
 *                                   type: string
 *                                longDesc:
 *                                   type: string
 *                                image_url:
 *                                   type: string
 */
router.patch("/", validateInput(categorySchema), async (req, res) => {
    const { id, title, sortDesc, longDesc, image_url } = req.body;
    if (!id) {
        return res.status(400).json({
            msg: "missing id of category",
        });
    }

    try {
        const updated = await categoryController.updateById(id, {
            title,
            sortDesc,
            longDesc,
            image_url,
        });

        return res.json({
            msg: "Category updated successfully",
            data: updated,
        });
    } catch (error) {
        throw new Error(error.message);
    }
});

module.exports = router;
