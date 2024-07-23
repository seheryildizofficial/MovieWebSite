import PopularMovies from "../components/PopularMovies";
import Hero from "../components/Hero";
import TopRatedMovies from "../components/TopRatedMovies";
import TrendingMovies from "../components/TrendingMovies";
const MainPage = () => {
  return (
    <>
      <Hero />
      <PopularMovies />
      <TopRatedMovies />
      <TrendingMovies />
    </>
  );
};

export default MainPage;
