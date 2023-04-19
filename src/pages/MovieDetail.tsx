import React from "react";
import Header from "../components/header";
import DetailComponent from "../components/detail";

const MovieDetailPage: React.FunctionComponent = () => {
  return (
    <div className="relative" style={{ backgroundColor: "#f2f2f2" }}>
      <Header />
      <DetailComponent />
    </div>
  );
};

export default MovieDetailPage;
