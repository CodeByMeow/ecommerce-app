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
            <div className="mx-auto overflow-hidden rounded-md h-36 w-36 lg:w-full lg:h-auto lg:aspect-square">
                <Link to={slug}>
                    <img
                        src={image_url}
                        alt={title}
                        className="h-full w-full object-cover object-center lg:h-full lg:w-full"
                    />
                </Link>
            </div>
            <h3 className="text-base text-gray-900 font-extrabold mt-4 item-title line-clamp-2">
                <Link to={slug}>{title}</Link>
            </h3>
            <div className="md:mt-2 gap-2 text-center">
                {!!sale_price && (
                    <p className="text-sm md:text-base font-extrabold item-price text-indigo-500">
                        {storeService.convertCurrency(sale_price, "VND")}
                    </p>
                )}
                <p
                    className={`text-xs md:text-sm ${
                        !!sale_price ? "line-through text-gray-700" : ""
                    } font-extrabold item-price  opacity-80`}
                >
                    {storeService.convertCurrency(price, "VND")}
                </p>
            </div>
            <OverlayModal isShowModal={isShowModal} slug={slug} />
        </div>
    );
};

export default ProductItem;
