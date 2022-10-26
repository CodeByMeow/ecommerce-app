const jwt = require("../utils/jwt");

const ACCESS_TOKEN_KEY = process.env.ACCESS_TOKEN_KEY || "x-token";
const UserController = require("../controllers/userController");

module.exports = async (req, res, next) => {
    const token = req.headers[ACCESS_TOKEN_KEY];

    if (!token) {
        return res.status(400).json({
            msg: "Access Token is required",
        });
    }

    const decoded = jwt.verify(token);
    if (!decoded) {
        throw new Error("Token is not valid, no authorization information");
    }

    const { user_id } = decoded;
    try {
        const user = await UserController.findUserById(user_id);
        req.user = user;
        next();
    } catch (error) {
        throw new Error(error.message);
    }
};
