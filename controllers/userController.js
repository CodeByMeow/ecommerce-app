const UserModel = require("../models/user");

const getById = (id) => {
    return UserModel.findById(id);
};

const findOne = (param) => {
    return UserModel.findOne(param);
};

const create = (user) => {
    const newUser = new UserModel(user);
    return newUser.save();
};

const isEmailExisted = (email) => {
    return findOne({ email });
};

const UserController = {
    getById,
    findOne,
    isEmailExisted,
    create,
};

module.exports = UserController;
