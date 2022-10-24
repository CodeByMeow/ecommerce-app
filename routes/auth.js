const express = require("express");
const router = express.Router();

router.post("/login", (req, res) => {
    return res.json({
        msg: "login successfully",
    });
});

module.exports = router;
