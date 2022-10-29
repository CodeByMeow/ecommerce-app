const express = require("express");
const router = express.Router();

const { uploadImageToLocal } = require("../middlewares/uploadImageLocal");

router.post("/upload", uploadImageToLocal, (req, res) => {
    res.json({
        msg: "image uploaded",
    });
});

module.exports = router;
