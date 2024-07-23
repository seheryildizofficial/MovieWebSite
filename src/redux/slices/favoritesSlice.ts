import { createSlice, PayloadAction } from "@reduxjs/toolkit";
interface FavoritesState {
  favorites: number[];
}
const initialState: FavoritesState = {
  favorites: JSON.parse(localStorage.getItem("favorites") || "[]"),
};
const favoritesSlice = createSlice({
  name: "favorites",
  initialState,
  reducers: {
    toggleFavorite: (state, action: PayloadAction<number>) => {
      const movieId = action.payload;
      if (state.favorites.includes(movieId)) {
        state.favorites = state.favorites.filter((id) => id !== movieId);
      } else {
        state.favorites.push(movieId);
      }
      localStorage.setItem("favorites", JSON.stringify(state.favorites));
    },
  },
});
export const { toggleFavorite } = favoritesSlice.actions;
export default favoritesSlice.reducer;
