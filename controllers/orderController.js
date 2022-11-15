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
    const order = new OrderModel({
        userId: usrId,
    });

    order.products = products;

    return order.save();
};

module.exports = {
    getList,
    create,
};
