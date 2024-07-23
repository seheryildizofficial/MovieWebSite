export interface Movie {
  id: number;
  title: string;
  overview: string;
  release_date: string;
  poster_path: string;
  backdrop_path: string;
  vote_average: number;
}
export interface MoviesResponse {
  page: number;
  results: Movie[];
  total_pages: number;
  total_results: number;
}
export interface AddToFavoriteBody {
  media_type: string;
  media_id: number;
  favorite: boolean;
}
export interface AddToFavoriteResponse {
  status_code: number;
  status_message: string;
}
export interface MovieDetails {
  title: string;
  backdrop_path: string;
  overview: string;
  production_companies: {
    id: number;
    name: string;
    logo_path: string | null;
  }[];
  spoken_languages: { iso_639_1: string; name: string }[];
  production_countries: { iso_3166_1: string; name: string }[];
  budget: number;
  revenue: number;
  runtime: number;
  release_date: string;
  credits: {
    cast: { cast_id: number; name: string; profile_path: string | null }[];
  };
  videos: {
    results: { key: string }[];
  };
  poster_path: string;
  vote_average: number;
  id: number;
}
export interface FavoritesState {
  favorites: number[];
}
