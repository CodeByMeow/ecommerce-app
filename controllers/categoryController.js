const { default: slugify } = require("slugify");
const { updateOne } = require("../models/category");
const CategoryModel = require("../models/category");

const getById = (id) => {
    return CategoryModel.findById(id);
};

const getAll = (param) => {
    return CategoryModel.find(param);
};

const findOne = (param) => {
    return CategoryModel.findOne(param);
};

const generalSlug = (title) => {
    return slugify(title);
};

const findBySlug = (slug) => {
    return getAll({ slug });
};

const create = async (category) => {
    let slug = generalSlug(category.title);
    const sameSlug = await findBySlug(slug);
    if (sameSlug.length > 0) {
        const tail = sameSlug.length + 1;
        slug = `${slug}-${tail}`;
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

module.exports = {
    getById,
    getAll,
    findOne,
    create,
    findBySlug,
    updateById,
};
