import React, { useState } from "react";
import Header from "./Header";

const Login = () => {
  const [isSignForm, setSignInForm] = useState(true);

  const toggleSignInForm = () => {
    setSignInForm(!isSignForm);
  };
  return (
    <div>
      <Header />
      <div className="absolute">
        <img
          src="https://assets.nflxext.com/ffe/siteui/vlv3/03ad76d1-e184-4d99-ae7d-708672fa1ac2/web/IN-en-20241111-TRIFECTA-perspective_149877ab-fcbd-4e4f-a885-8d6174a1ee81_small.jpg"
          alt="logo"
        />
      </div>
      <form className="w-3/12 absolute p-12 bg-black my-24 mx-auto right-0 left-0 text-white rounded-lg bg-opacity-80">
        <h1 className="font-bold text-3xl py-4">
          {isSignForm ? "Sign In" : "Sign Up"}
        </h1>
        {!isSignForm && (
          <input
            type="text"
            placeholder="Full Name"
            className="p-4 my-4 w-full bg-gray-700"
          />
        )}
        <input
          type="text"
          placeholder="Email Address"
          className="p-4 my-4 w-full bg-gray-700"
        />
        <input
          type="password"
          placeholder="Password"
          className="p-4 my-4 w-full bg-gray-700"
        />
        <button className="p-4 my-6 bg-red-700 w-full rounded-lg">
          {isSignForm ? "Sign In" : "Sign Up"}
        </button>
        <p onClick={toggleSignInForm} className="py-2 cursor-pointer ">
          {isSignForm
            ? "New to Netflix? Sign Up Now"
            : "Already Have an Account? Sign In"}
        </p>
      </form>
    </div>
  );
};

export default Login;
