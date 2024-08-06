"use client";

import MovieList from "@/components/movie-list";
import { SearchBox } from "@/components/search-box";
import tmdb from "@/utils/tmdb";
import { useState } from "react";

export const TmdbSearch = ({ children }) => {
  const [searchResults, setSeatchResults] = useState([]);

  const handleSearch = async (query: string) => {
    if (query?.length < 3) return;
    const { results }: any = await tmdb.search(query);
    setSeatchResults(results);
  };

  return (
    <>
      <SearchBox tmdb onSearchClick={handleSearch} placeholder="Explore TMDB" />
      <>
      {searchResults && <MovieList movies={searchResults}> }
        {!searchResults && children}
      </>
    </>
  );
};
