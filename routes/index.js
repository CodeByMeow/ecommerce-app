const express = require("express");
const router = express.Router();

const userRouter = require("./account");
const imageRouter = require("./image");
const categoryRouter = require("./category");
const productRouter = require("./product");
const swaggerRouter = require("./swagger");

router.use("/account", userRouter);
router.use("/images", imageRouter);
router.use("/category", categoryRouter);
router.use("/products", productRouter);
router.use("/api-docs", swaggerRouter);

module.exports = router;
