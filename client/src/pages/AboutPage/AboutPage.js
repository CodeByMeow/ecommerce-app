import React from "react";
import PageContainer from "../../layouts/PageContainer/PageContainer";
import "./About.css";

const AboutPage = () => {
  return (
    <PageContainer title="About us">
      <div className="About flex flex-col items-center justify-center">
        <h1 className="border-b-4 border-violet-600 m-8">About Us</h1>
        <p>
          When it comes to smartphones, we’re the only one place that does it
          all.
        </p>
        <p>At Cashify, you get</p>
        <div>
          <ul className="flex flex-row flex-wrap items-center justify-center">
            <li>
              <img src="https://s3n.cashify.in/imageLibrary/Refurbished_Phone_2b2b7eb348a3.png"></img>
            </li>
            <li>
              <img src="https://s3n.cashify.in/imageLibrary/Refurbished_Phone_2b2b7eb348a3.png"></img>
            </li>
            <li>
              <img src="https://s3n.cashify.in/imageLibrary/accessoires_1ff95e685cef.png"></img>
            </li>
            <li>
              <img src="https://s3n.cashify.in/imageLibrary/Smartphone_Repair_7621fd67996c.png"></img>
            </li>
            <li>
              <img src="https://s3n.cashify.in/imageLibrary/recycle_3c30b63331e8.png"></img>
            </li>
          </ul>
        </div>
        <div className="introduce">
          <ul className="flex flex-row flex-wrap items-center justify-center">
            <li>
              <img src="https://s3n.cashify.in/imageLibrary/15_lakh_customer_500baeebe850.png"></img>
              <span>14.000</span>
              <span>khách hàng</span>
            </li>
            <li>
              <img src="https://s3n.cashify.in/imageLibrary/cash_efc77232393e.png"></img>
              <span>Lakh+</span>
              <span>Dịch vụ</span>
              <span>thanh toán</span>
            </li>
            <li>
              <img src="https://s3n.cashify.in/imageLibrary/cash_efc77232393e.png"></img>
              <span>2.500</span>
              <span>Tài khoản</span>
            </li>
            <li>
              <img src="https://s3n.cashify.in/imageLibrary/Offline_Stores_13a0b9059bcb.png"></img>
              <span>150+</span>
              <span>Văn phòng</span>
              <span>Cửa hàng</span>
            </li>
            <li>
              <img src="https://s3n.cashify.in/imageLibrary/1_Mn_10aad13ff451.png"></img>
              <span>10 Mn+</span>
              <span>App</span>
              <span>Lượt tải</span>
            </li>
            <li>
              <img src="https://s3n.cashify.in/imageLibrary/10_Lakh_387a3153d208.png"></img>
              <span>40</span>
              <span>Thiết bị</span>
              <span>đã bán</span>
            </li>
            <li>
              <img src="https://s3n.cashify.in/imageLibrary/Serviceable_locations_c06cb8ac9185.png"></img>
              <span>15000+</span>
              <span>Địa điểm sửa chữa</span>
            </li>
            <li>
              <img src="https://s3n.cashify.in/imageLibrary/Services_d9a04f70e9d8.png"></img>
              <span>1000+</span>
              <span>Người đồng hành</span>
            </li>
          </ul>
        </div>
        <div className="flex flex-col history justify-center items-center">
          <h1 className="m-8 text-center">Lịch sử </h1>
          <div className="flex flex-row flex-wrap w-3/4 justify-center items-center m-6">
            <div className="w-3/5">
              <h3 className="text-violet-700">IDEA bắt nguồn từ năm 2013</h3>
              <p>
                Khi một trong 3 người bạn muốn mua chiếc iPhone mới nhất, anh ấy
                đã thử để bán chiếc điện thoại Samsung hiện tại của mình để lấy
                tiền nhưng bị phát hiện thật khó để làm như vậy.
              </p>
            </div>
            <img src="https://s3n.cashify.in/imageLibrary/IDEA_1e5022c3d5d8.png"></img>
          </div>
          <div className="flex flex-row flex-wrap w-3/4 m-6">
            <img src="https://s3n.cashify.in/imageLibrary/2nd_Big_Image__42bac24a39f8.png"></img>
            <div className="w-3/5 flex flex-col justify-center items-center m-6">
              <h3 className="text-violet-700">
                Đó là lúc khái niệm CASHIFY được hình thành
              </h3>
              <p>
                Để tạo một NỀN TẢNG cho phép bạn Bán, Sửa chữa, Tái chế & Quản
                lý điện thoại của bạn một cách ĐƠN GIẢN với GIÁ TỐT NHẤT.
              </p>
            </div>
          </div>
          <div className="flex flex-row flex-wrap w-3/4 m-6">
            <div className="w-3/5 flex flex-col justify-center items-center">
              <h3 className="text-violet-700">
                Từ 1 Phòng đến 15 Văn phòng Từ 3 người đến 800 Người{" "}
              </h3>
              <p>
                Chúng tôi hiện là một nhóm gồm 800 người ĐAM MÊ, những người
                DÀNH RIÊNG cho giúp bạn giữ điện thoại thông minh của mình (thứ
                quan trọng nhất trong life) mãi khỏe mạnh & CẬP NHẬT.
              </p>
            </div>
            <img src="https://s3n.cashify.in/imageLibrary/3rd_Image_dc4813722c53.png"></img>
          </div>
          <div className="flex flex-row flex-wrap w-3/4 m-6">
            <img src="https://s3n.cashify.in/imageLibrary/4th_Image__d7c26150f695.png"></img>
            <div className="w-3/5 flex flex-col justify-center items-center">
              <h3 className="text-violet-700">Hiện tại</h3>
              <p>
                Cashify không chỉ CHO PHÉP bạn BÁN mà còn MUA, TÁI CHẾ, TRUY CẬP
                & SỬA CHỮA điện thoại thông minh của bạn, để mỗi khi bạn hãy đến
                với chúng tôi, bạn sẽ có được tất cả những gì bạn cần
              </p>
            </div>
          </div>
        </div>
        <div className="staff-member">
          <h1 className="text-center">Team</h1>
          <h3 className="text-center">
            Chúng tôi ở đây để giải phóng năng lượng sáng tạo của thế giới bằng
            cách thiết kế một cách làm việc sáng suốt hơn.
          </h3>
          <ul className="flex flex-row flex-wrap items-center justify-center">
            <li>
              <div className="flex justify-center items-center">
                <section>
                  <p className="text-violet-700 font-semibold">
                    MANDEEP MANOCHA
                  </p>
                  <p>Co-Founder & CEO</p>
                </section>
                <img src="https://s3n.cashify.in/imageLibrary/Mandeep_a344d2b850de.png"></img>
              </div>
            </li>
            <li>
              <div className="flex justify-center items-center">
                <section>
                  <p className="text-violet-700 font-semibold">NAKUL KUMAR</p>
                  <p>Co-founder & CMO</p>
                </section>
                <img src="https://s3n.cashify.in/imageLibrary/Mask_Group_43_059081208fae.png"></img>
              </div>
            </li>
            <li>
              <div className="flex justify-center items-center">
                <section>
                  <p className="text-violet-700 font-semibold">AMIT SETHI</p>
                  <p>Co-Founder & CTO</p>
                </section>
                <img src="https://s3n.cashify.in/imageLibrary/Mask_Group_432x_e6bd21f54a9a.png"></img>
              </div>
            </li>
            <li>
              <div className="flex justify-center items-center">
                <section>
                  <p className="text-violet-700 font-semibold">
                    SIDDHANT DHINGRA
                  </p>
                  <p>Co-founder & Chief Business </p>
                  <p>Officer - Global Markets</p>
                </section>
                <img src="https://s3n.cashify.in/imageLibrary/Image_1692x_849c174ce22c.png"></img>
              </div>
            </li>
            <li>
              <div className="flex justify-center items-center">
                <section>
                  <p className="text-violet-700 font-semibold">AKSH CHAUHAN</p>
                  <p>COO</p>
                </section>
                <img src="https://s3n.cashify.in/imageLibrary/Image_1702x_15fc05ca2e65.png"></img>
              </div>
            </li>
            <li>
              <div className="flex justify-center items-center">
                <section>
                  <p className="text-violet-700 font-semibold">SHUBH DARPAN</p>
                  <p>Chief Revenue Officer</p>
                </section>
                <img src="https://s3n.cashify.in/imageLibrary/Image_1762x_6c8a508082cf.png"></img>
              </div>
            </li>
            <li>
              <div className="flex justify-center items-center">
                <section>
                  <p className="text-violet-700 font-semibold">
                    ARUN PRATAP SINGH
                  </p>
                  <p>VP - Finance & Accounts</p>
                </section>
                <span>
                  <img src="https://s3n.cashify.in/imageLibrary/Image_1712x_697764639964.png"></img>
                </span>
              </div>
            </li>
            <li>
              <div className="flex justify-center items-center">
                <section>
                  <p className="text-violet-700 font-semibold">
                    ALOK KUMAR SHUKLA
                  </p>
                  <p>Senior VP - HR & Retail</p>
                </section>
                <img src="https://s3n.cashify.in/imageLibrary/Image_1742x_b82d496cc51c.png"></img>
              </div>
            </li>
            <li>
              <div className="flex justify-center items-center">
                <section>
                  <p className="text-violet-700 font-semibold">
                    PANKAJ KUMAR AGRAWAL
                  </p>
                  <p>Senior VP - Engineering</p>
                </section>
                <img src="https://s3n.cashify.in/imageLibrary/Image_1732x_7f4ecae116e5.png"></img>
              </div>
            </li>
          </ul>
        </div>
        <div className="bg-violet-600 w-3/4  rounded-xl h-8 m-4">
          <h1 className="text-center">COME JOIN US !</h1>
          <span>
            <i className="fa-sharp fa-solid fa-arrow-up-right-from-square"></i>
          </span>
        </div>
      </div>
    </PageContainer>
  );
};

export default AboutPage;
