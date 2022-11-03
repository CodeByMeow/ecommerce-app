import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";

import storeService from "../../services/storeService";
import OverlayModal from "../OverlayModal/OverlayModal";

// import "./ProductItem.css";

const ProductItem = (props) => {
  const [isShowModal, setShowModal] = useState(false);

  const onHandleMouseEnter = () => {
    console.log("Event: mouseenter");
    setShowModal(true);
  };
  const {
    id,
    category,
    title,
    shortDesc,
    slug,
    color,
    price,
    sale_price,
    image_url,
  } = props.product;
  return (
    <div
      key={id}
      className="group relative product-item px-4 py-4 rounded-xl flex flex-col transition-all duration-300"
      onMouseOver={() => setShowModal(true)}
      onMouseLeave={() => setShowModal(false)}
    >
      <div className="mx-auto overflow-hidden rounded-md h-36 w-36 lg:w-full lg:h-auto lg:aspect-square">
        <Link to={slug}>
          <img
            src={image_url}
            alt={title}
            className="h-full w-full object-cover object-center lg:h-full lg:w-full"
          />
        </Link>
      </div>
      <OverlayModal isShowModal={isShowModal} itemId={id} />
      <h3 className="text-base md:text-lg text-gray-900 font-extrabold mt-4 item-title line-clamp-2">
        <Link to={slug}>{title}</Link>
      </h3>
      <div className="md:mt-2 flex justify-between items-start gap-2">
        <div>
          <p className="text-sm md:text-base font-extrabold item-price text-indigo-500">
            {storeService.convertCurrency(sale_price, "VND")}
          </p>
          <p className="text-xs md:text-sm line-through font-extrabold item-price text-gray-700 opacity-80">
            {storeService.convertCurrency(price, "VND")}
          </p>
        </div>

        <p className="text-sm text-gray-500">{color}</p>
      </div>
    </div>
  );
};

export default ProductItem;
