const { Types } = require("mongoose");
const { ProductModel } = require("../models/product");
const { generalSlug, addTailSlug } = require("../utils/url");
const { paginateOptions } = require("../utils/pagination");

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
const getList = async (query = {}, options = {}) => {
    return await ProductModel.paginate(query, {
        ...paginateOptions,
        ...options,
    });
};

const updateById = async (productId, field) => {
    const updated = await ProductModel.findOneAndUpdate(
        { _id: productId },
        field,
        {
            new: true,
        }
    );

    return updated;
};

const findBySlug = (slug) => {
    return ProductModel.findOne({ slug, isDeleted: false });
};

module.exports = {
    create,
    getList,
    updateById,
    findBySlug,
};
