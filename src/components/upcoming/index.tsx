import React from "react";
import { useUpcomingMovie } from "../../hook";
import SliderComponents from "../slider";
import CardComponent from "../card";

const UpcomingMovieComponent: React.FunctionComponent = () => {
  const { data: upcomingMovieResponse, isLoading } = useUpcomingMovie();

  const getYear = (release_date: string) => release_date.split("-")[0] || "";

  return (
    <div className="mb-5">
      <h2 className="ms-2 mb-1 text-xl font-bold">Upcoming Movies</h2>
      {isLoading ? (
        <div>Need time to Load...</div>
      ) : (
        <div>
          <SliderComponents>
            {upcomingMovieResponse?.data?.results.map((movie) => (
              <CardComponent
                key={movie.id}
                url={`/movie/${movie.id}`}
                title={movie.title}
                poster={`https://image.tmdb.org/t/p/w300/${movie.poster_path}`}
                rate={movie.vote_average}
                year={getYear(movie.release_date)}
              />
            ))}
          </SliderComponents>
        </div>
      )}
    </div>
  );
};

export default UpcomingMovieComponent;
