import React, { useEffect, useState } from "react";
import { Movie } from "@/types/common";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import { useRouter, useSearchParams } from "next/navigation";
import { fetchMovieById } from "@/utils/supabase/tables/movies";

interface MovieDisplayPageProps {
  movie: Movie;
}

const MovieDisplayPage = () => {
  const router = useRouter();
  const searchParam = useSearchParams();
  const [movie, setMovie] = useState<Movie | null>(null);

  useEffect(() => {
    const data = searchParam.get("data");
    if (data) {
      const movieData = JSON.parse(decodeURIComponent(data));
      setMovie(movieData);
    } else {
      const id = window.location.pathname.split("/").pop() || "";
      fetchMovieById(id).then((data) => {
        setMovie(data);
      });
    }
  }, [searchParam]);

  if (!movie) {
    return "Loading...";
  }

  return (
    <div
      className="relative bg-cover bg-center h-screen"
      style={{ backgroundImage: `url(${movie.backdrop_path})` }}
    >
      <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
        <Card className="max-w-3xl p-6 bg-gray-900 bg-opacity-90 text-white rounded-lg shadow-lg">
          <CardHeader>
            <CardTitle className="text-4xl font-bold">{movie.title}</CardTitle>
          </CardHeader>
          <CardContent className="flex flex-col md:flex-row items-start mt-4">
            <img
              src={movie.poster_path}
              alt={`${movie.title} poster`}
              className="w-48 h-auto rounded-lg shadow-lg"
            />
            <div className="md:ml-6 mt-4 md:mt-0">
              <p className="text-lg">
                <strong>Release Date:</strong> {movie.release_date}
              </p>
              <p className="text-lg">
                <strong>Duration:</strong> {movie.duration}
              </p>
              <p className="mt-4">{movie.overview}</p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default MovieDisplayPage;
