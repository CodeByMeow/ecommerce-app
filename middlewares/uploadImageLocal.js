const { MulterError } = require("multer");
const { imageUploadService } = require("../services/imageUploadLocalService");

const uploadImageToLocal = (req, res, next) => {
    const uploader = imageUploadService.single("image");
    uploader(req, res, (error) => {
        if (error instanceof MulterError) {
            return res.status(400).json({
                msg: error.message,
            });
        } else if (error) {
            return res.status(500).json({
                msg: error.message,
            });
        }
        next();
    });
};

module.exports = {
    uploadImageToLocal,
};
