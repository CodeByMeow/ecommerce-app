import BounceLoader from "react-spinners/BounceLoader";

import "./Loading.css";

const RenderLoading = () => {
  return (
    <div className="render-loading w-full h-full flex flex-col justify-center items-center gap-3">
      <h3 className="text-lg lg:text-2xl text-indigo-600">Please wait...</h3>
      <BounceLoader color="#4f46e6" size="166" />
    </div>
  );
};

export default RenderLoading;
