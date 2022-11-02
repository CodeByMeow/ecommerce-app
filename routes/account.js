const express = require("express");
const router = express.Router();
const userShema = require("../validateSchema/userSchema.json");

const UserController = require("../controllers/userController");
const { hashPassword } = require("../utils/pwdUtil");
const jwt = require("../utils/jwt");
const verifyTokenMdw = require("../middlewares/verify-token");
const validateInputMdw = require("../middlewares/validate-input");

router.post("/", validateInputMdw(userShema), async (req, res) => {
    const { fullname, username, email, password } = req.body;

    try {
        const emailExist = await UserController.isEmailExisted(email);
        if (emailExist) {
            return res.status(400).json({
                msg: "Email already exist, please try another one!",
            });
        }

        const usernameExist = await UserController.isUsernameExisted(username);
        if (usernameExist) {
            return res.status(400).json({
                msg: "Username already exist, please try another one!",
            });
        }

        const newUser = {
            fullname,
            username,
            email,
            password: await hashPassword(password),
        };

        const userCreated = await UserController.create(newUser);

        const token = jwt.sign({
            username,
            email,
            user_id: userCreated._id,
        });

        return res.status(201).json({
            msg: "User create successfully",
            token,
        });
    } catch (error) {
        throw new Error(error.message);
    }
});

router.get("/profile", verifyTokenMdw, async (req, res) => {
    const { user_id } = req.decoded;
    const user = await UserController.findUserById(user_id);

    return res.json({
        msg: "Get user successfully",
        data: user,
    });
});

router.patch("/profile", verifyTokenMdw, async (req, res) => {
    const { user_id } = req.decoded;
    const fieldNeedUpdate = req.body;
    try {
        const updated = await UserController.updateById(
            user_id,
            fieldNeedUpdate
        );
        return res.json({
            msg: "User updated successfully",
            data: updated,
        });
    } catch (error) {
        throw new Error(error.message);
    }
});

module.exports = router;
