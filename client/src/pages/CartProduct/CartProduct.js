import React from "react";
import "./CartProduct.css";

const CartProduct = () => {
  return (
    <div className="cart flex flex-wrap justify-center items-center	 flex-col ">
      <h1 className="m-6 text-4xl float-right">Cart</h1>
      <div className="flex flex-wrap m-6">
        <img
          className="w-48 h-56"
          src="https://cdn.shopify.com/s/files/1/0083/6380/2720/products/178_1_d906b06b-171e-4cf3-9866-50459f4027e7.jpg?v=1656511122"
        ></img>
        <section>
          <h2 className="text-3xl">Apple iPhone 8 - Refurbished</h2>
          <p>Grade: Fair</p>
          <p>Storage: 64 GB</p>
          <p>Color: Gold/#F7E3C8</p>
          <p className="flex">
            <span className="border-2 px-4 border-red-900">+</span>
            <span className="border-2 px-4 border-red-900">0</span>
            <span className="border-2 px-4 border-red-900">-</span>
            <h3 className="mx-10">₹15,199</h3>
          </p>
        </section>
      </div>
      <div className="mx-6 my-28 payment">
        <span className="font-extralight my-6">Shipping</span>
        <span className="mx-20 text-stone-400	">CALCULATED AT CHECKOUT</span>
        <p>
          <span className="font-bold	">Subtotal</span>
          <span className="font-bold	mx-20">₹30,398</span>
        </p>
        <p>
          or <span className="font-bold">Pay ₹10132 now.</span> Rest in{" "}
          <span className="font-bold">0% interest EMIs</span>
        </p>
        <p>Credit card NOT required, Online approval in 2 minutes</p>
        <p className="m-3 p-4 bg-amber-600 w-30 text-center h-12">
          <button>
            <h1>Pay via UPI/CODE</h1>
          </button>
        </p>
        <p className="m-3 p-4 bg-amber-600 w-30 text-center h-12">
          <button>
            <h1>Pay via UPI/EMI/Creadits/Debit</h1>
          </button>
        </p>
      </div>
    </div>
  );
};

export default CartProduct;
