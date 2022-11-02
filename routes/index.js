const express = require("express");
const router = express.Router();

const userRouter = require("./account");
const imageRouter = require("./image");
const categoryRouter = require("./category");

router.use("/account", userRouter);
router.use("/images", imageRouter);
router.use("/category", categoryRouter);

module.exports = router;
