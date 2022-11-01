const express = require("express");
const router = express.Router();

const validateInput = require("../middlewares/validate-input");
const categorySchema = require("../validateSchema/categorySchema.json");
const categoryController = require("../controllers/categoryController");

router.post("/", validateInput(categorySchema), async (req, res) => {
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
});

module.exports = router;
