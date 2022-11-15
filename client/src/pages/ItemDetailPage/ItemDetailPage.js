import React, { useContext, useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useStoreContext } from "../../contexts/StoreContext";
import storeService from "../../services/storeService.js";
import productService from "../../services/productService";

import PageContainer from "../../layouts/PageContainer/PageContainer.js";
import RenderLoading from "../../components/Loading/RenderLoading";
import Button from "../../components/Button";

import {
  MdOutlineSdStorage,
  MdCameraFront,
  MdCamera,
  MdSmartScreen,
} from "react-icons/md";
import { FaMemory, FaMicrochip } from "react-icons/fa";
import "./ItemDetailPage.css";
import "animate.css";

const ItemDetailPage = (props) => {
  const { slug } = useParams();
  const { loading } = useStoreContext();

  // state
  const [selectedItem, setSelectedItem] = useState({});

  selectedItem && console.log("SelectedItem:", selectedItem);

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

  const { backCamera, frontCamera, chip, ram, rom, screenSize } = details
    ? details
    : "";

  /* const [userCart, setUserCart] = useState({
    userId: "",
    products:[],    
  });  */

  const fetchDetailData = async () => {
    const result = await productService.getDetail(slug);
    setSelectedItem(result.data.data);
  };

  useEffect(() => {
    fetchDetailData();
  }, []);

  return (
    <PageContainer title="Product detail">
      {loading ? (
        <RenderLoading />
      ) : (
        <div className="container h-full gap-4 pt-8 md:pt-16 lg:pt-20 pb-6 md:pb-12 px-6 md:px-10">
          <div className="w-full grid grid-cols-1 lg:flex lg:flex-row">
            <div className="flex md:justify-end items-center basis-full lg:basis-1/3">
              <div className="max-w-full max-h-full md:w-2/3 lg:w-full mx-auto">
                <img src={image_url} alt={title} className="w-full" />
              </div>
            </div>

            <div className="item-info w-full flex flex-col gap-3 md:gap-2 space-y-0 md:space-y-2 basis-full lg:basis-2/3">
              <h2 className="text-gray-800 text-2xl md:text-3xl font-bold mt-2 lg:mt-0">
                {title}
              </h2>
              <h3 className="text-indigo-600 text-xl md:text-2xl">
                {storeService.convertCurrency(price, "VND")}&nbsp;
                <span
                  className={`${
                    sale_price ? "text-slate-400 line-through" : "hidden"
                  }`}
                >
                  {storeService.convertCurrency(sale_price, "VND")}
                </span>
              </h3>
              <p className="my-8 text-sm md:text-lg">{shortDesc}</p>
              <p className="my-8 text-sm md:text-lg">Stock: {isAvailable}</p>

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
                  text="Thêm vào giỏ"
                  customClass="w-full sm:w-1/3 md:w-1/2 text-sm md:text-base btn-grad"
                />
              </div>
            </div>
          </div>

          <div id="item-detail" className="w-full mt-10 md:mt-0">
            <div className="w-full px-0 lg:px-14 xl:px-18 pt-2 md:pt-6">
              <h3 className="text-2xl md:text-3xl font-extrabold text-indigo-600">
                Thông tin sản phẩm
              </h3>
              <p className="w-full mx-auto mt-4 text-sm sm:text-base">
                {fullDesc}
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 xl:grid-cols-6 gap-4">
                <div>
                  <div className="flex items-center gap-2 text-sm xl:text-base text-indigo-500 opacity-90">
                    <FaMicrochip />
                    CHIP
                  </div>
                  <p>{chip}</p>
                </div>

                <div>
                  <div className="flex items-center gap-2 text-sm md:text-base text-indigo-500 opacity-90">
                    <FaMemory />
                    RAM
                  </div>
                  <p>{ram}</p>
                </div>

                <div>
                  <div className="flex items-center gap-2 text-sm md:text-base text-indigo-500 opacity-90">
                    <MdOutlineSdStorage />
                    Bộ nhớ trong
                  </div>
                  <p>{rom}</p>
                </div>

                <div>
                  <div className="flex items-center gap-2 text-sm md:text-base text-indigo-500 opacity-90">
                    <MdCamera />
                    Camera sau
                  </div>
                  <p>{backCamera}</p>
                </div>

                <div>
                  <div className="flex items-center gap-2 text-sm md:text-base text-indigo-500 opacity-90">
                    <MdCameraFront />
                    Camera trước
                  </div>
                  <p>{frontCamera}</p>
                </div>

                <div>
                  <div className="flex items-center gap-2 text-sm md:text-base text-indigo-500 opacity-90">
                    <MdSmartScreen />
                    Màn hình
                  </div>
                  <p>{screenSize}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </PageContainer>
  );
};

export default ItemDetailPage;
