import MovieList from "@/components/movie-list";
import tmdb from "@/utils/tmdb";
import { getIsAdmin } from "@/utils/supabase/supa-helper-server";

export const TmdbMovies = async ({ query }: { query: string }) => {
  const nowPlaying = (await tmdb.fetchNowPlaying()) || [];
  const topRated = (await tmdb.fetchTopRated()) || [];
  const popular = (await tmdb.fetchPopular()) || [];
  const upcoming = (await tmdb.fetchUpcoming()) || [];
  const is_admin = await getIsAdmin();

  const moviesStack = [
    { title: "Upcoming", movies: upcoming },
    { title: "Now Playing", movies: nowPlaying },
    { title: "Top Rated", movies: topRated },
    { title: "Popular", movies: popular },
  ];

  return moviesStack.map(({ title, movies }, index) => (
    <MovieList
      key={index}
      title={title}
      movies={movies}
      showAddButton={is_admin}
      hideSearch
    />
  ));
};
