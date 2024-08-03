import MovieList from "@/components/movie-list";
import tmdb from "@/utils/tmdb";
import { getIsAdmin } from "@/utils/supabase/supa-helper-server";

export const TmdbMovies = async ({ query }: { query: string }) => {
  const { results } = (await tmdb.fetchTopRated()) || [];
  const is_admin = await getIsAdmin();
  return <MovieList movies={results} showAddButton={is_admin} />;
};
