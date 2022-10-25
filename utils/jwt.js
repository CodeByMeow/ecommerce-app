const jwt = require("jsonwebtoken");

const JWT_SECRECT_KEY = process.env.JWT_SECRECT_KEY;
const JWT_EXPIRY_TIME = process.env.JWT_EXPIRY_TIME;
console.log(JWT_EXPIRY_TIME);

const sign = (encode) => {
    return jwt.sign(encode, JWT_SECRECT_KEY, { expiresIn: JWT_EXPIRY_TIME });
};

const verify = (token) => {
    return jwt.verify(token, JWT_SECRECT_KEY);
};

module.exports = {
    sign,
    verify,
};
