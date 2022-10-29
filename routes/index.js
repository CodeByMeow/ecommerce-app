const express = require("express");
const router = express.Router();

const userRouter = require("./account");
const imageRouter = require("./image");

router.use("/account", userRouter);
router.use("/images", imageRouter);

module.exports = router;
