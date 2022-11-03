import React from "react";
import { useNavigate } from "react-router-dom";

import { HiShoppingCart, HiOutlineHeart, HiHeart } from "react-icons/hi";

const OverlayModal = (props) => {
  const { itemId, isShowModal } = props;
  const navigate = useNavigate();

  const onHandleViewDetail = () => {
    navigate(`/products/${itemId}`);
  };
  return (
    <div
      className={`w-full h-full absolute top-0 left-0 ${
        isShowModal ? "visible" : "invisible"
      }`}
    >
      <div className="w-full h-full bg-black rounded-lg top-0 left-0 opacity-50 "></div>
      <div className="w-full h-full flex flex-wrap gap-6 justify-center items-center my-auto absolute top-0 left-0 px-3">
        <button
          className="text-white rounded-lg border-2 border-white hover:bg-white hover:text-indigo-600 px-3 py-2 z-10 transition-colors duration-300"
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
