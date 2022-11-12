import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { useStoreContext } from "../../contexts/StoreContext";

import Button from "../../components/Button";
import storeService from "../../services/storeService.js";
import PageContainer from "../../layouts/PageContainer/PageContainer.js";

import "./ItemDetailPage.css";
import "animate.css";

const ItemDetailPage = (props) => {
  const { slug } = useParams();
  const { products } = useStoreContext();
  const [showDetail, setShowDetail] = useState(false);
  // console.log("Item id:", slug);
  // console.log(products);
  const selectedItem = products.find((product) => {
    return product.slug === slug;
  });

  console.log(selectedItem);

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

  return (
    <PageContainer>
      <div className="container h-full gap-4 pt-8 md:pt-16 lg:pt-20 pb-6 md:pb-12 px-6 md:px-12">
        <div className="w-full grid grid-cols-1 md:grid-cols-2 ">
          <div className="flex justify-center md:justify-end">
            <div className="max-w-full max-h-full img-container">
              <img src={image_url} alt={title} className="w-full" />
            </div>
          </div>

          <div className="item-info w-full flex flex-col gap-4 md:gap-2 space-y-0 md:space-y-2">
            <h3 className="text-gray-800 text-2xl sm:text-3xl md:text-4xl font-bold">
              {title}
            </h3>
            <h2 className="text-indigo-600 text-base sm:text-xl md:text-3xl">
              {storeService.convertCurrency(price, "VND")}&nbsp;
              <span className={`${sale_price ? "text-slate-400 line-through" : "hidden"}`}>
                {storeService.convertCurrency(sale_price, "VND")}
              </span>
            </h2>
            <p className="my-8 text-sm sm:text-base md:text-lg">{shortDesc}</p>
            <p className="my-8 text-sm sm:text-base md:text-lg">Stock: {isAvailable}</p>

            <div className="w-full flex flex-col sm:flex-row gap-6">
              <div className="w-full sm:w-1/3 lg:w-1/4 flex flex-wrap border-b border-indigo-600 justify-between items-end text-lg lg:text-2xl">
                <button>-</button>
                <input
                  type="text"
                  min="0"
                  required
                  placeholder="1"
                  className="w-1/2 text-center"
                />
                <button>+</button>
              </div>
              <Button
                type="button"
                text="Add to cart"
                customClass="w-full sm:w-1/3 md:w-1/2 text-sm md:text-base btn-grad"
              />
            </div>
            {/*  <a href="#item-detail"
              className="text-sm md:text-base text-center border-2 border-indigo-600 hover:bg-indigo-600 hover:text-white transition-colors duration-300 rounded-lg py-2 px-4"
             
            >
              More detail
            </a> */}
          </div>
        </div>

        <div id="item-detail" className="w-full mt-16 md:mt-0">
          <div className="w-full px-0 lg:px-16 xl:px-32 pt-2 md:pt-4">
            <h3 className="text-2xl md:text-3xl font-extrabold text-indigo-600">
              Product information
            </h3>
            <p className="w-full mx-auto mt-4 text-sm sm:text-base">
              {fullDesc}
            </p>
          </div>
        </div>
      </div>
    </PageContainer>
  );
};

export default ItemDetailPage;
