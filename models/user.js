const { default: mongoose } = require("mongoose");

const { Schema } = mongoose;

const userSchema = new Schema({
    fullname: {
        require: true,
        type: String,
    },
    email: {
        requrie: true,
        unique: true,
        type: String,
    },
    password: {
        require: true,
        type: String,
    },
    createdDate: {
        type: Date,
        default: Date.now(),
    },
    isDeleted: {
        type: Boolean,
        default: false,
    },
    isActive: {
        type: Boolean,
        default: true,
    },
});

module.exports = mongoose.model("user", userSchema);
