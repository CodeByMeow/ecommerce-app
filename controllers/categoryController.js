const { updateOne } = require("../models/category");
const CategoryModel = require("../models/category");
const { generalSlug, addTailSlug } = require("../utils/url");

const getById = (id) => {
    return CategoryModel.findById(id);
};

const getAll = (param) => {
    return CategoryModel.find(param);
};

const findOne = (param) => {
    return CategoryModel.findOne(param);
};

const countSameSlug = (slug) => {
    return getAll({ slug: { $regex: slug } }).count();
};

const create = async (category) => {
    let slug = generalSlug(category.title);
    const sameSlug = await countSameSlug(slug);
    if (sameSlug > 0) {
        slug = addTailSlug(slug, sameSlug + 1);
    }
    const newCategory = new CategoryModel({ ...category, slug });

    return newCategory.save();
};

const updateById = async (id, fields) => {
    const updated = await CategoryModel.findOneAndUpdate({ _id: id }, fields, {
        new: true,
    });

    return updated;
};

const findBySlug = (slug) => {
    return getAll({ slug });
};

module.exports = {
    getById,
    getAll,
    findOne,
    create,
    countSameSlug,
    updateById,
    findBySlug,
};
