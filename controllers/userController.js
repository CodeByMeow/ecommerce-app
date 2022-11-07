const UserModel = require("../models/user");

const findOne = (param) => {
    return UserModel.findOne(param);
};

const create = (user) => {
    const newUser = new UserModel(user);
    return newUser.save();
};

const isEmailExisted = async (email) => {
    const user = await findOne({ email });
    if (user) return true;

    return false;
};

const isUsernameExisted = async (username) => {
    const user = await findOne({ username });
    if (user) return true;

    return false;
};

const findUserById = (userId) => {
    return UserModel.findById(userId).select("-password");
};

const updateById = async (id, fields) => {
    const updated = await UserModel.findOneAndUpdate({ _id: id }, fields, {
        new: true,
        fields: "-password",
    });

    return updated;
};

const findUserByUsername = (username) => {
    return findOne({ username });
};

const findUserByRefreshToken = (refreshToken) => {
    return findOne({ refreshToken });
};

const getUserRole = (userId) => {
    return findOne({ _id: userId }).select("role");
};

const UserController = {
    create,
    updateById,
    isEmailExisted,
    isUsernameExisted,
    findUserById,
    findUserByUsername,
    findUserByRefreshToken,
    getUserRole,
};

module.exports = UserController;
