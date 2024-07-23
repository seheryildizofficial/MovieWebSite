import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { FaArrowAltCircleRight } from "react-icons/fa";
import "react-toastify/dist/ReactToastify.css";
import { RootState } from "../redux/store";
import FavoriteMovie from "../components/FavoriteMovies";
const FavoritePage = () => {
  const favorites = useSelector((state: RootState) => state.favorites.favorites);

  const navigate = useNavigate();

  return (
    <div>
      <div className="flex justify-between">
        <span className="text-2xl font-bold my-4 ml-5">Favori Filmler</span>
        <button
          className="mr-5 bg-green-300 rounded-lg mt-3 h-10 p-3 flex items-center"
          onClick={() => navigate("/")}
        >
          <span className="font-bold mr-2">Anasayfaya git</span>
          <FaArrowAltCircleRight />
        </button>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {favorites.map((movieId: number) => (
          <FavoriteMovie key={movieId} movieId={movieId} />
        ))}
      </div>
    </div>
  );
};
export default FavoritePage;
