const cloudinary = require("cloudinary").v2;

cloudinary.config({
    api_key: process.env.CLOUDINARY_KEY,
    api_secret: process.env.CLOUNDINARY_SECRET_KEY,
    cloud_name: process.env.CLOUDINARY_NAME,
    secure: true,
});
