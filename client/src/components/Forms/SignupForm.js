import React, { useState } from "react";
import {Link} from "react-router-dom";
import { signupFields } from "../../utils/inputField.js";

import SubmitLoading from "../Loading/SubmitLoading";
import Input from "../Input.js";
import Button from "../Button.js";

import "./Forms.css";

const inputFields = signupFields;
let fieldsState = {};
inputFields.map((field) => (fieldsState[field.id] = ""));

const SignupForm = (props) => {
  const { inProgress, onSignupHandler, success, error } = props;
  const [signupState, setSignupState] = useState(fieldsState);

  const handleInputChange = (e) => {
    const { id, value } = e.target;
    setSignupState({ ...signupState, [id]: value });
  };

  const onHandleSubmit = (e) => {
    e.preventDefault();
    onSignupHandler(signupState);
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
            Sign up new account
          </h2>
        </div>
        <form className="mt-8 space-y-6" onSubmit={onHandleSubmit}>
          <div>
            {inputFields.map((field) => (
              <Input
                key={field.id}
                handleChange={handleInputChange}
                value={signupState[field.id]}
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

          {inProgress ? <SubmitLoading /> : ( <div className="flex flex-wrap gap-6 items-center">
            <Button type="submit" customClass="btn-grad" text="Sign up" />            
          </div>)}
         
        </form>
      </div>
    </div>
  );
};

export default SignupForm;
