import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import authContext from "../../contexts/AuthContext/AuthContext";
import cartContext from "../../contexts/CartContext/CartContext";
import PageContainer from "../../layouts/PageContainer/PageContainer";
import storeService from "../../services/storeService";

const CheckoutPage = () => {
    const { cartState } = useContext(cartContext);
    const { cart } = cartState;
    const { state } = useContext(authContext);
    const { user } = state;
    const [input, setInput] = useState({
        address: user?.addpress || "",
    });
    const [total] = useState(() => {
        if (cart.length === 0) return 0;
        return cart.reduce(
            (sum, item) => (sum += item.price * item.orderQuantity),
            0
        );
    });
    useEffect(() => {
        if (!user) return;
        setInput(user);
    }, [user]);

    const onInputChange = (e) => {
        const { name, value } = e.target;
        setInput({ ...input, [name]: value });
    };

    return (
        <PageContainer>
            <div className="md:p-6 md:w-9/12 w-full p-4 mx-auto">
                <form className="border border-solid border-gray-400 rounded-xl md:p-10 px-4 py-3">
                    <h2 className="text-center md:text-3xl text-2xl uppercase">
                        Thông tin đơn hàng
                    </h2>
                    <div className="py-4">
                        <h3 className="text-xl font-semibold p-2 border-b-2 border-black">
                            Chi tiết đơn hàng
                        </h3>
                        <div className="py-4">
                            {cart.length > 0 &&
                                cart.map((item) => (
                                    <div
                                        key={item._id}
                                        className="py-4 grid md:grid-cols-4 grid-cols-2 md:place-items-stretch place-items-center"
                                    >
                                        <img
                                            src={item.image_url}
                                            className="w-36 h-auto"
                                        />
                                        <Link
                                            to={item.slug}
                                            className="text-xl font-normal"
                                        >
                                            {item.title}
                                        </Link>
                                        <p className="text-center">
                                            x<span>{item.orderQuantity}</span>
                                        </p>
                                        <p className="text-right ml-auto">
                                            {storeService.convertCurrency(
                                                item.price * item.orderQuantity,
                                                "VND"
                                            )}
                                        </p>
                                    </div>
                                ))}
                        </div>
                        <div className="grid md:grid-cols-4 grid-cols-2 border-t border-solid border-black/30 py-2">
                            <h4 className="font-semibold col-span-1">
                                Tổng cộng
                            </h4>
                            <p className="font-md text-right col-start-4 col-span-1">
                                {total &&
                                    storeService.convertCurrency(total, "VND")}
                            </p>
                        </div>
                    </div>
                    <div>
                        <h3 className="text-xl font-semibold p-2 border-b-2 border-black">
                            Thông tin khách hàng
                        </h3>
                        <div className="py-4">
                            <div className="py-2">
                                <label className="px-2" htmlfor="fullname">
                                    Họ tên khách hàng
                                </label>
                                <input
                                    id="fullname"
                                    type="text"
                                    name="fullname"
                                    value={input?.fullname}
                                    className="p-2 border-2 border-solid block rounded-2xl w-full my-2"
                                    onChange={onInputChange}
                                />
                            </div>
                            <div className="py-2">
                                <label className="px-2" htmlfor="address">
                                    Địa chỉ giao hàng
                                </label>
                                <input
                                    id="address"
                                    type="text"
                                    name="address"
                                    value={input?.address}
                                    className="p-2 border-2 border-solid block rounded-2xl w-full my-2"
                                    onChange={onInputChange}
                                />
                            </div>
                        </div>
                        <div>
                            <h3 className="text-xl font-semibold p-2 border-b-2 border-black">
                                Phương thức thanh toán
                            </h3>
                            <div className="py-2">
                                <p>- Thanh toán khi nhận hàng (COD).</p>
                            </div>
                        </div>
                        <div className="py-2 text-center">
                            <input
                                type="submit"
                                value="Thanh toán"
                                className="py-5 w-9/12 bg-indigo-800 text-white uppercase rounded-md"
                            />
                        </div>
                    </div>
                </form>
            </div>
        </PageContainer>
    );
};

export default CheckoutPage;
