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

const findUser = (userId) => {
    return UserModel.findById(userId).select(
        " username email role orders fullname address isActive isDeleted "
    );
};

const UserController = {
    create,
    isEmailExisted,
    isUsernameExisted,
    findUser,
};

module.exports = UserController;
