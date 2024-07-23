import React from "react";
import { Link } from "react-router-dom";
import { IoTrashBinSharp } from "react-icons/io5";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useGetMovieByIdQuery } from "../services/movieApi";
import MovieRating from "./MovieRating";
import { useDispatch } from "react-redux";
import { toggleFavorite } from "../redux/slices/favoritesSlice";
interface FavoriteMovieProps {
  movieId: number;
}
const FavoriteMovie: React.FC<FavoriteMovieProps> = ({ movieId }) => {
  const { data: movie, error, isLoading } = useGetMovieByIdQuery(movieId);
  const dispatch = useDispatch();

  const handleRemoveFavorite = () => {
    dispatch(toggleFavorite(movieId));
    toast.error("Removed from favorites!", {
      position: "top-right",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "colored",
    });
  };

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Error: {(error as any).message}</p>;
  if (!movie) return null;
  return (
    <div className="relative flex p-4 rounded shadow-lg bg-white">
      <img
        src={`https://image.tmdb.org/t/p/w400${movie.poster_path}`}
        alt={movie.title}
        className="w-[50%] h-[100%]"
      />
      <button
        className="absolute top-2 right-2 text-red-500 text-2xl"
        onClick={handleRemoveFavorite}
      >
        <IoTrashBinSharp />
      </button>
      <div className="ml-4 flex flex-col justify-between flex-grow">
        <div className="flex flex-col h-full">
          <h3 className="text-lg font-bold mb-2">{movie.title}</h3>
          <MovieRating voteAverage={movie.vote_average} />
          <p className="text-sm text-gray-600 flex-grow overflow-hidden">
            {movie.overview}
          </p>
          <Link
            to={`/detail/${movie.id}`}
            className="text-blue-500 hover:underline mt-2"
          >
            Detaylara Git
          </Link>
        </div>
      </div>
    </div>
  );
};
export default FavoriteMovie;
