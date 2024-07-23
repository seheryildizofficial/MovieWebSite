import React from "react";
import { useGetMoviesQuery } from "../services/movieApi";
import { baseImgURL } from "../constants";
import Spinner from "./Spinner";

const Hero: React.FC = () => {
  const { data, error, isLoading } = useGetMoviesQuery("popular");

  if (isLoading) return <Spinner />;
  if (error) return <p>Veriler yüklenirken bir hata oluştu.</p>;

  const index = data ? Math.floor(Math.random() * data.results.length) : 0;
  const randomMovie = data?.results[index];

  if (!randomMovie) return null;

  return (
    <div className="container mx-auto p-4">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        <div className="flex flex-col gap-3 items-center justify-center p-10">
          <h1 className="text-2xl font-bold">{randomMovie.title}</h1>
          <p>{randomMovie.overview}</p>
          <p>
            <span>IMDB:</span>
            <span className="text-yellow-500 px-2">{randomMovie.vote_average}</span>
          </p>
          <div className="flex gap-3">
            <button className="bg-red-400 p-2 rounded-md">Filmi İzle</button>
            <button className="bg-blue-400 p-2 rounded-md">Listeye Ekle</button>
          </div>
        </div>
        <div className="flex items-center justify-center">
          <img
            className="rounded shadow my-4 max-w-full"
            src={`${baseImgURL}${randomMovie.backdrop_path}`}
            alt={randomMovie.title}
          />
        </div>
      </div>
    </div>
  );
};
export default Hero;
