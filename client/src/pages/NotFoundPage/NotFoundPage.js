import React from "react";
import { useNavigate } from "react-router-dom";

import "./NotFoundPage.css";

const NotFoundPage = () => {
  const navigate = useNavigate();

  const onHandleBackHome = () => {
    navigate("/");
  }

  return (
    <div className="container w-screen h-screen py-16">
      <div className="w-full h-full flex flex-col space-y-10 justify-center items-center">
        <img
          src="/assets/background/NotFoundPage.png"
          alt="NotFoundPage"
          className="w-full h-auto"
        />
        <button className="text-4xl border-4 border-indigo-600 rounded-3xl hover:bg-indigo-600 hover:text-white transition-colors duration-300 px-8 py-4" onClick={() => onHandleBackHome()}>
          Back To Home
        </button>
      </div>
    </div>
  );
};

export default NotFoundPage;
