import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { SIGN_IN } from "../../contexts/types.js";
import AuthContext from "../../contexts/AuthContext/AuthContext";
import SigninForm from "../../components/Forms/SigninForm";

import AuthServices from "../../services/authService.js";
import actionCreator from "../../utils/actionCreator.js";

import "../../components/Forms/Forms.css";
import PageContainer from "../../layouts/PageContainer/PageContainer.js";

const SigninPage = () => {
  const [signinErr, setSigninErr] = useState(null);
  const [signinProcess, setSigninProcess] = useState(false);
  const { dispatch } = useContext(AuthContext);

  const navigate = useNavigate();

  const onSigninHandler = async (inputVal) => {
    console.log(inputVal);
    setSigninProcess(true);
    try {
      const loginRes = await AuthServices.login(inputVal);
      console.log(loginRes);
      setTimeout(() => {
        dispatch(actionCreator(SIGN_IN, loginRes.data));
        setSigninProcess(false);
        navigate("/");
      }, 1000);
    } catch (err) {
      setTimeout(() => {
        console.log(err);
        setSigninErr(err.response.data);
        setSigninProcess(false);
      }, 1000);
    }
  };

  return (
    <PageContainer shouldShowFooter={false}>
      <SigninForm
        onSigninHandler={onSigninHandler}
        submitProcess={signinProcess}
        error={signinErr}
      />
    </PageContainer>
  );
};

export default SigninPage;
