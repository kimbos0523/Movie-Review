import React from "react";
import PostComponent from "./PostComponent";
import PostContentComponent from "./PostContentComponent";
import MovieOverviewComponent from "./MovieOverviewComponent";
import MovieReviewComponent from "./MovieReviewComponent";

const DetailComponent: React.FunctionComponent = () => {
  return (
    <div className="bg-white border-b-2 pb-10">
      <PostComponent />
      <PostContentComponent />
      <MovieOverviewComponent />
      <MovieReviewComponent />
    </div>
  );
};

export default DetailComponent;
