const express = require("express");
const jwt = require("jsonwebtoken");
const router = express.Router();
const userShema = require("../validateSchema/userSchema.json");

const UserController = require("../controllers/userController");
const { hashPassword, comparePassword } = require("../utils/pwdUtil");
const verifyTokenMdw = require("../middlewares/verifyToken");
const validateInputMdw = require("../middlewares/validateInput");
const { findUserByRefreshToken } = require("../controllers/userController");
const ACCESS_REFRESH_TOKEN_KEY = process.env.ACCESS_REFRESH_TOKEN_KEY;
const SECRET_KEY = process.env.JWT_SECRET_KEY;
const EXPIRY_TIME = process.env.JWT_EXPIRY_TIME;
const REFRESH_SECRET = process.env.JWT_REFRESH_SECRET;
const REFRESH_TIME = process.env.JWT_REFRESH_TIME;

/**
 * @swagger
 * components:
 *   schemas:
 *      TokenResponse:
 *          type: object
 *          properties:
 *              msg:
 *                  type: string
 *              token:
 *                  type: string
 *              refreshToken:
 *                  type: string
 *      UserResponse:
 *          type: object
 *          properties:
 *              fullname:
 *                  type: string
 *                  example: Tom Cruise
 *              username:
 *                  type: string
 *                  example: admin
 *              email:
 *                  type: string
 *                  format: email
 *                  example: admin@example.com
 *              role:
 *                  type: string
 *                  example: customer
 *              address:
 *                  type: string
 *                  example: Ho Chi Minh City
 *              orders:
 *                  type: array
 *                  example: []
 *              isDeleted:
 *                  type: boolean
 *                  default: false
 *              isActive:
 *                  type: boolean
 *                  default: true
 */
/**
 * @swagger
 * /account:
 *   post:
 *       tags:
 *           - Account
 *       summary: Register a new user.
 *       requestBody:
 *           content:
 *               application/json:
 *                   schema:
 *                       type: object
 *                       $ref: '#/components/schemas/User'
 *       responses:
 *           201:
 *               description: A new account registered
 *           400:
 *               description: Bad request
 */
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

    const response = {
      msg: "User registered successfully!",
    };

    return res.status(201).json(response);
  } catch (error) {
    throw new Error(error.message);
  }
});

/**
 * @swagger
 *   /account/login:
 *       post:
 *           tags:
 *               - Account
 *           summary: Login to user account.
 *           requestBody:
 *               required: true
 *               content:
 *                   application/json:
 *                       schema:
 *                           type: object
 *                           properties:
 *                               username:
 *                                   type: string
 *                                   description: The user's username
 *                                   example: admin
 *                               password:
 *                                   type: string
 *                                   description: The user's password
 *                                   example: admin123
 *           responses:
 *               200:
 *                   description: Retrieved login result
 *                   content:
 *                       application/json:
 *                           schema:
 *                               type: object
 *                               $ref: '#/components/schemas/UserResponse'
 *               400:
 *                   description: Bad request
 *
 */

router.post("/login", async (req, res) => {
  const { username, password } = req.body;
  if (!username || !password) {
    return res.status(400).json({
      msg: "missing required fields",
    });
  }
  try {
    const isUsernameExisted = await UserController.isUsernameExisted(username);
    if (!isUsernameExisted) {
      return res.status(403).json({
        msg: "username not exist",
      });
    }

    const user = await UserController.findUserByUsername(username);
    isPasswordMatch = await comparePassword(password, user.password);
    if (isPasswordMatch) {
      const tokenContent = {
        username,
        user_id: user._id,
      };
      const token = jwt.sign(tokenContent, SECRET_KEY, {
        expiresIn: EXPIRY_TIME,
      });

      const refreshToken = jwt.sign(tokenContent, REFRESH_SECRET, {
        expiresIn: REFRESH_TIME,
      });

      const userInfo = await UserController.findUserById(tokenContent.user_id);
      const response = {
        msg: "Logged In",
        token,
        refreshToken,
        isAuthenticated: true,
        user: userInfo,
      };

      await UserController.updateById(user.id, { refreshToken });

      return res.status(200).json(response);
    } else {
      return res.status(403).json({
        msg: "Username or password invalid",
      });
    }
  } catch (err) {
    throw new Error(err.message);
  }
});
/**
 * @swagger
 *   /account/profile:
 *       get:
 *           tags:
 *               - Account
 *           summary: Get the user's profile.
 *           responses:
 *               200:
 *                   description: The user's profile
 *                   content:
 *                       application/json:
 *                           schema:
 *                              type: object
 *                              $ref: '#/components/schemas/UserResponse'
 */
