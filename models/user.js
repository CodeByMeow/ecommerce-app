const { default: mongoose } = require("mongoose");

/**
 * @swagger
 * components:
 *   schemas:
 *       User:
 *        type: object
 *        required:
 *           - fullname
 *           - username
 *           - password
 *           - email
 *        properties:
 *           fullname:
 *               type: string
 *               description: The user's full name.
 *               example: Tom Cruise
 *           username:
 *               type: string
 *               description: Username
 *               example: admin
 *           email:
 *               type: string
 *               description: Email
 *               example: admin@example.com
 *           password:
 *               type: string
 *               description: Password for login
 *               example: admin123
 *           address:
 *               type: string
 *               description: The user's address.
 *               example: Ho Chi Minh City
 *           role:
 *               type: string
 *               description: admin | user | customer
 *               default: customer
 *           orders:
 *               type: array
 *               description: The list user's orders.
 *               example: [{_id: e121223412341234e32423}, {_id: q234234123424324123434} ]
 *           refreshToken:
 *               type: string
 *               descruption: The refresh token.
 *               readOnly: true
 *
 */

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
    refreshToken: {
        type: String,
    },
});

module.exports = mongoose.model("user", userSchema);
