const cloudinary = require("cloudinary").v2;

cloudinary.config({
    api_key: process.env.CLOUDINARY_KEY,
    api_secret: process.env.CLOUDINARY_SECRET_KEY,
    cloud_name: process.env.CLOUDINARY_NAME,
    secure: true,
});

const cloudUploadService = (file, folder) => {
    return new Promise((resolve, reject) => {
        cloudinary.uploader.upload(file, { folder }, (err, result) => {
            if (err) {
                reject(err);
            } else {
                resolve(result);
            }
        });
    });
};

module.exports = {
    cloudUploadService,
};
