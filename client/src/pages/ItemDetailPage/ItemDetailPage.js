import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { useStoreContext } from "../../contexts/StoreContext";

import Button from "../../components/Button";
import storeService from "../../services/storeService.js";
import PageContainer from "../../layouts/PageContainer/PageContainer.js";

import "./ItemDetailPage.css";
import "animate.css";

const ItemDetailPage = (props) => {
  const { itemId } = useParams();
  const { products } = useStoreContext();
  const [showDetail, setShowDetail] = useState(false);
  // console.log("Item id:", itemId);
  // console.log(products);
  const selectedItem = products.find((product) => {
    return product.id === Number(itemId);
  });
  const {
    id,
    category,
    title,
    shortDesc,
    fullDesc,
    stock,
    color,
    sale_price,
    price,
    image_url,
  } = selectedItem;

  const isAvailable =
    stock.remain > 0 ? (
      <span className="text-indigo-600">Available</span>
    ) : (
      <span className="text-rose-500">Out of stock</span>
    );

  const contentSlides = [image_url];

  return (
    <PageContainer>
      <div className="container grid grid-cols-1 md:grid-cols-2 gap-4 pt-8 md:pt-16 lg:pt-20 pb-6 md:pb-12 px-6 md:px-12 h-full">
        <div className="w-full flex justify-center md:justify-end">
          <div className="img-container max-w-full max-h-full">
            <img src={image_url} alt={title} className="w-full" />
          </div>
        </div>
        <div className="item-info w-full flex flex-col gap-4 md:gap-2 space-y-0 md:space-y-8">
          <h3 className="text-gray-800 text-2xl sm:text-3xl md:text-4xl detail-title">
            {title}
          </h3>
          <h2 className="text-indigo-600 text-base sm:text-xl md:text-2xl font-extrabold">
            {storeService.convertCurrency(price, "VND")}&nbsp;
            <span className="text-slate-400 line-through">
              {storeService.convertCurrency(sale_price, "VND")}
            </span>
          </h2>
          <p className="my-8 text-sm sm:text-base">{shortDesc}</p>
          <p className="my-8 text-sm sm:text-base">Stock: {isAvailable}</p>

          <div className="flex flex-col gap-4">
            <div className="w-full flex flex-col sm:flex-row justify-between gap-4">
              <div className="w-full sm:w-1/3 lg:w-1/4 flex flex-wrap border-b border-indigo-600 justify-between items-end text-lg lg:text-xl">
                <span>-</span>
                <input
                  type="number"
                  min="0"
                  placeholder="1"
                  className="w-1/3 text-center"
                />
                <span>+</span>
              </div>
              <Button
                type="button"
                text="Add to cart"
                customClass="w-full sm:w-2/3 lg:w-1/2 text-sm md:text-base btn-grad"
              />
            </div>

            <button
              className="text-sm md:text-base border-2 border-indigo-600 hover:bg-indigo-600 hover:text-white transition-colors duration-300 rounded-lg py-2 px-4"
              onClick={() => setShowDetail(!showDetail)}
            >
              More detail
            </button>
          </div>
        </div>
      </div>
      <div id="item-detail" className={`container ${showDetail ? "show" : ""}`}>
        <div className={`w-full px-8 md:px-20 pt-2 md:pt-4 `}>
          <h3 className="text-2xl md:text-3xl font-extrabold text-indigo-600">
            Product information
          </h3>
          <p className="w-full mx-auto mt-4 text-sm sm:text-base">{fullDesc}</p>
        </div>
      </div>
    </PageContainer>
  );
};

export default ItemDetailPage;
