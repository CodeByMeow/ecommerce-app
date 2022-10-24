const express = require("express");
const router = express.Router();

const UserController = require("../controllers/userController");
const { hashPassword } = require("../utils/pwdUtil");
const { checkMissing } = require("../utils/validate");

router.post("/", async (req, res) => {
    const { fullname, email, password } = req.body;

    if (checkMissing(fullname, email, password)) {
        return res.json({ msg: "Missing required keys" });
    }

    try {
        const emailExist = await UserController.isEmailExisted(email);
        if (emailExist) {
            return res.status(400).json({
                msg: "Email already exist, please try another one!",
            });
        }

        const newUser = {
            fullname,
            email,
            password: await hashPassword(password),
        };

        await UserController.create(newUser);

        return res.status(201).json({
            msg: "User create successfully",
        });
    } catch (error) {
        throw Error(error.message);
    }
});

module.exports = router;