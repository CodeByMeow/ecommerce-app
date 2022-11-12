import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";

import storeService from "../../services/storeService";
import OverlayModal from "../OverlayModal/OverlayModal";

// import "./ProductItem.css";

const ProductItem = (props) => {
  const [isShowModal, setShowModal] = useState(false);

  const {
    _id,
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
      key={_id}
      className="group relative product-item px-4 py-4 rounded-xl flex flex-col"
      onMouseOver={() => setShowModal(true)}
      onMouseLeave={() => setShowModal(false)}
    >
      <div className="mx-auto overflow-hidden rounded-md h-48 md:h-36 w-48 md:w-36 lg:w-full lg:h-auto lg:aspect-square">
        <Link to={slug}>
          <img
            src={image_url}
            alt={title}
            className="h-full w-full object-cover object-center lg:h-full lg:w-full"
          />
        </Link>
      </div>
      <h3 className="text-lg xl:text-2xl leading-6 text-gray-900 font-semibold mt-4 line-clamp-2 item-title">
        <Link to={slug}>{title}</Link>
      </h3>
      <div className="sm:mt-2 gap-2">
        {price && (
          <p className="text-base xl:text-xl item-price text-indigo-500">
            {storeService.convertCurrency(price, "VND")}
          </p>
        )}
        <p
          className={`${
            sale_price
              ? "text-base xl:text-xl line-through text-gray-700 font-extrabold item-price opacity-80"
              : "hidden"
          }`}
        >
          {storeService.convertCurrency(sale_price, "VND")}
        </p>
      </div>
      <OverlayModal isShowModal={isShowModal} slug={slug} />
    </div>
  );
};

export default ProductItem;
