const express = require("express");
const router = express.Router();
const fs = require("fs");

const { uploadImageToLocal } = require("../middlewares/uploadImageLocal");
const { cloudUploadService } = require("../services/cloudUploadService");

const verifyToken = require("../middlewares/verifyToken");
const { verifyUserRole } = require("../middlewares/verifyUserRole");

/**
 * @swagger
 *   /images/upload:
 *       post:
 *           tags:
 *               - Image Upload
 *           summary: Upload image.
 *           requestBody:
 *               content:
 *                   multipart/form-data:
 *                       schema:
 *                           type: object
 *                           properties:
 *                             image:
 *                              type: string
 *                              format: binary
 *           responses:
 *               200:
 *                   description: Upload image successfully.
 *                   content:
 *                       application/json:
 *                           schema:
 *                               type: object
 *                               properties:
 *                                   msg:
 *                                       type: string
 *                                       example: Upload image successfully.
 *                                   data:
 *                                       type: object
 *                                       properties:
 *                                           url:
 *                                               type: string
 */
router.post(
    "/upload",
    verifyToken,
    verifyUserRole,
    uploadImageToLocal,
    async (req, res) => {
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
                msg: "Upload image successfully.",
                data: {
                    url: secure_url,
                },
            });
        } catch (err) {
            throw new Error(err);
        }
    }
);

module.exports = router;
