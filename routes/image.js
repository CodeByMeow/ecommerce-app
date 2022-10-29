const express = require("express");
const router = express.Router();
const fs = require("fs");

const { uploadImageToLocal } = require("../middlewares/uploadImageLocal");
const { cloudUploadService } = require("../services/cloudUploadService");

router.post("/upload", uploadImageToLocal, async (req, res) => {
    const { path } = req.file;

    try {
        const uploadRespose = await cloudUploadService(
            path,
            process.env.CLOUDINARY_UPLOAD_FOLDER
        );

        const { secure_url } = uploadRespose;
        fs.unlink(path, (err) => {
            if (err) throw err;
            console.log(`info: ${path} was deleted`);
        });

        res.json({
            msg: "upload successfully",
            data: {
                url: secure_url,
            },
        });
    } catch (err) {
        throw new Error(err);
    }
});

module.exports = router;
