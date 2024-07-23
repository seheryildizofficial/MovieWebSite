import { useGetMoviesQuery } from "../services/movieApi";
// @ts-ignore
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import { useSelector } from "react-redux";
import { Movie, FavoritesState } from "../types";
import Card from "./Card";

const TopRatedMovies = () => {
  const { data, error, isLoading } = useGetMoviesQuery("top_rated");

  const favorites = useSelector(
    (state: { favorites: FavoritesState }) => state.favorites.favorites
  );

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error loading top rated movies.</div>;

  return (
    <div>
      <h2 className="text-2xl font-bold my-4 ml-5">Top Rated Movies</h2>
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
export default TopRatedMovies;
