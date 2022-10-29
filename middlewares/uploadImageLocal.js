const { MulterError } = require("multer");
const { localUpload } = require("../services/localUploadService");

const uploadImageToLocal = (req, res, next) => {
    const uploader = localUpload.single("image");
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
