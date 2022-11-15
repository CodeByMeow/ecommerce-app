const jwt = require("jsonwebtoken");

const ACCESS_TOKEN_KEY = process.env.ACCESS_TOKEN_KEY || "x-token";
const JWT_SECRET_KEY = process.env.JWT_SECRET_KEY;

module.exports = async (req, res, next) => {
    try {
        const token = req.headers[ACCESS_TOKEN_KEY];
        if (!token) return res.status(401).json("Missing access token key");
        if (token) {
            const decoded = jwt.verify(token, JWT_SECRET_KEY);
            console.log("Decode: ", decoded);
            req.decoded = decoded;
            next();
        }
    } catch (err) {
        // res.status(401).send(err.message);
        // catch the JWT error
        if (err.name === "TokenExpiredError") {
            return res.status(200).json({
                code: 401,
                msg: err.message,
            });
        }
        return res.status(200).json({
            code: 500,
            msg: err,
        });
    }
};

/* module.exports = async (req, res, next) => {
    return res.status(200).json({
        code: 401,
        msg: "Access token is expired"
    });
} */
