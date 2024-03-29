import React, { useState } from "react";
import { Link } from "react-router-dom";

import storeService from "../../services/storeService";
import OverlayModal from "../OverlayModal/OverlayModal";

const ProductItem = (props) => {
    const [isShowModal, setShowModal] = useState(false);
    const {product} = props;

    const { _id, title, slug, shortDesc, price, sale_price, image_url } = product;
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
            <h3 className="text-lg xl:text-2xl leading-6 font-semibold mt-4 line-clamp-none md:line-clamp-1 xl:line-clamp-2  item-title">
                <Link to={slug}>{title}</Link>
            </h3>
            <p className="text-sm md:text-base leading-6 font-light my-2 line-clamp-3">
                {shortDesc}
            </p>
            <div className="mt-0 gap-2">
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
            <OverlayModal isShowModal={isShowModal} slug={slug} product={product}/>
        </div>
    );
};

export default ProductItem;
