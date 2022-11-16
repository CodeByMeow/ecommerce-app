import React, { useState } from "react";
import { Link } from "react-router-dom";
import { signinFields } from "../../utils/inputField.js";

import SubmitLoading from "../Loading/SubmitLoading";
import Input from "../Input.js";
import Button from "../Button.js";

import "./Forms.css";

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
    <div className="w-full flex justify-center py-10 px-6 md:px-6 lg:px-8 form-container">
      <div className="w-11/12 h-full md:w-2/3 2xl:w-1/3 mx-auto space-y-8">
        <div className="">
          <h2 className="mb-4 text-center md:text-2xl lg:text-3xl font-bold text-purple-700">
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

          {submitProcess ? (
            <SubmitLoading />
          ) : (
            <div className="flex flex-col gap-6">
              <Button
                type="submit"
                customClass="btn-grad w-full md:w-1/3"
                text="Sign in"
              />
              <p className="text-purple-700 text-sm md:text-base lg:text-lg">
                Don't have an account? <br className="md:hidden"/>Please sign up &nbsp;
                <span>
                  <Link
                    to="/signup"
                    alt="Sign up"
                    className="underline text-white"
                  >here
                  </Link>
                </span>
              </p>
            </div>
          )}
        </form>
      </div>
    </div>
  );
};

export default SigninForm;
