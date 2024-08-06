import MovieList from "@/components/movie-list";
import tmdb from "@/utils/tmdb";
import { getIsAdmin } from "@/utils/supabase/supa-helper-server";
import { SearchBox } from "@/components/search-box";

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

  let results: any = [];
  console.log("@@@ query");
  if (query?.length > 2) {
    results = await tmdb.search(query);
  }
  console.log("@@@ results", results);

  return (
    <div className="pt-6">
      <SearchBox tmdb placeholder="Explore TMDB" />
      {results?.length > 0 ? (
        <MovieList
          title="Search Results"
          movies={results}
          showAddButton={is_admin}
          hideSearch
        />
      ) : (
        <>
          {query && <p className="ml-2 mt-2 mb-8">Sorry, nothing found!</p>}
          {moviesStack.map(({ title, movies }, index) => (
            <MovieList
              key={index}
              title={title}
              movies={movies}
              showAddButton={is_admin}
              hideSearch
            />
          ))}
        </>
      )}
    </div>
  );
};
