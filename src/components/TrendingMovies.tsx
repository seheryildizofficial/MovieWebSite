import { useGetTrendingMoviesQuery } from "../services/movieApi";
// @ts-ignore
import { Splide, SplideSlide } from "@splidejs/react-splide";
import { useSelector } from "react-redux";
import "@splidejs/react-splide/css";
import { Movie, FavoritesState } from "../types";
import Card from "./Card";

const TrendingMovies = () => {
  const { data, error, isLoading } = useGetTrendingMoviesQuery();

  const favorites = useSelector(
    (state: { favorites: FavoritesState }) => state.favorites.favorites
  );

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error loading trending movies.</div>;

  return (
    <div>
      <h2 className="text-2xl font-bold my-4 ml-5">Trending Movies</h2>
      <Splide
        options={{
          gap: "10px",
          autoWidth: true,
          pagination: false,
        }}
      >
        {data?.results?.map((movie: Movie) => (
          <SplideSlide key={movie.id}>
            <Card movie={movie} favorites={favorites} />
          </SplideSlide>
        ))}
      </Splide>
    </div>
  );
};
export default TrendingMovies;
