import React from "react";
import { useParams } from "react-router-dom";
import { useGetMovieDetailsQuery } from "../services/movieApi";
import { baseImgURL } from "../constants";
//@ts-ignore
import { Splide, SplideSlide } from "@splidejs/react-splide";
import { millify } from "millify";
import { MovieDetails } from "../types";
import Spinner from "../components/Spinner";
const DetailPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const { data, error, isLoading } = useGetMovieDetailsQuery(Number(id));

  if (isLoading) {
    return (
      <div className="flex items-center justify-center">
        <Spinner />
      </div>
    );
  }
  if (error) {
    return (
      <div className="flex items-center justify-center">
        <p>Error loading data.</p>
      </div>
    );
  }
  const movieDetails = data as MovieDetails;
  return (
    <div className="container mx-auto p-4">
      {/* Banner */}
      <div className="w-full relative">
        <img
          className="w-[100%] h-[400px] object-cover"
          src={`${baseImgURL}${movieDetails.backdrop_path}`}
          alt={movieDetails.overview}
        />
        <div className="absolute inset-0 bg-black bg-opacity-60 flex items-center justify-center text-white font-bold">
          <span className="text-2xl">{movieDetails.title}</span>
        </div>
      </div>
      {/* Main content */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
        {/* Left side */}
        <div>
          <h3 className="text-lg font-bold">Yapımcı Şirketler</h3>
          <div className="flex flex-wrap gap-4 mt-2">
            {movieDetails.production_companies.map((i) => (
              <div key={i.id} className="bg-slate-100 rounded p-2 flex items-center">
                {i.logo_path ? (
                  <img
                    className="object-contain"
                    height={50}
                    width={100}
                    src={`${baseImgURL}${i.logo_path}`}
                    alt={i.name}
                  />
                ) : (
                  <span className="text-black font-bold text-center">{i.name}</span>
                )}
              </div>
            ))}
          </div>
          <h3 className="text-lg font-bold mt-4">Konuşulan Diller</h3>
          <div className="flex flex-wrap gap-4 mt-2">
            {movieDetails.spoken_languages.map((language) => (
              <div
                key={language.iso_639_1}
                className="bg-slate-100 rounded p-2 flex items-center"
              >
                <p className="text-black font-bold text-center">{language.name}</p>
              </div>
            ))}
          </div>
          <h3 className="text-lg font-bold mt-4">Yapımcı Ülkeler</h3>
          <div className="flex flex-wrap gap-4 mt-2">
            {movieDetails.production_countries.map((country) => (
              <div
                key={country.iso_3166_1}
                className="bg-slate-100 rounded p-2 flex items-center"
              >
                <p className="text-black font-bold text-center">{country.name}</p>
              </div>
            ))}
          </div>
        </div>
        {/* Right side */}
        <div className="flex flex-col items-center justify-center">
          <p className="text-center">{movieDetails.overview}</p>
          <div className="flex flex-row items-center justify-center mt-4 gap-8">
            <div className="flex flex-col items-center">
              <p className="font-bold text-base">
                <span>Bütçe: </span>
                <span className="text-yellow-500">{millify(movieDetails.budget)}$</span>
              </p>
              <p className="font-bold text-base mt-2">
                <span>Hasılat: </span>
                <span className="text-yellow-500">{millify(movieDetails.revenue)}$</span>
              </p>
            </div>
            <div className="flex flex-col items-center">
              <p className="font-bold text-base mt-2">
                <span>Süre: </span>
                <span className="text-yellow-500">{movieDetails.runtime} dakika</span>
              </p>
              <p className="font-bold text-base mt-2">
                <span>Vizyon Tarihi: </span>
                <span className="text-yellow-500">{movieDetails.release_date}</span>
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* Cast list */}
      <div className="mt-4">
        <h2 className="text-lg font-bold">Oyuncu Kadrosu</h2>
        <Splide
          options={{
            height: "200px",
            gap: "10px",
            pagination: false,
            autoWidth: true,
          }}
        >
          {movieDetails.credits.cast.map((actor) => (
            <SplideSlide key={actor.cast_id}>
              <div className="relative group h-[200px] flex flex-col cursor-pointer overflow-hidden">
                <img
                  className="w-full h-full object-cover "
                  src={
                    actor.profile_path
                      ? `${baseImgURL}${actor.profile_path}`
                      : "/src/assets/img/defaultProfile.jpg"
                  }
                  alt={actor.name}
                />
                <p className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-70 text-white font-bold opacity-0 transition-opacity duration-300 ease-in-out group-hover:opacity-100">
                  <span>{actor.name}</span>
                </p>
              </div>
            </SplideSlide>
          ))}
        </Splide>
      </div>
      {/* Videos */}
      {movieDetails.videos.results.length > 0 && (
        <div className="my-5">
          <Splide
            options={{
              height: "50vh",
            }}
          >
            {movieDetails.videos.results.map((video) => (
              <SplideSlide key={video.key}>
                <iframe
                  width="100%"
                  height="100%"
                  src={`https://www.youtube.com/embed/${video.key}`}
                ></iframe>
              </SplideSlide>
            ))}
          </Splide>
        </div>
      )}
    </div>
  );
};
export default DetailPage;
