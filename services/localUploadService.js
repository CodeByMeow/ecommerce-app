const multer = require("multer");
const path = require("path");
const fs = require("fs");
const crypto = require("crypto");
const { MulterError } = require("multer");

const MAXIMUM_FILE_SIZE = 2 * 1024 * 1024; // 2MB
const VALID_FILE_TYPE = ["image/png", "image/jpg", "image/jpeg"];

const localUpload = multer({
    storage: storage(),
    fileFilter: filterFileType,
    limits: {
        fileSize: MAXIMUM_FILE_SIZE,
    },
});

function storage() {
    return multer.diskStorage({
        destination: generalDestination,
        filename: generalFileName,
    });
}

function generalDestination(_req, _file, cb) {
    const dirname = path.resolve("./");
    const dirFull = path.join(dirname, "uploads");

    fs.mkdir(dirFull, (_error) => {
        cb(null, dirFull);
    });
}

function generalFileName(_req, file, cb) {
    const filename = `${new Date().valueOf()}${crypto
        .createHash("md5")
        .update(file.fieldname)
        .digest("hex")}${path.extname(file.originalname)}`;
    cb(null, filename);
}

function filterFileType(_req, file, cb) {
    const fileType = file.mimetype;
    const isValidFileType = VALID_FILE_TYPE.includes(fileType);

    if (isValidFileType) {
        cb(null, true);
    } else {
        cb(
            new MulterError(
                "LIMIT_UNEXPECTED_FILE",
                "Unsupported file type: " + fileType
            ),
            false
        );
    }
}

module.exports = {
    localUpload: localUpload,
};
