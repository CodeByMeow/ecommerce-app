const jwt = require("../utils/jwt");

const ACCESS_TOKEN_KEY = process.env.ACCESS_TOKEN_KEY || "x-token";
const JWT_SECRECT_KEY = process.env.JWT_SECRECT_KEY;

module.exports = async (req, res, next) => {
    const token = req.headers[ACCESS_TOKEN_KEY];

    try {
        jwt.verify(token, JWT_SECRECT_KEY, (err, decoded) => {
            if (err)
                res.status(400).json({
                    msg: "Token expired",
                });
            req.decoded = decoded;
            next();
        });
    } catch (err) {
        res.status(401).send("Invalid token");
    }
};
