"use client";
import React, { useEffect, useState } from "react";
import { Movie } from "@/types/common";
import { useRouter, useSearchParams } from "next/navigation";
import { fetchMovieById } from "@/utils/supabase/tables/movies";
import Image from "next/image";
import { ArrowLeftIcon } from "lucide-react";

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

  const handleBackClick = () => {
    router.back();
  };

  return (
    <div className="bg-opacity-30 min-h-screen bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-gray-100 p-6">
      <header className="mb-6 flex items-center">
        <button
          onClick={handleBackClick}
          className="flex items-center text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300"
        >
          <ArrowLeftIcon className="w-5 h-5 mr-2" />
          <span className="text-lg font-medium">Back</span>
        </button>
      </header>
      <main>
        <h1 className="text-4xl font-bold mb-4">{movie.title}</h1>
        <p className="text-lg text-gray-700 dark:text-gray-300">
          Release Date: {new Date(movie.release_date).toLocaleDateString()}
        </p>
        <Image
          alt={movie.title}
          className="w-full sm:w-40 h-auto my-6 rounded-lg"
          src={`${process.env.NEXT_PUBLIC_TMDB_IMAGE_URL}/${movie.poster_path}`}
          height={300}
          width={300}
        />
        <section>
          <h2 className="text-2xl font-semibold mb-4">Overview</h2>
          <p className="text-base leading-relaxed">{movie.overview}</p>
        </section>
      </main>
    </div>
  );
};

export default MovieDisplayPage;