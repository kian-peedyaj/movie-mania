"use client";
import MovieCard from "./movie-card/movie-card";
import { Movie, Movies } from "@/types/common";
import { SearchBox } from "./search-box";
import { ChangeEvent, useEffect, useState } from "react";

const MovieList: React.FC<{
  movies: Movies;
  showAddButton?: boolean;
  showRemoveButton?: boolean;
}> = ({ movies, showAddButton = false, showRemoveButton = false }) => {
  const [filteredMovies, setFilteredMovies] = useState<Movies>([]);
  useEffect(() => {
    setFilteredMovies(movies);
  }, [movies]);
  const handleSearch = (e: ChangeEvent) => {
    const searchText = e?.target?.value || "";
    setFilteredMovies(
      movies.filter((movie) =>
        movie.title.toLowerCase().includes(searchText.toLowerCase())
      )
    );
  };
  return (
    <div>
      <SearchBox onChange={handleSearch}></SearchBox>
      <div className="flex flex-wrap flex-row m-4">
        {filteredMovies?.map((movie: Movie) => (
          <MovieCard
            key={movie.id}
            movie={movie}
            showAddButton={showAddButton}
            showRemoveButton={showRemoveButton}
          />
        ))}
      </div>
    </div>
  );
};

export default MovieList;
