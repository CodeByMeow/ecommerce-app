import React from "react";
import { useNavigate } from "react-router-dom";
import PageContainer from "../../layouts/PageContainer/PageContainer";
import Slider from "../../components/Slider/Slider";
import ProductList from "../../components/ProductList/ProductList";
import { useStoreContext } from "../../contexts/StoreContext";
import Button from "../../components/Button.js";
import "./HomePage.css";

const HomePage = () => {
  const { products } = useStoreContext();
  const navigate = useNavigate();
  const contentSlides = [
    "/assets/banner/apple_banner.jpeg",
    "/assets/banner/oppo_banner.jpeg",
    "/assets/banner/samsung_zflip3_carousel_colorcombokv_ex_pc.jpeg",
  ];

  return (
    <PageContainer title="Mobile Shopping Store">
      <Slider contentSlides={contentSlides} />
      <h2 className="text-center capitalize text-2xl md:text-4xl font-semibold tracking-tight text-indigo-500 pt-12 lg:pt-20">
        Popular products
      </h2>
      <ProductList products={products} />
      <div className="w-full flex justify-center">
        <Button
          text="Xem tất cả sản phẩm"
          customClass="btn-grad"
          onHandleClick={() => navigate("/products")}
        />
      </div>
      <div className="bg-transparent">
        <div className="lg:container mx-auto mt-8 lg:mt-14 py-6 px-6 md:px-16 grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="w-full">
            <img src="/assets/cols-2-left-img.jpg"></img>
          </div>
          <div className="w-full h-full flex flex-col gap-3 md:gap-4">
            <h3 className="text-xl md:text-2xl">Giới thiệu</h3>
            <h2 className="introduction-title capitalize text-xl md:text-3xl text-indigo-600">
              Mollyjogger - Uy tín trong từng sản phẩm
            </h2>
            <p className="text-sm md:text-base">
              Mollyjogger - là đơn vị bán lẻ chuyên nghiệp các dòng sản phẩm của
              Apple được thành lập từ tháng 06/2016, với trọng tâm là các sản
              phẩm MacBook. Với sự nhiệt tình, nghiêm túc trong suốt quá trình
              hoạt động đến nay Mollyjogger đã tạo dựng được niềm tin đến hàng vạn
              khách hàng. Hiện MacOne là top những nhà bán lẻ chuyên sâu về dòng
              sản phẩm MacBook tại Việt Nam.
            </p>
            <Button
              type="button"
              customClass="btn-outline w-2/3 md:w-1/2 2xl:w-1/3"
              text="Xem thêm"
              onHandleClick={() => navigate("/about-us")}
            />
          </div>
        </div>
      </div>
    </PageContainer>
  );
};

export default HomePage;
