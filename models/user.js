const { default: mongoose } = require("mongoose");

const userSchema = new mongoose.Schema({
    fullname: {
        require: true,
        type: String,
    },
    username: {
        type: String,
        unique: true,
        require: true,
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
    role: {
        type: String,
        enum: ["admin", "customer", "user"],
        default: "customer",
    },
    address: {
        require: true,
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
