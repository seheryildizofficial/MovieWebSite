import { useGetMoviesQuery } from "../services/movieApi";
import { useNavigate } from "react-router-dom";
// @ts-ignore
import { Splide, SplideSlide } from "@splidejs/react-splide";
import { useSelector } from "react-redux";
import { RootState } from "../redux/store";
import { FaArrowAltCircleRight } from "react-icons/fa";
import "@splidejs/react-splide/css";
import { Movie } from "../types";
import Card from "./Card";

const PopularMovies = () => {
  const { data, error, isLoading } = useGetMoviesQuery("popular");
  const favorites = useSelector((state: RootState) => state.favorites.favorites);
  const navigate = useNavigate();

  if (isLoading) {
    return (
      <div className="flex items-center justify-center min-h-screen">Loading...</div>
    );
  }

  if (error) {
    console.error("Error loading popular movies:", error);
    return (
      <div className="flex items-center justify-center min-h-screen">
        Error loading popular movies.
      </div>
    );
  }
  return (
    <div>
      <div className="flex justify-between">
        <span className="text-2xl font-bold my-4 ml-5">Popular Movies</span>
        <button
          className="mr-5 bg-green-300 rounded-lg mt-3 h-10 p-3 flex items-center"
          onClick={() => navigate("/favorites")}
        >
          <span className="font-bold mr-2">Favorilere git </span>
          <FaArrowAltCircleRight />
        </button>
      </div>
      <Splide
        options={{
          gap: "10px",
          autoWidth: true,
          pagination: false,
        }}
      >
        {data?.results.map((movie: Movie) => (
          <SplideSlide key={movie.id}>
            <Card movie={movie} favorites={favorites} />
          </SplideSlide>
        ))}
      </Splide>
    </div>
  );
};
export default PopularMovies;
