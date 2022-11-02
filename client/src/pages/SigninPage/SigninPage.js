import React, { useState } from "react";
import AuthContext from "../../contexts/AuthContext/AuthContext";
import SigninForm from "../../components/SigninForm/SigninForm";
import PageContainer from "../../layouts/PageContainer/PageContainer";

import "../../components/SigninForm/SigninForm.css";

const SigninPage = () => {
  const [signinErr, setSigninError] = useState(null);

  const onSigninHandler = (inputVal) => {
    console.log(inputVal);
  };

  return <SigninForm onSigninHandler={onSigninHandler} />;
};

export default SigninPage;
