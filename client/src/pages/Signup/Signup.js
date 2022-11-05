import { useFormik } from "formik";
import React from "react";
import PageContainer from "../../layouts/PageContainer/PageContainer";

const Signup = () => {
  const fomik = useFormik({
    initialValues: {
      email: "",
      name: "",
      phone: "",
      password: "",
    },
  });

  return (
    <PageContainer>
      <div className="flex flex-col justify-center items-center">
        <form
          className=" w-1/2 h-auto  m-6 flex flex-col justify-center items-center"
          onSubmit={fomik.handleSubmit}
        >
          <h1 className="m-6">SIGN UP</h1>
          <div className="form-floating mb-3 w-3/4">
            <input
              type="text"
              name="name"
              className="form-control"
              id="name"
              onChange={fomik.handleChange}
              placeholder="Enter your name"
            />

            <label htmlFor="floatingInput">Your name</label>
          </div>

          <div className="form-floating mb-3 w-3/4">
            <input
              type="email"
              className="form-control"
              id="email"
              name="email"
              onChange={fomik.handleChange}
              placeholder="name@example.com"
            />

            <label htmlFor="floatingInput">Email address</label>
          </div>
          <div className="form-floating w-3/4 ">
            <input
              type="text"
              className="form-control"
              id="password"
              name="password"
              onChange={fomik.handleChange}
              placeholder="Password"
            />

            <label htmlFor="floatingPassword">Password</label>
          </div>
          <div className="form-floating m-3 w-3/4 ">
            <input
              type="number"
              name="phone"
              className="form-control"
              id="phone"
              onChange={fomik.handleChange}
              placeholder="Password"
            />

            <label htmlFor="floatingPassword">Phone</label>
          </div>
          <button type="submit" className="bg-cyan-500 w-1/3 h-12">
            Sign up
          </button>
        </form>
      </div>
    </PageContainer>
  );
};

export default Signup;
