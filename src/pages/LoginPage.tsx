import React from "react";
import Header from "../components/header";
import LoginComponent from "../components/login";

const LoginPage: React.FunctionComponent = () => {
  return (
    <>
      <Header />
      <main className="mx-auto my-0" style={{ maxWidth: 1280 }}>
        <div className="py-6 px-0 mt-16">
          <LoginComponent />
        </div>
      </main>
    </>
  );
};

export default LoginPage;
