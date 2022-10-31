import React from "react";
import PageContainer from "../../layouts/PageContainer/PageContainer";
import "./About.css";
const AboutPage = () => {
  return (
    <PageContainer title="About us">
      <div className="About flex flex-col items-center justify-center">
        <h1 className="border-b-4 border-indigo-500 m-8">About Us</h1>
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
              <span>1.4 Cr+</span>
              <span>Customer</span>
            </li>
            <li>
              <img src="https://s3n.cashify.in/imageLibrary/cash_efc77232393e.png"></img>
              <span>Lakh+</span>
              <span>Devices</span>
              <span>Bought</span>
            </li>
            <li>
              <img src="https://s3n.cashify.in/imageLibrary/cash_efc77232393e.png"></img>
              <span>250 Cr+</span>
              <span>Cash</span>
              <span>Given</span>
            </li>
            <li>
              <img src="https://s3n.cashify.in/imageLibrary/Offline_Stores_13a0b9059bcb.png"></img>
              <span>150+</span>
              <span>Office</span>
              <span>Store</span>
            </li>
            <li>
              <img src="https://s3n.cashify.in/imageLibrary/1_Mn_10aad13ff451.png"></img>
              <span>10 Mn+</span>
              <span>App</span>
              <span>Dowload</span>
            </li>
            <li>
              <img src="https://s3n.cashify.in/imageLibrary/10_Lakh_387a3153d208.png"></img>
              <span>40</span>
              <span>Lakh</span>
              <span>Devices</span>
              <span>Sold</span>
            </li>
            <li>
              <img src="https://s3n.cashify.in/imageLibrary/Serviceable_locations_c06cb8ac9185.png"></img>
              <span>15000+</span>
              <span>Serviceable</span>
              <span>Locations</span>
            </li>
            <li>
              <img src="https://s3n.cashify.in/imageLibrary/Services_d9a04f70e9d8.png"></img>
              <span>1000+</span>
              <span>Partner</span>
            </li>
          </ul>
        </div>
      </div>
    </PageContainer>
  );
};

export default AboutPage;
