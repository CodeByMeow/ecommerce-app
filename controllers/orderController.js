const { Types } = require("mongoose");
const OrderModel = require("../models/order");
const { paginateOptions } = require("../utils/pagination");

const getList = (userId, options = {}) => {
    return OrderModel.paginate(
        {
            userId,
        },
        { ...paginateOptions, ...options }
    );
};

const create = (userId, products = []) => {
    const usrId = Types.ObjectId(userId);
    const productList = products.map((product) => Types.ObjectId(product));
    const order = new OrderModel({
        userId: usrId,
        products: productList,
    });

    return order.save();
};

module.exports = {
    getList,
    create,
};
