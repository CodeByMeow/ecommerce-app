const jwt = require("../utils/jwt");

const ACCESS_TOKEN_KEY = process.env.ACCESS_TOKEN_KEY || "x-token";

module.exports = (req, res, next) => {
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

    req.user = decoded;
    next();
};
