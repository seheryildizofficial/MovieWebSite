import { Dispatch } from "redux";
import { toast } from "react-toastify";
import { toggleFavorite } from "../redux/slices/favoritesSlice";
export const handleFavoriteClick = (
  movieId: number,
  favorites: number[],
  dispatch: Dispatch
) => {
  const isFavorite = favorites.includes(movieId);
  dispatch(toggleFavorite(movieId));
  if (isFavorite) {
    toast.error("Favorilerden kaldırıldı!", {
      position: "top-right",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "colored",
    });
  } else {
    toast.success("Favorilere eklendi!", {
      position: "top-right",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "colored",
    });
  }
};
