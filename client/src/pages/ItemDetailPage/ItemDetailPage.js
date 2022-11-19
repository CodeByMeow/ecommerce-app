import React, { useState, useEffect, useContext } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useStoreContext } from "../../contexts/StoreContext";
import storeService from "../../services/storeService.js";
import productService from "../../services/productService";
import authContext from "../../contexts/AuthContext/AuthContext";
import cartContext from "../../contexts/CartContext/CartContext";
import actionCreator from "../../utils/actionCreator";

import PageContainer from "../../layouts/PageContainer/PageContainer.js";
import RenderLoading from "../../components/Loading/RenderLoading";
import Button from "../../components/Button";

import {
    MdOutlineSdStorage,
    MdCameraFront,
    MdCamera,
    MdSmartScreen,
    MdOutlineSystemSecurityUpdateWarning,
} from "react-icons/md";
import { FaMemory, FaMicrochip } from "react-icons/fa";
import "./ItemDetailPage.css";
import "animate.css";
import { ADD_TO_CART, DECREASE } from "../../contexts/types";

const ItemDetailPage = (props) => {
    const { slug } = useParams();
    const { loading } = useStoreContext();
    const { user } = useContext(authContext).state;
    const userId = user && user._id;
    const { dispatch } = useContext(cartContext);

    // state
    const [selectedItem, setSelectedItem] = useState({});
    const [quantity, setQuantity] = useState(1);

    // selectedItem && console.log("SelectedItem:", selectedItem);

    const {
        id,
        category,
        title,
        shortDesc,
        fullDesc,
        stock,
        details,
        color,
        sale_price,
        price,
        image_url,
    } = selectedItem ? selectedItem : undefined;

    const isAvailable =
        stock && stock.remain > 0 ? (
            <span className="text-indigo-600">Available</span>
        ) : (
            <span className="text-rose-500">Out of stock</span>
        );

    const isLimitedQuantity = stock && quantity === stock.remain ? true : false;

    const { backCamera, frontCamera, chip, ram, rom, screenSize } = details
        ? details
        : "";
    const navigate = useNavigate();

    const onHandleAddToCart = (e) => {
        e.preventDefault();
        dispatch(
            actionCreator(ADD_TO_CART, {
                item: selectedItem,
                orderQuantity: quantity,
            })
        );

        navigate("/cart");
    };

    const onHandleInputQuantity = (e) => {
        const { value } = e.target;
        setQuantity(Number(value));
    };

    const onDecrease = () => {
        let newQuantity = quantity;
        setQuantity(newQuantity > 0 ? newQuantity - 1 : 0);
    };

    const onIncrease = () => {
        let newQuantity = quantity;
        setQuantity(
            newQuantity < stock.remain ? newQuantity + 1 : stock.remain
        );
    };

    const fetchDetailData = async () => {
        const result = await productService.getDetail(slug);
        setSelectedItem(result.data.data);
    };

    useEffect(() => {
        fetchDetailData();
    }, [slug]);

    if (loading) {
        return (
            <PageContainer title="Product detail">
                <RenderLoading />;
            </PageContainer>
        );
    }

    return (
        <PageContainer title="Product detail">
            <div className="md:container h-full gap-4 pt-8 md:pt-16 lg:pt-20 pb-6 md:pb-12 px-5 md:px-10">
                <div className="w-full grid grid-cols-1 lg:flex lg:flex-row">
                    <div className="flex md:justify-end items-center basis-full lg:basis-1/3">
                        <div className="max-w-full max-h-full md:w-2/3 lg:w-full mx-auto">
                            <img
                                src={image_url}
                                alt={title}
                                className="w-full"
                            />
                        </div>
                    </div>

                    <div className="item-info w-full flex flex-col gap-3 md:gap-2 space-y-0 md:space-y-2 basis-full lg:basis-2/3">
                        <h2 className="text-gray-800 text-xl md:text-3xl font-bold mt-2 lg:mt-0 detail-title">
                            {title}
                        </h2>
                        <h3 className="text-indigo-600 text-lg md:text-2xl">
                            {storeService.convertCurrency(price, "VND")}&nbsp;
                            <span
                                className={`${
                                    sale_price
                                        ? "text-slate-400 line-through"
                                        : "hidden"
                                }`}
                            >
                                {storeService.convertCurrency(
                                    sale_price,
                                    "VND"
                                )}
                            </span>
                        </h3>
                        <p className="my-8 text-xs md:text-base lg:text-lg">
                            {shortDesc}
                        </p>
                        <p className="my-8 text-xs md:text-base lg:text-lg">
                            {/* Stock: {isAvailable} */}
                            Stock:{" "}
                            <span className="text-xl text-indigo-600">
                                {stock?.remain}
                            </span>
                        </p>

                        <div className="w-full flex flex-col sm:flex-row gap-6">
                            <div className="w-full md:w-1/3 lg:w-1/4 flex flex-wrap border-b border-indigo-600 justify-between items-end text-lg lg:text-2xl">
                                <button onClick={() => onDecrease()}>-</button>
                                <input
                                    type="text"
                                    min="0"
                                    name="quantity"
                                    required
                                    placeholder="1"
                                    className="w-1/2 text-center"
                                    value={quantity}
                                    onChange={onHandleInputQuantity}
                                />
                                <button onClick={() => onIncrease()}>+</button>
                            </div>
                            <Button
                                type="button"
                                text="Thêm vào giỏ"
                                disabled={quantity === 0 ? true : false}
                                customClass="w-full sm:w-1/3 md:w-1/2 text-sm md:text-base btn-grad"
                                onHandleClick={onHandleAddToCart}
                            />
                        </div>
                        <p
                            className={`text-red-500 transition-all ${
                                isLimitedQuantity ? "opacity-100" : "opacity-0"
                            }`}
                        >
                            Sản phẩm đã đạt giới hạn tồn kho
                        </p>
                    </div>
                </div>

                {/* <hr className="icon-divider w-full mt-12"></hr> */}
                <div id="item-detail" className="w-full mt-16 lg:mt-24">
                    <div className="w-full mx-auto lg:px-8 flex gap-2 items-center justify-center text-indigo-600">
                        <span className="w-1/2 bg-gray-400 divider-line"></span>
                        <MdOutlineSystemSecurityUpdateWarning className="text-xl lg:text-3xl" />
                        <span className="w-1/2 bg-gray-400 divider-line"></span>
                    </div>
                    <div className="w-full px-0 lg:px-14 xl:px-18 pt-3">
                        <h3 className="mb-4 text-xl md:text-2xl lg:text-3xl font-extrabold text-gray-500 detail-title">
                            Thông tin sản phẩm
                        </h3>
                        {fullDesc ? (
                            <p className="w-full mx-auto mt-4 text-sm sm:text-base"></p>
                        ) : (
                            ""
                        )}
                        <div className="grid grid-cols-1 md:grid-cols-3 xl:grid-cols-6 gap-2 md:gap-4 text-sm md:text-base">
                            <div>
                                <div className="flex items-center gap-2 text-indigo-500 opacity-90">
                                    <FaMicrochip />
                                    CHIP
                                </div>
                                <p className="text-xs md:text-sm text-gray-400">
                                    {chip}
                                </p>
                            </div>

                            <div>
                                <div className="flex items-center gap-2 text-indigo-500 opacity-90">
                                    <FaMemory />
                                    RAM
                                </div>
                                <p className="text-xs md:text-sm text-gray-400">
                                    {ram}
                                </p>
                            </div>

                            <div>
                                <div className="flex items-center gap-2 text-indigo-500 opacity-90">
                                    <MdOutlineSdStorage />
                                    Bộ nhớ trong
                                </div>
                                <p className="text-xs md:text-sm text-gray-400">
                                    {rom}
                                </p>
                            </div>

                            <div>
                                <div className="flex items-center gap-2 text-indigo-500 opacity-90">
                                    <MdCamera />
                                    Camera sau
                                </div>
                                <p className="text-xs md:text-sm text-gray-400">
                                    {backCamera}
                                </p>
                            </div>

                            <div>
                                <div className="flex items-center gap-2 text-indigo-500 opacity-90">
                                    <MdCameraFront />
                                    Camera trước
                                </div>
                                <p className="text-xs md:text-sm text-gray-400">
                                    {frontCamera}
                                </p>
                            </div>

                            <div>
                                <div className="flex items-center gap-2 text-indigo-500 opacity-90">
                                    <MdSmartScreen />
                                    Màn hình
                                </div>
                                <p className="text-xs md:text-sm text-gray-400">
                                    {screenSize}
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </PageContainer>
    );
};

export default ItemDetailPage;
