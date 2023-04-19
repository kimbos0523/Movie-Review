import React from "react";
import Header from "../components/header";
import ProfileComponent from "../components/profile";

const ProfilePage: React.FunctionComponent = () => {
  return (
    <>
      <Header />
      <main className="mx-auto my-0" style={{ maxWidth: 1280 }}>
        <div className="py-6 px-0 mt-16">
          <ProfileComponent />
        </div>
      </main>
    </>
  );
};

export default ProfilePage;
