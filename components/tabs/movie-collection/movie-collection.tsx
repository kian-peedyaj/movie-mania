import MovieList from "@/components/movie-list";
import { getIsAdmin } from "@/utils/supabase/supa-helper-server";
import { fetchMovies } from "@/utils/supabase/tables/movies-server";

export const MoviesCollection = async () => {
  const is_admin = await getIsAdmin();
  const movies = await fetchMovies();
  const results = movies?.map((movie) => {
    return movie.movie_details || {};
  });
  return <MovieList movies={results} showRemoveButton={is_admin} />;
};
