import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { MoviesResponse, MovieDetails } from "../types";

const apiKey = import.meta.env.VITE_API_KEY;

export const movieApi = createApi({
  reducerPath: "movieApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://api.themoviedb.org/3/",
    prepareHeaders: (headers) => {
      headers.set("Authorization", `Bearer ${apiKey}`);
      return headers;
    },
  }),

  endpoints: (builder) => ({
    getMovies: builder.query<MoviesResponse, string>({
      query: (endpoint) => `movie/${endpoint}?language=tr`,
    }),

    getTrendingMovies: builder.query<MoviesResponse, void>({
      query: () => "trending/movie/day?language=tr",
    }),

    getMovieDetails: builder.query<MovieDetails, number>({
      query: (id) =>
        `movie/${id}?language=tr&append_to_response=credits,videos`,
    }),

    getMovieById: builder.query<MovieDetails, number>({
      query: (id) =>
        `movie/${id}?language=tr&append_to_response=credits,videos`,
    }),
  }),
});
export const {
  useGetMoviesQuery,
  useGetTrendingMoviesQuery,
  useGetMovieDetailsQuery,
  useGetMovieByIdQuery,
} = movieApi;
