import MovieList from "@/components/movie-list";
import { getIsAdmin } from "@/utils/supabase/supa-helper-server";
import { fetchMovies } from "@/utils/supabase/tables/movies-server";

export const MoviesCollection = async ({ query }: { query: string }) => {
  const is_admin = await getIsAdmin();
  const movies = await fetchMovies();
  const filteredMovies = movies.filter((movie) =>
    movie.title.toLowerCase().includes(query?.toLowerCase())
  );
  return (
    <MovieList
      movies={filteredMovies}
      showRemoveButton={is_admin}
      showFavouriteButton={!is_admin}
    />
  );
};
