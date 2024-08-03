// "use client";
import { Movie } from "@/types/common";
import { getUsersFavouriteMovies } from "@/utils/supabase/tables/favourites-server";
import { getIsAdmin, getUser } from "@/utils/supabase/supa-helper-server";
import { fetchMovies } from "@/utils/supabase/tables/movies-server";
import MovieCard from "@/components/movie-card/movie-card";
import { SearchBox } from "@/components/search-box";
import MovieList from "@/components/movie-list";

export default async function Dashboard({
  searchParams,
}: {
  searchParams?: {
    query?: string;
    page?: string;
  };
}) {
  const query = searchParams?.query || "";
  const movies = await fetchMovies();
  const user = await getUser();
  const filteredMovies = movies.filter((movie) =>
    movie.title.toLowerCase().includes(query.toLowerCase())
  );
  return <MovieList movies={filteredMovies} showFavouriteButton={!!user} />;
}
