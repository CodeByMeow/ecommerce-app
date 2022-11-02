const jwt = require("jsonwebtoken");

const ACCESS_TOKEN_KEY = process.env.ACCESS_TOKEN_KEY || "x-token";
const JWT_SECRET_KEY = process.env.JWT_SECRET_KEY;

module.exports = async (req, res, next) => {
    const token = req.headers[ACCESS_TOKEN_KEY];

    try {
        const decoded = jwt.verify(token, JWT_SECRET_KEY);
        if (decoded) {
            req.decoded = decoded;
            next();
        }
    } catch (err) {
        res.status(401).send("Invalid token");
    }
};
