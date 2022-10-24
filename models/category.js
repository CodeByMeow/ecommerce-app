const mongoose = require("mongoose");

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
});

module.exports = mongoose.model("category", categorySchema);
