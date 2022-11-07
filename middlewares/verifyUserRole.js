const UserController = require("../controllers/userController");

const grantPermissions = ["admin"];
const verifyUserRole = async (req, res, next) => {
    const { user_id } = req.decoded;
    const { role } = await UserController.getUserRole(user_id);
    if (grantPermissions.includes(role)) return next();
    return res.status(403).json({
        msg: "You don't have permission to do these action.",
    });
};

module.exports = {
    verifyUserRole,
};
