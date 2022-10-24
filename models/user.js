const { default: mongoose } = require("mongoose");

const userSchema = new mongoose.Schema({
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
    address: {
        require: true,
        type: String,
    },
    display_name: {
        type: String,
    },
    orders: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "orders",
        },
    ],
    createdDate: {
        type: Date,
        default: Date.now(),
    },
    modifiedDate: {
        type: Date,
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
