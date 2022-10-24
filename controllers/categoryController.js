const CategoryModel = require("../models/category");

const getById = (id) => {
    return CategoryController.findById(id);
};

const getAll = () => {
    return CategoryController.find();
};

const findOne = (param) => {
    return CategoryController.findOne(param);
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
