import React from "react";

import { ToastContainer, toast } from "react-toastify";

const Notification = () => {
  const notify = () => toast("Wow so easy!");

  return (
    <div>
      <ToastContainer />
    </div>
  );
};

export default Notification;
