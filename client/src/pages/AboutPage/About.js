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
        <div className="flex flex-col history justify-center items-center">
          <h1 className="m-8 text-center">Our history</h1>

          <div className="flex flex-row w-3/4 justify-center items-center m-6">
            <div className="w-3/5">
              <h3 className="text-teal-400">The IDEA originated in 2013</h3>
              <p>
                When one of 3 friends wanted to buy the latest iPhone, he tried
                to sell off his then-current Samsung phone for funding but found
                it difficult to do so.
              </p>
            </div>
            <img src="https://s3n.cashify.in/imageLibrary/IDEA_1e5022c3d5d8.png"></img>
          </div>
          <div className="flex flex-row w-3/4 m-6">
            <img src="https://s3n.cashify.in/imageLibrary/2nd_Big_Image__42bac24a39f8.png"></img>
            <div className="w-3/5 flex flex-col justify-center items-center m-6">
              <h3 className="text-teal-400">
                That's when the concept of CASHIFY was formed
              </h3>
              <p>
                To create a PLATFORM that would let you Sell, Repair, Recycle &
                Manage your phone in a SIMPLE MANNER for the Best PRICE.
              </p>
            </div>
          </div>
          <div className="flex flex-row w-3/4 m-6">
            <div className="w-3/5 flex flex-col justify-center items-center">
              <h3 className="text-teal-400">
                From 1 Room to 15 Office From 3 people to 800 People
              </h3>
              <p>
                We are now a team of 800 PASSIONATE folks who are DEDICATED to
                help you keep your smartphone (the most important thing in your
                life) forever healthy & UP-TO-DATE.
              </p>
            </div>
            <img src="https://s3n.cashify.in/imageLibrary/3rd_Image_dc4813722c53.png"></img>
          </div>
          <div className="flex flex-row w-3/4 m-6">
            <img src="https://s3n.cashify.in/imageLibrary/4th_Image__d7c26150f695.png"></img>
            <div className="w-3/5 flex flex-col justify-center items-center">
              <h3 className="text-teal-400">Today</h3>
              <p>
                Cashify not just ENABLES you to SELL but also, BUY, RECYCLE,
                ACCESSORIZE & REPAIR your smartphone, so that every time you
                visit us, you get all that you need
              </p>
            </div>
          </div>
        </div>
        <div className="staff-member">
          <h1 className="text-center">Team</h1>
          <h3 className="text-center">
            We’re here to unleash the world’s creative energy by designing a
            more enlightened way of working.
          </h3>
          <ul className="flex flex-row flex-wrap items-center justify-center">
            <li>
              <div className="flex justify-center items-center">
                <section>
                  <p className="text-teal-400 font-semibold">MANDEEP MANOCHA</p>
                  <p>Co-Founder & CEO</p>
                </section>
                <img src="https://s3n.cashify.in/imageLibrary/Mandeep_a344d2b850de.png"></img>
              </div>
            </li>
            <li>
              <div className="flex justify-center items-center">
                <section>
                  <p className="text-teal-400 font-semibold">NAKUL KUMAR</p>
                  <p>Co-founder & CMO</p>
                </section>
                <img src="https://s3n.cashify.in/imageLibrary/Mask_Group_43_059081208fae.png"></img>
              </div>
            </li>
            <li>
              <div className="flex justify-center items-center">
                <section>
                  <p className="text-teal-400 font-semibold">AMIT SETHI</p>
                  <p>Co-Founder & CTO</p>
                </section>
                <img src="https://s3n.cashify.in/imageLibrary/Mask_Group_432x_e6bd21f54a9a.png"></img>
              </div>
            </li>
            <li>
              <div className="flex justify-center items-center">
                <section>
                  <p className="text-teal-400 font-semibold">
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
                  <p className="text-teal-400 font-semibold">AKSH CHAUHAN</p>
                  <p>COO</p>
                </section>
                <img src="https://s3n.cashify.in/imageLibrary/Image_1702x_15fc05ca2e65.png"></img>
              </div>
            </li>
            <li>
              <div className="flex justify-center items-center">
                <section>
                  <p className="text-teal-400 font-semibold">SHUBH DARPAN</p>
                  <p>Chief Revenue Officer</p>
                </section>
                <img src="https://s3n.cashify.in/imageLibrary/Image_1762x_6c8a508082cf.png"></img>
              </div>
            </li>
            <li>
              <div className="flex justify-center items-center">
                <section>
                  <p className="text-teal-400 font-semibold">
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
                  <p className="text-teal-400 font-semibold">
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
                  <p className="text-teal-400 font-semibold">
                    PANKAJ KUMAR AGRAWAL
                  </p>
                  <p>Senior VP - Engineering</p>
                </section>
                <img src="https://s3n.cashify.in/imageLibrary/Image_1732x_7f4ecae116e5.png"></img>
              </div>
            </li>
          </ul>
        </div>
        <div className="bg-teal-500 w-3/4 p-8 rounded-xl">
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
