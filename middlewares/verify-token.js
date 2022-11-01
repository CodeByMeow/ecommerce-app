const jwt = require("../utils/jwt");

const ACCESS_TOKEN_KEY = process.env.ACCESS_TOKEN_KEY || "x-token";
const JWT_SECRECT_KEY = process.env.JWT_SECRECT_KEY;
const UserController = require("../controllers/userController");

module.exports = async (req, res, next) => {
    const token = req.headers[ACCESS_TOKEN_KEY];

    if (!token) {
        return res.status(400).json({
            msg: "Access Token is required",
        });
    }
    let user_id;
    jwt.verify(token, JWT_SECRECT_KEY, (err, decoded) => {
        if (err)
            return res.status(400).json({
                msg: "Token expired",
            });
        user_id = decoded;
    });

    try {
        const user = await UserController.findUserById(user_id);
        req.user = user;
        next();
    } catch (error) {
        throw new Error(error.message);
    }
};
