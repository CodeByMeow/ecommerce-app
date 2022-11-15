import { useState, CSSProperties } from "react";
import PropagateLoader from "react-spinners/PropagateLoader";

const SubmitLoading = () => {
  return (
    <div className="w-full flex flex-col justify-center items-center gap-3">
      <p style={{ color: "#4f46e6" }}>
        Thanks for your submitting... Please wait.
      </p>
      <PropagateLoader color="#4f46e6" size="16" />
    </div>
  );
};

export default SubmitLoading;
