import React from "react";
import Header from "../components/header";
import UpcomingMovieComponent from "../components/upcoming";
import TopRateMovieComponent from "../components/topRate";
import PopularMovieComponent from "../components/popular";

const MainPage: React.FunctionComponent = () => {
  return (
    <>
      <Header />
      <main className="mx-auto my-0" style={{ maxWidth: 1280 }}>
        <div className="py-6 px-0 mt-16">
          <UpcomingMovieComponent />
          <TopRateMovieComponent />
          <PopularMovieComponent />
        </div>
      </main>
    </>
  );
};

export default MainPage;
