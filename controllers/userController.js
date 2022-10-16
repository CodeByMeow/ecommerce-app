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

const UserController = {
    getById,
    findOne,
    create,
};

module.exports = UserController;
