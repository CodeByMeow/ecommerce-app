const express = require("express");
const router = express.Router();

const validateInput = require("../middlewares/validate-input");
const categorySchema = require("../validateSchema/categorySchema.json");

router.post("/", validateInput(categorySchema), (req, res) => {
    res.json({
        msg: "Create category successfully",
    });
});

module.exports = router;
