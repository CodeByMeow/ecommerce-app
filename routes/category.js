const express = require("express");
const router = express.Router();

const validateInput = require("../middlewares/validate-input");
const categorySchema = require("../validateSchema/categorySchema.json");
const categoryController = require("../controllers/categoryController");
const verifyToken = require("../middlewares/verify-token");

router.post(
    "/",
    verifyToken,
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
            await categoryController.create(newCategory);
            return res.json({
                msg: "Create category successfully",
            });
        } catch (error) {
            throw new Error(error.message);
        }
    }
);

router.patch(
    "/",
    verifyToken,
    validateInput(categorySchema),
    async (req, res) => {
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
    }
);

module.exports = router;
