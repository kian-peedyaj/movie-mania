import { getUser } from "@/utils/supabase/supa-helper-server";
import { fetchMovies } from "@/utils/supabase/tables/movies-server";
import MovieList from "@/components/movie-list";
import { getUsersFavouriteMovies } from "@/utils/supabase/tables/favourites-server";

export default async function Favourites({
  searchParams,
}: {
  searchParams?: {
    query?: string;
    page?: string;
  };
}) {
  const favouriteMovies = (await getUsersFavouriteMovies()) || [];
  const movies = await fetchMovies();
  const filteredMovies = movies.filter((movie) =>
    favouriteMovies?.includes(movie?.id)
  );
  return (
    <MovieList
      title="Your Favourites"
      movies={filteredMovies}
      showFavouriteButton={true}
    />
  );
}
