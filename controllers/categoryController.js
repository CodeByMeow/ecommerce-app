const CategoryModel = require("../models/category");

const getById = (id) => {
    return CategoryModel.findById(id);
};

const getAll = () => {
    return CategoryModel.find();
};

const findOne = (param) => {
    return CategoryModel.findOne(param);
};

const create = (category) => {
    const newCategory = new CategoryModel(category);
    return newCategory.save();
};
module.exports = {
    getById,
    getAll,
    findOne,
    create,
};
