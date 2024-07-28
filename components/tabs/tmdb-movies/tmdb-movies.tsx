import MovieList from "@/components/movie-list";
import tmdb from "@/utils/tmdb";
import { getIsAdmin } from "@/utils/supabase/supa-helper";

export const TmdbMovies = async () => {
  const { results } = (await tmdb.fetchTopRated()) || [];
  const is_admin = await getIsAdmin();
  return <MovieList movies={results} showAddButton={is_admin} />;
};
