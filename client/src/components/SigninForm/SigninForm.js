import React, { useState } from "react";
import { signinFields } from "../../utils/contanst.js";

import SubmitLoading from "../../components/Loading/SubmitLoading";
import Input from "../../components/Input.js";
import Button from "../../components/Button.js";

import "./SigninForm.css";

const inputFields = signinFields;
let fieldsState = {};
inputFields.map((field) => (fieldsState[field.id] = ""));

const SigninForm = (props) => {
  const { onSigninHandler, submitProcess, error } = props;
  const [signinState, setSigninState] = useState(fieldsState);

  const handleInputChange = (e) => {
    const { id, value } = e.target;
    setSigninState({ ...signinState, [id]: value });
  };

  const onHandleSubmit = (e) => {
    e.preventDefault();
    onSigninHandler(signinState);
  };

  const errNoti = () => {
    return error ? (
      <div style={{ color: "#bd2560", fontSize: "0.95rem" }}>{error}</div>
    ) : null;
  };

  return (
    <div className="w-full flex min-h-full h-screen items-center justify-center py-10 px-6 md:px-6 lg:px-8 form-container">
      <div className="w-full h-2/3 md:w-1/2 2xl:w-1/3 mx-auto space-y-8">
        <div className="my-10">
          <h2 className="mt-6 text-center md:text-2xl lg:text-3xl font-bold tracking-tight text-purple-400">
            Sign in to your account
          </h2>
        </div>
        <form className="mt-8 space-y-6" onSubmit={onHandleSubmit}>
          <div className="-space-y-px">
            {inputFields.map((field) => (
              <Input
                key={field.id}
                handleChange={handleInputChange}
                value={signinState[field.id]}
                labelText={field.labelText}
                labelFor={field.labelFor}
                id={field.id}
                name={field.name}
                type={field.type}
                isRequired={field.isRequired}
                placeholder={field.placeholder}
                customClass=""
              />
            ))}
            {errNoti}
          </div>

          {submitProcess ? <SubmitLoading /> : ( <div>
            <Button type="submit" customClass="btn-grad" text="Sign in" />
          </div>)}
         
        </form>
      </div>
    </div>
  );
};

export default SigninForm;
