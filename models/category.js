const mongoose = require("mongoose");
const slugify = require("slugify");

const categorySchema = new mongoose.Schema({
    title: {
        type: String,
        require: true,
    },
    shortDesc: {
        type: String,
        require: true,
    },
    longDesc: {
        type: String,
    },
    isDeteled: {
        type: Boolean,
        default: false,
    },
    slug: {
        type: String,
        default: function () {
            return slugify(this.title);
        },
    },
    image_url: {
        type: String,
    },
});

module.exports = mongoose.model("category", categorySchema);
