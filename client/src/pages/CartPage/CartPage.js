import React, { useState } from "react";
import { Link } from "react-router-dom";

import CartItem from "../../components/CartItem/CartItem";
import PageContainer from "../../layouts/PageContainer/PageContainer";
import storeService from "../../services/storeService";

const CartPage = () => {
    const cart = localStorage.getItem("cart")
        ? JSON.parse(localStorage.getItem("cart"))
        : null;
    const cartItem =
        cart.length === 0 ? (
            <p>Bạn chưa chọn sản phẩm nào</p>
        ) : (
            cart.map((item, index) => {
                return <CartItem key={index} item={item} />;
            })
        );

    const [shipping, setShipping] = useState(20000);

    const onHandleSelectionChange = (e) => {
        setShipping(e.target.value);
    };
    const total = cart.reduce(
        (sum, item) => sum + item.price * item.orderQuantity,
        0
    );

    return (
        <PageContainer title="Cart page">
            <div className="px-6 md:px-0 md:container mx-auto mt-0 md:mt-10">
                <div className="flex flex-col xl:flex-row md:shadow-md mt-10 mb-0">
                    <div className="w-full xl:w-3/4 bg-white px-4 md:px-6 xl:px-10 py-0 md:py-10 lg:my-10">
                        <div className="flex justify-between border-b pb-4 md:pb-8 border-indigo-600">
                            <h2 className="font-semibold text-lg md:text-2xl">
                                Giỏ hàng của bạn
                            </h2>
                            <h2 className="text-base md:text-xl">
                                <span className="text-indigo-600">
                                    {cart.length > 0 ? cart.length : 0}{" "}
                                </span>
                                sản phẩm
                            </h2>
                        </div>
                        <div className="hidden md:flex mt-10 mb-5 text-indigo-600 px-6 ">
                            <h3 className="font-semibold text-xs uppercase w-2/5">
                                Thông tin sản phẩm
                            </h3>
                            <h3 className="font-semibold text-center text-xs uppercase w-1/5">
                                Số lượng
                            </h3>
                            <h3 className="font-semibold text-center text-xs uppercase w-1/5">
                                Giá tiền
                            </h3>
                            <h3 className="font-semibold text-center text-xs uppercase w-1/5">
                                Thành tiền
                            </h3>
                        </div>
                        {cartItem}

                        <Link
                            to="/"
                            className="flex font-semibold text-indigo-600 text-sm mt-5 mb-5 md:mt-10 md:mb-0"
                        >
                            <svg
                                className="fill-current mr-2 text-indigo-600 w-4"
                                viewBox="0 0 448 512"
                            >
                                <path d="M134.059 296H436c6.627 0 12-5.373 12-12v-56c0-6.627-5.373-12-12-12H134.059v-46.059c0-21.382-25.851-32.09-40.971-16.971L7.029 239.029c-9.373 9.373-9.373 24.569 0 33.941l86.059 86.059c15.119 15.119 40.971 4.411 40.971-16.971V296z" />
                            </svg>
                            Tiếp tục mua sắm
                        </Link>
                    </div>

                    <div
                        id="summary"
                        className="w-full xl:w-1/4 px-4 lg:px-10 py-10 bg-indigo-200"
                    >
                        <h3 className="font-semibold text-lg lg:text-xl border-b pb-8">
                            Tóm tắt đơn hàng
                        </h3>
                        <div className="flex justify-between mt-10 mb-5">
                            <span className="font-semibold text-sm uppercase">
                                Số lượng:{" "}
                                <span className="text-base text-bold text-indigo-700">
                                    {cart.length}
                                </span>
                            </span>
                            <span className="font-semibold text-sm">
                                {storeService.convertCurrency(total, "VND")}
                            </span>
                        </div>
                        <div>
                            <label className="font-medium inline-block mb-3 text-sm uppercase">
                                Phí ship
                            </label>
                            <select
                                className="block p-2 text-gray-600 w-full text-sm"
                                value={shipping}
                                onChange={onHandleSelectionChange}
                            >
                                <option value={20000}>
                                    Ship tiêu chuẩn - 20.000
                                </option>
                                <option value={50000}>
                                    Ship nhanh - 50.000
                                </option>
                            </select>
                        </div>
                        <div className="py-10">
                            <label
                                htmlFor="promo"
                                className="font-semibold inline-block mb-3 text-sm uppercase"
                            >
                                Mã khuyến mãi
                            </label>
                            <input
                                type="text"
                                id="promo"
                                placeholder="Enter your code"
                                className="p-2 text-sm w-full"
                            />
                        </div>
                        <button className="bg-red-500 hover:bg-red-600 px-5 py-2 text-sm text-white uppercase">
                            Áp dụng
                        </button>
                        <div className="border-t mt-8">
                            <div className="flex font-semibold justify-between py-6 text-sm uppercase">
                                <span>Tổng tiền</span>
                                <span>
                                    {storeService.convertCurrency(
                                        total + Number(shipping),
                                        "VND"
                                    )}
                                </span>
                            </div>
                            <button className="bg-indigo-500 font-semibold hover:bg-indigo-600 py-3 text-sm text-white uppercase w-full">
                                Checkout
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </PageContainer>
    );
};

export default CartPage;
