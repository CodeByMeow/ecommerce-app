const { Types } = require("mongoose");
const ProductModel = require("../models/product");
const { generalSlug, addTailSlug } = require("../utils/url");
const {} = require("../middlewares/verify-token");
const {} = require("../middlewares/validate-input");

const getAll = (param) => {
    return ProductModel.find(param);
};

const countSameSlug = (slug) => {
    return getAll({ slug: { $regex: slug } }).count();
};

const create = async (product) => {
    let slug = generalSlug(product.title);
    const sameSlug = await countSameSlug(slug);
    if (sameSlug > 0) {
        slug = addTailSlug(slug, sameSlug + 1);
    }

    const newProduct = new ProductModel({
        ...product,
        slug,
        category: Types.ObjectId(product.category),
    });

    return newProduct.save();
};

module.exports = {
    create,
};
