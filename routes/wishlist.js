const express = require("express");
const router = express.Router();

const verifyToken = require("../middlewares/verifyToken");

router.put("/", verifyToken, (req, res) => {});

module.exports = router;
