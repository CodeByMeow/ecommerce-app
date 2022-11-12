const jwt = require("jsonwebtoken");

const ACCESS_TOKEN_KEY = process.env.ACCESS_TOKEN_KEY || "x-token";
const JWT_SECRET_KEY = process.env.JWT_SECRET_KEY;

module.exports = async (req, res, next) => {
  try {
    const token = req.headers[ACCESS_TOKEN_KEY];
    if (token) {
      const decoded = jwt.verify(token, JWT_SECRET_KEY);
      console.log("Decode: ", decoded);
      req.decoded = decoded;
      next();
    }
<<<<<<< HEAD
    try {
        const decoded = jwt.verify(token, JWT_SECRET_KEY);
        if (decoded) {
            req.decoded = decoded;
           /*  res.json({
                msg: "Token is valid.",
            }); */
            next();
        }
    } catch (err) {
        res.status(401).send(err.message);
=======
  } catch (err) {
    // res.status(401).send(err.message);
    // catch the JWT error
    if (err.name === "TokenExpiredError") {
      return res.status(200).json({
        code: 401,
        msg: err.message,
      });
>>>>>>> 445af42aa6c72a9bcf06c6932edc2cbb107e6001
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
