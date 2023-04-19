import { useQuery } from "react-query";
import {
  upcomingAPI,
  topRateAPI,
  popularAPI,
  searchAPI,
  detailAPI,
} from "../api/movieAPI";
import { AxiosResponse, AxiosError } from "axios";
import { ListResponse, MovieDetail, Movie } from "../data";

export const useUpcomingMovie = () => {
  return useQuery<AxiosResponse<ListResponse<MovieDetail>>, AxiosError>(
    "upcomingMovie",
    upcomingAPI
  );
};

export const useTopRateMovie = () => {
  return useQuery<AxiosResponse<ListResponse<MovieDetail>>, AxiosError>(
    "topRateMovie",
    topRateAPI
  );
};

export const usePopularMovie = () => {
  return useQuery<AxiosResponse<ListResponse<MovieDetail>>, AxiosError>(
    "popularMovie",
    popularAPI
  );
};

export const useSearchMovie = (query: string) => {
  return useQuery<AxiosResponse<ListResponse<Movie>>, AxiosError>(
    ["searchMovie", query],
    () => searchAPI(query),
    { enabled: Boolean(query) }
  );
};

export const useDetail = (id: string) => {
  return useQuery<AxiosResponse<MovieDetail>, AxiosError>(
    ["movieDetail", id],
    () => detailAPI(id)
  );
};
