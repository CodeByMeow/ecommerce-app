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
 *           _id:
 *               type: string
 *               example: 63675ab9f17a55d423321f31
 *               readOnly: true
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
 *               format: email
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
 *               enum: [admin, user, customer]
 *               readOnly: true
 *               default: customer
 *           orders:
 *               type: array
 *               items:
 *                   type: object
 *               description: The list user's orders.
 *               readOnly: true
 *           refreshToken:
 *               type: string
 *               descruption: The refresh token.
 *               readOnly: true
 *           createdAt:
 *               type: string
 *               format: date-time
 *               readOnly: true
 *           updatedAt:
 *               type: string
 *               format: date-time
 *               readOnly: true
 */

const userSchema = new mongoose.Schema(
    {
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
    },
    { timestamp: true }
);

module.exports = mongoose.model("user", userSchema);
