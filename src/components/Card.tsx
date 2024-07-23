import { Link } from "react-router-dom";
import { Movie } from "../types";
import { handleFavoriteClick } from "../utils/handleFavorite";
import { useDispatch } from "react-redux";
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";

const Card = ({ movie, favorites }: { movie: Movie; favorites: number[] }) => {
  const dispatch = useDispatch();

  const onFavoriteClick = (movieId: number) => {
    handleFavoriteClick(movieId, favorites, dispatch);
  };

  return (
    <div className="relative group p-4 rounded">
      <Link to={`/detail/${movie.id}`}>
        <div className="relative">
          <img
            src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`}
            alt={movie.title}
          />
          <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-60 opacity-0 group-hover:opacity-100 transition-opacity">
            <h3 className="text-sm font-bold text-white text-center">{movie.title}</h3>
          </div>
        </div>
      </Link>
      <button
        className="absolute top-6 right-6 text-white text-3xl"
        onClick={() => onFavoriteClick(movie.id)}
      >
        {favorites.includes(movie.id) ? (
          <AiFillHeart className="text-red-500" />
        ) : (
          <AiOutlineHeart />
        )}
      </button>
    </div>
  );
};

export default Card;