router.get("/profile", verifyTokenMdw, async (req, res) => {
  const { user_id } = req.user;

  try {
    const user = await UserController.findUserById(user_id);
    return res.json({
      msg: "Get user successfully",
      user: user,
    });
  } catch (err) {
    next(err);
  }
});

/**
 *  @swagger
 *   /account/token:
 *       post:
 *           tags:
 *               - Account
 *           summary: Greneral new token that expired.
 *           requestBody:
 *               required: true
 *               content:
 *                   application/json:
 *                       schema:
 *                           type: object
 *                           properties:
 *                               x-refresh-token:
 *                                   type: string
 *                                   example: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6ImFkbWluIiwidXNlcl9pZCI6IjYzNjIyZjMwYTQ4OGZlMzU0ZDQ0NGYxZiIsImlhdCI6MTY2NzU0NDgxOCwiZXhwIjoxNjc1MzIwODE4fQ.Gy1pY5rhTBDuxv9pKDT53XqSqk50yLYoAPkjCjuvDGY
 *           responses:
 *               200:
 *                   description: Refersh token successfully.
 *                   content:
 *                       application/json:
 *                           schema:
 *                               type: object
 *                               properties:
 *                                  token:
 *                                   type: string
 *                                   example: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6ImFkbWluIiwidXNlcl9pZCI6IjYzNjIyZjMwYTQ4OGZlMzU0ZDQ0NGYxZiIsImlhdCI6MTY2NzU0NDgxOCwiZXhwIjoxNjc1MzIwODE4fQ.Gy1pY5rhTBDuxv9pKDT53XqSqk50yLYoAPkjCjuvDGY
 *
 */
router.post("/token", async (req, res) => {
  // console.log(req.body);
  const { refreshToken } = req.body;

  if (refreshToken) {
    const user = await findUserByRefreshToken(refreshToken);
    if (!user)
      return res.status(403).json({
        msg: "Unauthenticated",
      });

    try {
      const decoded = jwt.verify(refreshToken, REFRESH_SECRET);
      if (decoded) {
        const { username, user_id } = decoded;
        const token = jwt.sign({ username, user_id }, SECRET_KEY, {
          expiresIn: EXPIRY_TIME,
        });

        const response = {
          token,
        };
        console.log("new Token: ", token);
        return res.json(response);
      }
    } catch (error) {
      return res.status(403).json({
        msg: "Invalid refresh token",
      });
    }
  } else {
    res.status(404).send("Invalid request");
  }
});
/**
 * @swagger
 *   /account/profile:
 *       patch:
 *           tags:
 *               - Account
 *           summary: Update properties of the user.
 *           requestBody:
 *               content:
 *                   application/json:
 *                       schema:
 *                           type: object
 *                           $ref: '#/components/schemas/User'
 *           responses:
 *               200:
 *                  description: User was updated
 *                  content:
 *                       application/json:
 *                           schema:
 *                               type: object
 *                               $ref: '#/components/schemas/UserResponse'
 */
router.patch("/profile", verifyTokenMdw, async (req, res) => {
  const { user_id } = req.decoded;
  const { role, ...fieldNeedUpdate } = req.body;

  try {
    const updated = await UserController.updateById(user_id, fieldNeedUpdate);
    return res.json({
      msg: "User updated successfully",
      data: updated,
    });
  } catch (error) {
    throw new Error(error.message);
  }
});

module.exports = router;
