import React from "react";
import { useNavigate } from "react-router-dom";

import { HiShoppingCart, HiHeart } from "react-icons/hi";

// animation style
import "animate.css";

const OverlayModal = (props) => {
    const { slug, isShowModal } = props;
    const navigate = useNavigate();

    const onHandleViewDetail = () => {
        navigate(`/products/${slug}`);
    };
    return (
        <div
            className={`w-full h-full absolute top-0 left-0 transition-opacity duration-500 ${
                isShowModal ? "opacity-100" : "opacity-0"
            }`}
        >
            <div className="w-full h-full bg-black rounded-lg top-0 left-0 opacity-50 overlay transition-opacity"></div>
            <div
                className={`w-full h-full flex md:flex-col xl:flex-row gap-6 justify-center items-center my-auto absolute top-0 left-0 px-3 animate__animated ${
                    isShowModal ? "animate__zoomIn" : "animate__zoomOut"
                } animate__faster`}
            >
                <button
                    className=" text-white rounded-lg border-2 border-white hover:bg-white hover:text-indigo-600 px-3 py-2 z-10 transition-colors"
                    onClick={() => onHandleViewDetail()}
                >
                    View detail
                </button>
                <div className="text-white text-2xl flex flex-row gap-4">
                    <HiHeart />
                    <HiShoppingCart />
                </div>
            </div>
        </div>
    );
};

export default OverlayModal;
