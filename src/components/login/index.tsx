import React from "react";
import "./index.css";

const LoginComponent: React.FunctionComponent = () => {
  return (
    <div className="login-form-container">
      <h2 className="login-text mb-4">Login</h2>
      <form className="login-form">
        <div className="login-form-group">
          <label className="login-form-label" htmlFor="userId">
            User ID
          </label>
          <input
            className="login-form-input"
            placeholder="Your ID"
            required
          ></input>
        </div>
        <div className="login-form-group">
          <label className="login-form-label" htmlFor="userPw">
            Password
          </label>
          <input
            className="login-form-input"
            placeholder="Your Password"
            required
          ></input>
        </div>
        <div className="login-form-group">
          <button className="login-btn bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-10 mr-10">
            Login
          </button>
          <button className="login-btn mt-10 bg-white hover:bg-slate-200 text-black font-bold py-2 px-4 rounded">
            Signup
          </button>
        </div>
      </form>
    </div>
  );
};

export default LoginComponent;
