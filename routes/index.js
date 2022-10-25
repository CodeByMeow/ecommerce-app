const express = require("express");
const router = express.Router();

const userRouter = require("./account");

router.use("/account", userRouter);

module.exports = router;
